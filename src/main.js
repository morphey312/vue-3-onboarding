import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from './App.vue'
import Counter from "@/components/Counter.vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);
app.component('Counter', Counter);
app.use(vuetify).mount('#app');
