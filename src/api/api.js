import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const busca = async (url, setDado) => {
  const response = await api.get(url);
  setDado(response.data);
};
