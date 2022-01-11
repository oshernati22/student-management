import axios, { AxiosInstance } from "axios";

class Api {
  // all rest server commends
  private static axiosInstance: AxiosInstance;

  static init() {
    this.axiosInstance = axios.create({
      baseURL: "https://run.mocky.io/v3",
    });
  }

  static async get<ResponseType>() {
    return await this.axiosInstance.get<ResponseType>(
      "/9bfbf3ae-90d2-44ac-b7a1-de1ac19c6d61"
    );
  }
}

export default Api;
