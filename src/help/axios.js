import axios from "axios";

export const API = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});
