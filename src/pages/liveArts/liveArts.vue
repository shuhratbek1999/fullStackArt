<template>
  <div class="visual bg-cityBg relative">
      <div class="visual_menu">
         <topMenu />
      </div>
      <ProjectLabel :Img="CategoryImg" />
      <div class="cardAll">
         <InfoCard>
          <div class="flex justify-center" v-if="AllArray">
            <div class="info_item xl:w-11/12 xl:min-h-98 xl:bg-cityBg xl:flex xl:flex-wrap xl:justify-start"
               v-if="AllArray.length > 0">
                  <div 
                     class="
                     item xl:w-1/4 xl:h-96 xl:border-r-2 xl:border-r-gray-500 px-4 xl:my-6
                     cards aos-init
                     " 
                     v-for="(city,index) in AllArray" :key="city.id"
                     ref="cards"
                     data-aos="fade-up"
                     data-aos-delay="100"
                     >
                     <div class="info_name xl:text-xl xl:w-60 xl:min-h-8 hover:cursor-pointer">
                        <a :href="'#' +'city_info' + index">{{city.name}}</a>
                     </div>
                     <div class="circle_info xl:flex xl:min-h-24 xl:text-xs">
                          {{city.description}}
                     </div>
                     <div class="time xl:mt-3">
                        {{ moment(city.date_time * 1000).format("YYYY-MM-DD") }}
                     </div>
                     <div class="images xl:my-2" @click="ModalShow(city,index)">
                        <img class="w-72 h-40" :src="FILE_URL + 'images/' + city.Images[0].url" alt="">
                     </div>
               </div>
            </div>
          </div>
         </InfoCard>
      </div>
      <Footer />
      <Modal :showModal="show" class="absolute top-0 right-0" />
  </div>
</template>

<script setup>
import topMenu from "../../components/TopMenu.vue"
import Navbar from "../../components/Navbar.vue"
import ProjectLabel from "../../components/Projects.vue"
import InfoCard from "../../components/infoCard.vue"
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
const FILE_URL = inject("FILE_URL");
const AllArray = ref([])
const CategoryImg = ref({})
const OneProject = () => {
   axios.get('category/all')
   .then(res => {
      ProjectsProp(res.data.data)
   })
}
const ModalShow = (data, index) => {
    store.cityOne = data
    show.value.bool = true
    show.value.Id = index + 1
}
const ProjectsProp = (arr) => {
   if(arr.length > 0){
      arr.map(res => {
         if(res.page.name == route.name){
            CategoryImg.value = res
            AllArray.value = res.project
            store.cityAll = res.project
         }
      })
   }
}
onMounted(() => {
   OneProject()
})
</script>

<style scoped>

</style>