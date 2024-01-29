import { createApp } from 'vue'
import router from "./router.js";
import Provider from './pages/Provider.vue';
import naive from 'naive-ui';
import {createPinia} from 'pinia'
import axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'
const pinia = createPinia();
const app = createApp(Provider);
app.use(pinia);
AOS.init()
import {useVuelidate} from "@vuelidate/core"
app.use(useVuelidate)
const Bearer = "Bearer ";
let BASE_URL = "http://164.90.232.255:3000/api/v1/admin-app/";
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


