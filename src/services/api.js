import axios from "axios";

const api = axios.create({
  baseURL: "https://meuboletimbackend.onrender.com",
});

export { api };
