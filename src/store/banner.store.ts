import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";
import bannerService from "../service/banner.service";

export const useBannerStore = defineStore("bannerStore", () => {
  const data = reactive({
    banners: [] as { id: number; name: string }[],
  });
  const service = new bannerService();

  async function updateBanner(payload: any) {
    await axios({
      method: "put",
      url:
        "https://hal-test.hal-logistics.la/api/client/home-page/" +
        payload.value.id,
      data: {
        name: payload.value.name,
      },
    })
      .then(function (response) {
        console.log("success");
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });
  }

  const fetchAll = async () => {
    const res = await service.getAll();
    if (res) {
      data.banners = res.data.data.banner;
    }
  };

  return {
    updateBanner,
    fetchAll,
    data,
  };
});
