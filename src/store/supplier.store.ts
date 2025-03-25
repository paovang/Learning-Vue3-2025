import { defineStore } from "pinia";
import { reactive } from "vue";
import SupplierService from "../service/supplier.service";

export const useSupplierStore = defineStore("supplierStore", () => {
  const form = reactive<any>({});
  const data = reactive({
    suppliers: [] as any[],
    isLoading: true,
  });
  const service = new SupplierService();

  const fetchAll = async () => {
    const res = await service.getAll();
    if (res) {
      data.suppliers = res.data.data;
      data.isLoading = false;
    }
  };

  const create = async () => {
    const res = await service.create(form);
    if (res) {
      await clearForm();
    }
  };

  const clearForm = () => {
    form.name = "";
    form.email = "";
    form.address = "";
    form.company = "";
    form.phone_number = "";
  };

  return {
    fetchAll,
    data,
    form,
    create,
  };
});
