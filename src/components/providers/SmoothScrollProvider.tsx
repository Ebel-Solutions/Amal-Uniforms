"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // If navigating to a new route without a hash, scroll to top
    if (lenis && !window.location.hash) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <RouteScrollReset />
      {children}
    </ReactLenis>
  );
}
