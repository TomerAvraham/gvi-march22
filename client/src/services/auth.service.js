import axios from "axios";
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

const authService = { login };
export default authService;
