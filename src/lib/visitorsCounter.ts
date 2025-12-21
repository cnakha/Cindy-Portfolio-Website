import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "./firebase"; // your firebase init

const VISITOR_KEY = "portfolio-visited";

export async function registerVisit(): Promise<number> {
  const ref = doc(db, "stats", "visitors");

  // Prevent multiple increments per browser
  const hasVisited = sessionStorage.getItem(VISITOR_KEY);

  if (!hasVisited) {
    await updateDoc(ref, {
      count: increment(1),
    });
    sessionStorage.setItem(VISITOR_KEY, "true");
  }

  const snap = await getDoc(ref);
  return snap.data()?.count ?? 0;
}
