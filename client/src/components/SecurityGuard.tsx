import { useEffect } from "react";

export function SecurityGuard() {
  useEffect(() => {
    // ── Block right-click context menu ──────────────────────────────────────
    const blockContext = (e: MouseEvent) => e.preventDefault();

    // ── Block DevTools keyboard shortcuts & page source ─────────────────────
    const blockKeys = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;

      // F12
      if (e.key === "F12") { e.preventDefault(); e.stopPropagation(); return; }

      if (ctrl && e.shiftKey) {
        switch (e.key.toLowerCase()) {
          case "i": // Chrome DevTools
          case "j": // Chrome Console
          case "c": // Chrome Inspector
          case "k": // Firefox Console
          case "s": // Firefox DevTools
            e.preventDefault(); e.stopPropagation(); return;
        }
      }

      if (ctrl) {
        switch (e.key.toLowerCase()) {
          case "u": // View source
          case "s": // Save page
          case "p": // Print
            e.preventDefault(); e.stopPropagation(); return;
        }
      }
    };

    // ── Block image drag ────────────────────────────────────────────────────
    const blockDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") e.preventDefault();
    };

    // ── Disable print via keyboard / system ─────────────────────────────────
    const blockPrint = () => {
      document.body.style.display = "none";
      setTimeout(() => { document.body.style.display = ""; }, 0);
    };

    // ── Console warning ──────────────────────────────────────────────────────
    const warn = () => {
      console.clear();
      console.log(
        "%c⚠ STOP",
        "color:#FF5722;font-size:32px;font-weight:900;"
      );
      console.log(
        "%cThis tool is for developers. Attempting to copy or scrape content from this site is prohibited. Unauthorised access may be prosecuted.",
        "color:#fff;background:#0A0A0A;font-size:14px;padding:8px;"
      );
    };

    warn();

    // Re-warn every time DevTools might be opened (heuristic: console size check)
    const devtoolsTimer = setInterval(() => {
      const threshold = 160;
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        warn();
      }
    }, 1000);

    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys, true);
    document.addEventListener("dragstart", blockDrag);
    window.addEventListener("beforeprint", blockPrint);

    return () => {
      clearInterval(devtoolsTimer);
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys, true);
      document.removeEventListener("dragstart", blockDrag);
      window.removeEventListener("beforeprint", blockPrint);
    };
  }, []);

  return null;
}
