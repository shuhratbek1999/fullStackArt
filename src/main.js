import { createApp } from 'vue'
import router from "./router.js";
import Provider from './pages/Provider.vue';
import naive from 'naive-ui';
import {createPinia} from 'pinia'
import axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {createI18n} from 'vue-i18n'
import de from "./i18n/de.json" 
import en from "./i18n/en.json" 

const i18n = createI18n({ 
  locale: 'en', 
  fallbackLocale: "en", 
  messages: { de, en }, 
  legacy: false 
})
const pinia = createPinia();
const app = createApp(Provider);
app.use(pinia);
app.use(i18n)
AOS.init()
import {useVuelidate} from "@vuelidate/core"
app.use(useVuelidate)
const Bearer = "Bearer ";
let BASE_URL = "http://157.230.127.240:3001/api/v1/admin-app/";
// let BASE_URL = "http://localhost:3010/api/v1/admin-app/";
let FILE_URL = BASE_URL
axios.interceptors.request.use(
    function (config) {
      config.headers["Authorization"] = Bearer + localStorage.getItem("token");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  )
import './css/style.css'
axios.defaults.baseURL = BASE_URL;
app.provide('FILE_URL', FILE_URL)
app.use(naive);
app.use(router);
app.mount('#app')


