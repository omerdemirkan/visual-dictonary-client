import axios from "../axios";

export async function signUp(username, password) {
  const res = await axios.post("/auth/sign-up", {
    username,
    password
  });

  console.log(res.data);

  return res.data.token || null;
}

export async function logIn(username, password) {
  const res = await axios.post("/auth/log-in", {
    username,
    password
  });

  console.log(res.data);

  return res.data.token || null;
}

export async function verifyToken(accessToken) {
  const res = await axios.post("/auth/sign-up", {
    accessToken
  });

  console.log(res.data);

  return res.data.token || null;
}
