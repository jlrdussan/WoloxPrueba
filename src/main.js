import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";
import "./assets/css/styles.css"

const appp = createApp(App);
appp.use(i18n);
appp.use(router);
appp.mount("#app");
