import { AxiosApi } from "../common/configuration/axios.config"; // Import the AxiosApi class
import { AxiosResponse } from "axios";

export default class SupplierService {
  private api: AxiosApi;

  constructor() {
    this.api = new AxiosApi(); // Instantiate AxiosApi
  }

  // Example of an API call using AxiosApi
  async getAll(): Promise<AxiosResponse> {
    try {
      const response = await this.api.axios.get(
        "admin/list-suppliers?per_page=15&page=1&q="
      ); // Use axios instance to make the API call
      return response.data; // Return the response to the caller
    } catch (error) {
      throw new Error("Error fetching banners: " + error);
    }
  }

  async create(form: any): Promise<AxiosResponse> {
    try {
      const response = await this.api.axios.post("admin/add-supplier", {
        name: form.name,
        email: form.email,
        company: form.company,
        address: form.address,
        phone_number: form.phone_number,
      }); // Use axios instance to make the API call
      return response; // Return the response to the caller
    } catch (error) {
      throw new Error("Error fetching banners: " + error);
    }
  }
}
