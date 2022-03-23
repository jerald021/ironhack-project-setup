import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
const pinia = createPinia();
import './index.css'

createApp(App).use(router).use(pinia).mount("#app");
