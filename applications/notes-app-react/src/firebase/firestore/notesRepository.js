import { firestore as db } from "../";

export async function getNotes(uid) {
  const notesDocs = await db
    .collection("notes")
    .where("userId", "==", uid)
    .get();
  const notes = [];
  notesDocs.forEach((noteDoc) => {
    notes.push(noteDoc.data());
  });
  return notes;
}

export function createNote(note) {
  db.collection("notes").add(note);
}
