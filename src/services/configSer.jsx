import axios from "axios";
// import { getLocal } from "../utils/Local";

// let dataUser = getLocal();
export const API = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/",
  headers: {
    TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws`,
    // Authorization: `Bearer ${dataUser ? dataUser.accessToken : null}`,
  },
  timeout: 15000,
});
