<template>
  <div class="visual bg-cityBg relative">
      <div class="visual_menu">
         <topMenu />
      </div>
      <ProjectLabel :Img="CategoryImg" />
      <div class="cardAll">
         <InfoCard>
            <div class="flex justify-center">
         <div class="info_item xl:w-11/12 xl:min-h-98 xl:bg-cityBg xl:flex xl:flex-wrap xl:justify-start"
         v-if="AllArray.length > 0"
        >
           <div 
                class="
                item xl:w-1/4 xl:h-80 xl:border-r-2 xl:border-r-gray-500 px-2 xl:my-6
                cards aos-init relative
                " 
                v-for="(city,index) in AllArray" :key="city.id"
                ref="cards"
                data-aos="fade-up"
                data-aos-delay="100"
                >
               <div class="content xl:h-56 relative">
                    <div class="info_name xl:text-xl xl:w-60 hover:cursor-pointer font-sans font-medium">
                        <a target="_blank" :href="city.name">
                            {{city.aftor_name}}
                        </a>
                    </div>
                </div>
                <div class="images absolute bottom-0 overflow-hidden w-72 h-40 cursor-pointer" @click="ModalShow(city,index)"
                >
                    <img class="hover:scale-105 duration-500" draggable="true" :src="FILE_URL + 'images/' + city.Images[0].url" alt="">
                </div>
           </div>
            <Modal :showModal="show" class="absolute top-0 right-0" />
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
import InfoCard from "../../components/infoCard2.vue"
import Footer from "../../components/allFooter.vue"
import Modal from '../../components/modal.vue'
import  {City} from "../../stores/index"
import {onMounted, reactive, ref,inject} from "vue"
import axios from "axios"
import {useRoute} from "vue-router"
const FILE_URL = inject("FILE_URL");
const show = ref({})
const store = City()
const route = useRoute()
const AllArray = ref([])
const CategoryImg = ref({})
const OneProject = () => {
   axios.get('category/categoryAll/' + route.name)
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
            CategoryImg.value = res
            AllArray.value = res.project
            store.cityAll = res.project
      })
   }
}
onMounted(() => {
   OneProject()
})
</script>

<style scoped>
.circle img{
    border-radius: 50%;
}
.item:nth-child(4n + 1){
   border-left: 0px;
}
.item:nth-child(4n + 4){
    border-right: 0px;
}
a {
  background: 
    linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, black, black);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in;
  padding-bottom: 4px;
}
a:hover,
a:focus {
  background-size: 0 0.1em, 100% 0.1em;
}
@media(min-width: 360px){
.cards:nth-child(2n + 1){
    border-left: 0px;
}
}
</style>