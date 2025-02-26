import { AxiosApi } from "../common/configuration/axios.config"; // Import the AxiosApi class
import { AxiosResponse } from "axios";

export default class BannerService {
  private api: AxiosApi;

  constructor() {
    this.api = new AxiosApi(); // Instantiate AxiosApi
  }

  // Example of an API call using AxiosApi
  async getAll(): Promise<AxiosResponse> {
    try {
      const response = await this.api.axios.get("client/home-page"); // Use axios instance to make the API call
      return response; // Return the response to the caller
    } catch (error) {
      throw new Error("Error fetching banners: " + error);
    }
  }
}
