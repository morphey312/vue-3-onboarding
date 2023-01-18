import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from './App.vue'
import Counter from "@/components/Counter.vue";
const app = createApp(App);
app.component('Counter', Counter);
app.mount('#app');
