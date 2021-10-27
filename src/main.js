import { createApp } from "vue";
import App from "./App.vue";
import { message, data } from "./data";
import { messageText } from "./messageImport";
createApp(App).mount("#app");
alert(messageText);
alert(data.message);