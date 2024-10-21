import apiInstance from "../interceptor/axiosInstance";

const login = async (adminData) => {
  const response = await apiInstance.post("auth/login", adminData);
  return response;
};

const refreshAccessToken = async () => {
  const response = await apiInstance.post("auth/refreshAccessToken");
  return response;
};

const logout = async () => {
  const response = await apiInstance.post("auth/logout");
  return response;
};

export default {
  login,
  refreshAccessToken,
  logout,
};
