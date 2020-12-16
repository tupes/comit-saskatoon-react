import axios from "axios";

const url = "localhost:4000";

export async function getNotes(uid) {
  const response = await axios.get(`${url}/notes`);
  return response.data;
}

export function createNote(note) {}

export function updateNote(note) {}
