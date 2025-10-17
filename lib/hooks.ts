/**
 * 📦 lib/hooks.ts
 * Small, reusable client-side hooks to improve UX & accessibility.
 * Includes:
 *  - useLockBodyScroll → Prevent scrolling when modals/menus are open
 *  - useEscape → Trigger callback on ESC key press
 *  - useFocusTrap → Trap focus within a container while active
 */

"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Prevent body scroll when `locked` is true.
 * Example:
 *   useLockBodyScroll(isModalOpen);
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (locked) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

/**
 * Trigger `onEsc` callback when Escape key is pressed.
 * Example:
 *   useEscape(() => closeModal(), isModalOpen);
 */
export function useEscape(onEsc: () => void, active: boolean = true) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (!active) return;
      if (e.key === "Escape") {
        onEsc();
      }
    },
    [onEsc, active]
  );

  useEffect(() => {
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handler]);
}

/**
 * Trap focus inside a container while active.
 * Returns a ref to be attached to the container.
 * Example:
 *   const ref = useFocusTrap(isOpen);
 *   return <div ref={ref}>...</div>
 */
export function useFocusTrap(active: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const root = ref.current;
    if (!root) return;

    // Collect all focusable elements
    const focusable = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
      );

    // Focus first element on open
    const list = focusable();
    if (list.length) list[0].focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (activeEl === first || !root.contains(activeEl)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    root.addEventListener("keydown", onKeyDown as any);
    return () => root.removeEventListener("keydown", onKeyDown as any);
  }, [active]);

  return ref as React.RefObject<HTMLDivElement>;
}
