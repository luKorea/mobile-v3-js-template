import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";

import globalRegister from "@/global/index";

const app = createApp(App);

app.use(globalRegister);
app.use(store).use(router).mount("#app");
