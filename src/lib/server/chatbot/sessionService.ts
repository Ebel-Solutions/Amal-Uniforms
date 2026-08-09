/**
 * Chatbot Session Service
 *
 * In-memory session store with TTL.
 * Tracks conversation state and collected lead data per WhatsApp user.
 *
 * For production at scale, replace the Map with a Redis/Upstash store.
 * The interface is kept simple so swapping the backend is straightforward.
 */

import { FlowState, FLOW_STATE } from "@/lib/server/chatbot/config";

// ─── Session Shape ────────────────────────────────────────────────────────────

export interface ChatSession {
  waId: string;
  name: string;
  state: FlowState;
  lastActivity: number; // Unix ms

  // Collected enquiry data
  industry?: string;
  uniformType?: string;
  quantity?: string;
  logoRequired?: string;
  deliveryLocation?: string;

  // Contact details
  contactName?: string;
  companyName?: string;
  email?: string;
  phone?: string;

  // Flow-specific context
  subFlow?: "enquiry" | "quote" | "corporate"; // which flow triggered contact collection
}

// ─── In-Memory Store ──────────────────────────────────────────────────────────

const SESSION_TTL_MS = 30 * 60 * 1000; // 30 minutes of inactivity

const store = new Map<string, ChatSession>();

// Garbage-collect expired sessions every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, session] of store.entries()) {
    if (now - session.lastActivity > SESSION_TTL_MS) {
      store.delete(key);
    }
  }
}, 15 * 60 * 1000);

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Gets the current session for a WhatsApp user, or creates a fresh one.
 */
export function getSession(waId: string, displayName: string): ChatSession {
  const existing = store.get(waId);

  if (existing && Date.now() - existing.lastActivity <= SESSION_TTL_MS) {
    existing.lastActivity = Date.now();
    // Update display name if it changes
    if (displayName && displayName !== existing.name) {
      existing.name = displayName;
    }
    return existing;
  }

  // Create new session
  const session: ChatSession = {
    waId,
    name: displayName || waId,
    state: FLOW_STATE.IDLE,
    lastActivity: Date.now(),
  };

  store.set(waId, session);
  return session;
}

/**
 * Updates fields on an existing session.
 */
export function updateSession(
  waId: string,
  patch: Partial<Omit<ChatSession, "waId">>
): void {
  const session = store.get(waId);
  if (!session) return;

  Object.assign(session, patch, { lastActivity: Date.now() });
  store.set(waId, session);
}

/**
 * Resets a session to initial idle state (used after a flow completes).
 */
export function resetSession(waId: string): void {
  const session = store.get(waId);
  if (!session) return;

  const fresh: ChatSession = {
    waId: session.waId,
    name: session.name,
    state: FLOW_STATE.IDLE,
    lastActivity: Date.now(),
  };

  store.set(waId, fresh);
}

/**
 * Removes a session entirely.
 */
export function clearSession(waId: string): void {
  store.delete(waId);
}
