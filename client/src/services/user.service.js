import axios from "axios";
import { getLocalStorageValue } from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:9001/user",
  headers: {
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token"),
    data: {
      about: about.value,
      expertise: expertise.value,
      email: email.value,
      facebook: facebook.value,
      firstName: firstName.value,
      github: github.value,
      instagram: instagram.value,
      lastName: lastName.value,
      lnkd: lnkd.value,
      location: location.value,
      mentoring: mentoring.value,
      phoneNumber: phoneNumber.value,
      role: role.value,
      startUp: startUp.value,
    },
  },
});

export const updateUserbyid = async (id) => {
  try {
    const response = await api.put("/userUpdate/");
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const getAllUsersByRole = async (options = {}) => {
  try {
    const response = await api.get("/role/all", options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
