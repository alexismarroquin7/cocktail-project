import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: `https://www.thecocktaildb.com`
  });
}

