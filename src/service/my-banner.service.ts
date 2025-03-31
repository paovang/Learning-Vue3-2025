import { AxiosApi } from "../common/configuration/axios.config"; // Import the AxiosApi class
import { AxiosResponse } from "axios";

export default class MyBannerService {
  private api: AxiosApi;

  constructor() {
    this.api = new AxiosApi(); // Instantiate AxiosApi
  }

  // Example of an API call using AxiosApi
  async getAll(): Promise<AxiosResponse> {
    try {
      const response = await this.api.axios.get(
        "admin/center-list-banners?per_page=20&page=1&q="
      ); // Use axios instance to make the API call
      return response; // Return the response to the caller
    } catch (error) {
      throw new Error("Error fetching banners: " + error);
    }
  }

  async create(form: any): Promise<AxiosResponse> {
    try {
      const formData = new FormData();
      formData.append("image_file", form.imageFile); // ใส่ไฟล์ในฟอร์ม
      formData.append("name", form.name);
      formData.append("type", form.type);
      formData.append("link", "");

      const response = await this.api.axios.post(
        "admin/center-add-banner",
        formData
      ); // Use axios instance to make the API call
      return response; // Return the response to the caller
    } catch (error) {
      throw new Error("Error fetching banners: " + error);
    }
  }
}
