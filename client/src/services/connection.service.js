import axios from "axios";
import { getLocalStorageValue } from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:9001/connection",
  headers: {
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token"),
  },
});

export const sentConnectionRequestById = async (id) => {
  try {
    const response = await api.post("/request/" + id);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const getAllConversations = async () => {
  try {
    const response = await api.get("/myAll");
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const approveConnectionById = async (id) => {
  try {
    const response = await api.put("/approve/" + id);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
