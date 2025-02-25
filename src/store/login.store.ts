import axios from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

export const useLoginStore = defineStore("loginStore", () => {
  const router = useRouter();

  const count = ref("paovang");
  const messages = reactive({
    name: "paovang",
  });

  async function login() {
    await axios({
      method: "post",
      url: "https://hal-test.hal-logistics.la/api/admin/sign-in",
      data: {
        email: "halcenter_admin@gmail.com",
        password: "halcenteradmin@2022",
      },
    })
      .then(function (res) {
        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.access_token);
          localStorage.setItem("user", JSON.stringify(res.data.authUser));

          router.push("/admin/test");
        } else {
          console.log("not pass");
        }
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });

    messages.name = "Alex Sander";
  }

  return { count, login, messages };
});
