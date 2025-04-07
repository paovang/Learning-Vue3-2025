import { defineStore } from "pinia";
import { reactive } from "vue";
import myBannerService from "../service/my-banner.service";
import { IBanner, IFormBanner } from "../data-type/banner";

export const useMyBannerStore = defineStore("myBannerStore", () => {
  const form = reactive<IFormBanner>({
    imageFile: null as File | null,
    imageUrl: "",
    name: "",
    type: "normal",
  });
  const data = reactive<IBanner>({
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

  const fetchOne = async (id: number) => {
    const res = await service.getOne(id);
    if (res) {
      const data = res.data.data;
      form.name = data.name;
      form.type = data.type;
      form.imageUrl = data.image_url;
      form.id = data.id;
      data.isLoading = false;
    }
  };

  const create = async () => {
    const res = await service.create(form);
    if (res) {
      // await clearForm();
    }
  };

  const update = async () => {
    const res = await service.update(form);
    if (res) {
      // await clearForm();
    }
  };

  return {
    fetchAll,
    fetchOne,
    data,
    form,
    create,
    update,
  };
});
