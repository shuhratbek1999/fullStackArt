<template>
  <div class="visual bg-cityBg relative">
      <div class="visual_menu">
         <topMenu /> 
      </div>
      <ProjectLabel :Img="CategoryImg" />
      <div class="cardAll">
         <InfoCard :infoCard="AllArray" />
      </div>
      <!-- <div style="min-height: 1150px" class="cardAll border-2 border-white">
         <div class="lives xl:flex xl:flex-col xl:items-center" v-for="live in AllArray" :key="live">
            <div class="live w-11/12">
                  <div  class="live_title">
                     <h1 class="font-sans font-bold">{{live.music_type}}</h1>
                  </div>
                  <div class="live_content xl:flex flex-wrap">
                  <div class="live_child relative w-1/4 xl:h-97 my-4 item xl:border-r-2 xl:border-r-gray-500 px-2" 
                     v-for="(city,index) in live.project" 
                     ref="cards"
                     data-aos="fade-up"
                     data-aos-delay="100"
                     :key="index">
                     <div class="live_top xl:h-56 relative">
                           <div class="info_name xl:text-xl xl:w-60 hover:cursor-pointer">
                                 <a :href="'#' +'city_info' + index" class="font-sans font-medium">
                                    {{city.name}}
                                 </a>
                           </div>
                           <p class="xl:text-base font-sans">
                                 <a :href="'#' +'city_info' + index" class="info_spam">
                                    {{city.description}}
                                 </a>
                           </p>
                           <div class="time absolute bottom-3 font-Atyp">
                                 {{ moment(city.date_time * 1000).format("YYYY-MM-DD") }}
                           </div>
                     </div>
                     <div 
                        class="images bg-red-400 absolute bottom-0 overflow-hidden w-72 h-40 cursor-pointer" 
                        @click="ModalShow(city,index)">
                           <img 
                           class="hover:scale-105 duration-500 w-72 h-40" 
                           draggable="true" 
                           :src="FILE_URL + 'images/' + city.Images[0].url" 
                           alt="">
                     </div>
                  </div>
                  </div>
            </div>
         </div>
      </div> -->
      <Footer />
      <Modal :showModal="show" class="absolute top-0 right-0" />
  </div>
</template>

<script setup>
import topMenu from "../../components/TopMenu.vue"
import Navbar from "../../components/Navbar.vue"
import ProjectLabel from "../../components/Projects.vue"
import InfoCard from "../../components/infoCard2.vue"
import Footer from "../../components/allFooter.vue"
import Modal from '../../components/modal.vue'
import moment from "moment"
import  {City} from "../../stores/index"
import {onMounted, reactive, ref,inject} from "vue"
import axios from "axios"
import {useRoute} from "vue-router"
const emit = defineEmits(['showModal'])
const show = ref({})
const store = City()
const route = useRoute()
import AOS from 'aos';
import 'aos/dist/aos.css';
const FILE_URL = inject("FILE_URL");
const AllArray = ref([])
const CategoryImg = ref({})
let TypeArray = ref([])
const ModalShow = (data, index) => {
   store.cityOne = data
    show.value.bool = true
    show.value.Id = index + 1
}
const OneProject = () => {
   axios.get('category/categoryAll/' + route.name)
   .then(res => {
      ProjectsProp(res.data.data)
   })
}
const ProjectsProp = (arr) => {
   if(arr.length > 0){
      arr.map(res => {
            CategoryImg.value = res
            AllArray.value = res.project
            store.cityAll = res.project
      })
   }
}
onMounted(() => {
   OneProject()
   AOS.init({
      easing: 'ease-in-out',
      duration: 1000,
      offset: 50,
      animatedClassName: 'cards'
   })
   AOS.refresh()
})
</script>

<style scoped>
a {
  background: 
    linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, black, black);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in;
}
a:hover,
a:focus {
  background-size: 0 0.1em, 100% 0.1em;
}
.live_title{
   font-size: 98px;
   text-transform: uppercase;
}
.item:nth-child(4n + 1){
   border-left: 0px;
}
.item:nth-child(4n + 4){
    border-right: 0px;
}
</style>