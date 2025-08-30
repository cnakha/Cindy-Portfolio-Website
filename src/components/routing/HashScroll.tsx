// src/components/routing/HashScroll.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // delay to ensure the DOM of the target page is painted
    const id = hash.replace("#", "");
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => clearTimeout(t);
  }, [hash]);

  return null;
}
