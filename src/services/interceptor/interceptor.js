import authServices from "../authServices";
import handleError from "./errorHandler";

export const setupInterceptors = (api) => {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        config.headers["Authorization"] = token;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const errorMessage = error.response.data.error;

      if (errorMessage.search(/refresh/gi) >= 0) {
        localStorage.clear();
        window.location.replace("/login");
      }
      return Promise.reject(handleError(error));
    }
  );
};
