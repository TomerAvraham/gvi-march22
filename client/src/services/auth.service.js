import axios from "axios";
import {
  getLocalStorageValue,
  deleteLocalStorageValue,
} from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:9001/auth",
  headers: { "Content-Type": "application/json" },
});

const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
const logout = async () => {
  try {
    const token = getLocalStorageValue("ac_token");
    if (!token) return;
    const { data } = await api.delete("/logout", { data: { token } });
    if (data.ok) {
      deleteLocalStorageValue("ac_token");
      window.location = "/login";
    }
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
const register = async (
  email,
  password,
  passwordConfirmation,
  role,
  lastName,
  firstName
) => {
  try {
    const response = await api.post("/register", {
      email,
      password,
      passwordConfirmation,
      role,
      lastName,
      firstName,
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

const authService = { login, logout, register };
export default authService;
