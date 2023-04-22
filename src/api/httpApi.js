import axios from "axios";

export const httpApi = () => {
  const instance = axios.create({
    baseURL: "https://api.adviceslip.com",
    timeout: 3000,
  });

  const get = async (path) => {
    try {
      const resp = await instance.get(path, {});
      return resp.data;
    } catch (error) {
      console.log(error.response.status);
      console.log(error.response.data);
      return error.response;
    }
  };
  return { get };
};
