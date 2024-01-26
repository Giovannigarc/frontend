import api from "./Api";

export const getUsuarios = async () => {
  const response = await api.get("/api/Usuario");
  return response.data;
};

export const addUsuario = async (usuarioData) => {
  const response = await api.post("/api/Usuario", usuarioData);
  return response.data;
};

export const updateUsuario = async (userId, usuarioData) => {
  const response = await api.put(`/api/Usuario/${userId}`, usuarioData);
  return response.data;
};

export const deleteUsuario = async (userId) => {
  const response = await api.delete(`/api/Usuario/${userId}`);
  return response.data;
};
