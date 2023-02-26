import axios from "axios";
import { getLocalStorageValue } from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:9001/user",
  headers: {
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token"),
  },
});

export const getAllUsersByRole = async (options = {}) => {
  try {
    const response = await api.get("/role/all", options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/getOne/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserById = async (userId) => {
  try {
    const response = await api.delete(`/deleteOne/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const putUpdateInformationInUser = async (
  email,
  imgSRC,
  phoneNumber,
  expertise,
  github,
  instagram,
  facebook,
  lnkd,
  about,
  mentoring,
  startUp,
  lastName,
  firstName
) => {
  try {
    const response = await api.put("/update", {
      email,
      imgSRC,
      phoneNumber,
      expertise,
      github,
      instagram,
      facebook,
      lnkd,
      about,
      mentoring,
      startUp,
      lastName,
      firstName,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
