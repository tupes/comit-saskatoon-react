import { firestore as db } from "../";

export async function getNotes(uid) {
  const notesDocs = await db
    .collection("notes")
    .where("userId", "==", uid)
    .get();
  const notes = [];
  notesDocs.forEach((noteDoc) => {
    const note = noteDoc.data();
    note.id = noteDoc.id;
    notes.push(note);
  });
  return notes;
}

export function createNote(note) {
  return db.collection("notes").add(note);
}
