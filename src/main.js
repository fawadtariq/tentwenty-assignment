import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from "./global-components";

import "./assets/css/app.css"

const app = createApp(App);


globalComponents(app);

window.vm = app.mount("#app");
