import axios from "axios";

const url = "localhost:4000";

export async function getUser(uid) {
  return axios.get(`${url}/user/uid`);
}

export function saveUser(user) {}
