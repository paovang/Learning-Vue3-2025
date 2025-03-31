import { defineStore } from "pinia";
import { reactive } from "vue";
import myBannerService from "../service/my-banner.service";

export const useMyBannerStore = defineStore("myBannerStore", () => {
  const form = reactive<any>({
    imageFile: null as File | null,
    imageUrl: "",
  });
  const data = reactive({
    banners: [] as { id: number; name: string }[],
    isLoading: true,
  });
  const service = new myBannerService();

  const fetchAll = async () => {
    const res = await service.getAll();
    if (res) {
      data.banners = res.data.data.data;
      data.isLoading = false;
    }
  };

  const create = async () => {
    const res = await service.create(form);
    if (res) {
      // await clearForm();
    }
  };

  return {
    fetchAll,
    data,
    form,
    create,
  };
});
