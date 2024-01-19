import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
import router from "./router.js";
import Provider from './pages/Provider.vue';
import naive from 'naive-ui';
import {createPinia} from 'pinia'
import axios from "axios";
import { useErrorStore } from "./stores/Error";
import 'animate.css'
// import "./plugins/echarts.js";
const pinia = createPinia();
const app = createApp(Provider);
app.use(pinia);
// app.component('chart', Echarts)
const error_store = useErrorStore();
const Bearer = "Bearer ";
let BASE_URL = "http://localhost:5001/api/v1/admin-app/";
// axios.interceptors.request.use(
//     function (config) {
//       config.headers["Authorization"] = Bearer + localStorage.getItem("token");
//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );
//   axios.interceptors.response.use(
//     function (response) {
//       if(response.data.error) {
//         if(response.data.error_code == 401) {
//           router.push("/login");
//         }
//         if(response.data.error_code == 400){
//           if(response.data.errors){
//             error_store.error_text = response.data.errors[0].msg;
//           }
//         }
//         else{
//           error_store.error_text = response.data.message;
//         }
//       }
//       return response.data;
//     },
//     function (error) {
//       // console.log(error);
//       if (error.code === "ERR_NETWORK") {
//         // return Promise.reject('Internetga ulanishda xatolik!');
//         error_store.error_text = "Internetga ulanishda xatolik!";
//       } else 
//       if (error.response.data.error_code == 401) {
//         error_store.error_text = error.response.data.message;
//         router.push("/login");
//       }
//       return Promise.reject(error);
//     }
//   );
import './css/style.css'
axios.defaults.baseURL = BASE_URL;
app.use(naive);
app.use(router);
app.mount('#app')


