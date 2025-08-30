import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    // Only reset when the *pathname* changes (ignore hash-only changes)
    if (prevPathname.current !== location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      prevPathname.current = location.pathname;
    }
  }, [location.pathname]);

  return null;
}
