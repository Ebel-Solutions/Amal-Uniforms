/**
 * Firebase Admin SDK — singleton initializer
 *
 * Server-side only. Never import this from client components.
 * Reads credentials from environment variables set in .env.local
 */

import { getApps, initializeApp, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let app: App;
let db: Firestore;

function getFirebaseAdmin(): { app: App; db: Firestore } {
  if (app && db) return { app, db };

  const existingApps = getApps();

  if (existingApps.length > 0) {
    app = existingApps[0];
  } else {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error(
        "[Firebase] Missing required environment variables: " +
          "FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY"
      );
    }

    app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        // Replace escaped newlines (common when reading from env vars)
        privateKey: privateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  db = getFirestore(app);
  return { app, db };
}

export { getFirebaseAdmin };

/**
 * Convenience: get Firestore instance
 */
export function getDb(): Firestore {
  return getFirebaseAdmin().db;
}
