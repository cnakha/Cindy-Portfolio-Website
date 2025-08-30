import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType(); // 'POP' | 'PUSH' | 'REPLACE'

  // Keep scroll positions per history entry key
  const positions = useRef<Map<string, number>>(new Map());
  const prevKey = useRef(location.key);

  useEffect(() => {
    // Save the scroll of the previous entry before reacting to the new one
    positions.current.set(prevKey.current, window.scrollY);

    // On back/forward (POP): restore exact previous position (even if there's a hash)
    if (navType === "POP") {
      const y = positions.current.get(location.key) ?? 0;
      window.scrollTo({ top: y, left: 0, behavior: "auto" });
    } else if (location.hash) {
      // On fresh navigation with a hash: smooth-scroll to the target
      const id = location.hash.slice(1);
      const scrollToAnchor = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      // Try now and next tick in case the section renders after route change
      scrollToAnchor();
      setTimeout(scrollToAnchor, 0);
    } else {
      // Normal push/replace without hash: go to top
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    prevKey.current = location.key;
  }, [location, navType]);

  return null;
}
