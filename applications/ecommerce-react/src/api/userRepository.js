import axios from "axios";

const host = "http://localhost:4000";

export async function verifyToken(token) {
  const url = `${host}/user`;
  const response = await axios.post(url, token);
  return response.data;
}
