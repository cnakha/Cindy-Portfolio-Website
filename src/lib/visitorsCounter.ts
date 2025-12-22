import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const VISITOR_KEY = "portfolio-visited";

export async function registerVisit(): Promise<number> {
  const ref = doc(db, "stats", "visitors");

  const hasVisited = sessionStorage.getItem(VISITOR_KEY);
  console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID)

  try {
    // If this is a new session, increment (or create doc if missing)
    if (!hasVisited) {
      try {
        await setDoc(ref, { count: increment(1) }, { merge: true });
      } catch (e) {
        console.error("Firestore increment failed:", e);
      }

      sessionStorage.setItem(VISITOR_KEY, "true");
    }

    // Read current count
    const snap = await getDoc(ref);
    const count = snap.data()?.count;

    return typeof count === "number" ? count : 0;
  } catch (err) {
    console.error("Visitor counter failed:", err);
    return 0; // fallback so UI doesn't stay as "—"
  }
}
