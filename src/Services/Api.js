import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7153/", // Substitua com a URL do seu back-end
});

export default api;
