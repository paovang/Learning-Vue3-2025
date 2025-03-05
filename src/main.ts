import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import i18nConfig from "./common/configuration/i18n.config";

const pinia = createPinia();
const app = createApp(App);

app.use(i18nConfig);
app.use(pinia);
app.use(router);
app.use(Antd);
app.mount("#app");
