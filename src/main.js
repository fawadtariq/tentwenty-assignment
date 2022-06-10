import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from "./global-components";
import jQuery from 'jQuery'

import "./assets/css/app.css"

const app = createApp(App);
window.$ = jQuery;

globalComponents(app);

window.vm = app.mount("#app");
