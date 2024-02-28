<template>
  <div class="about">
      <div class="about_menu xl:w-full xs:flex xs:justify-between xs:w-1/3 xx:flex xx:justify-between xx:w-1/3">
      <topMenu />
      </div>
      <ProjectLabel>
         <div class="projectss mt-16 xl:h-95 md:h-96 lg:h-95 xx:mt-14 xx:h-40 xx:flex xx:items-center xx:justify-around xs:mt-14 xs:h-40 xs:flex xs:items-center xs:justify-around h-64 xl:flex xl:items-center xl:justify-around">
            <div 
            class="flex route_name w-11/12 border-b-2 border-b-black pb-10 xs:xx:text-6xl 
            font-bold text-cityFot animate__animated animate__backInLeft"
            >
                <div class="texts xl:w-7/12 lg:w-7/12 md:w-7/12 uppercase xx:text-5xl xs:text-5xl xl:text-9xl lg:text-8xl md:text-7xl">
                    {{t('about.routeabout')}}
                </div>
            </div>
        </div>
      </ProjectLabel>
      <div class="about_infoo flex justify-center pb-10 mt-6">
         <AboutInfo :allPost="AllAbout" />
      </div>
      <div class="about_footer flex justify-center">
         <AboutFooter :AllAbout="AllProject" :catImg="catImg" />
      </div>
  </div>
</template>

<script setup>
import {ref,inject,watch} from "vue"
import topMenu from "../../components/TopMenu.vue"
import ProjectLabel from "../../components/Projects.vue"
import AboutInfo from "../../components/aboutInfo.vue"
import AboutFooter from "../../components/footer.vue"
import {useRouter, useRoute} from "vue-router"
import {useI18n} from "vue-i18n"
import { onMounted } from "vue"
import axios from "axios"
import  {City} from "../../stores/index"
const store = City()
const {t} = useI18n()
const router = useRouter()
const route = useRoute()
const AllAbout = ref([])
const AllProject = ref([])
const FILE_URL = inject("FILE_URL")
let catImg = ref("")
const allAbout = () => {
   if(store.lang == 'en'){
      axios.get('category/categoryAll/' + route.name)
      .then(res => {
         if(!res.data.data.error){
            for(let key of res.data.data){
               key.project.map(item => {
                  item.description = item.description.split(";")
                  // console.log(item);
               }) 
               AllProject.value.push(key)
               catImg.value = FILE_URL + 'images/' + key.img
            }
            AllAbout.value = res.data.data
         }
      })
   }else{
      axios.get('category/categoryBol/' + route.name)
      .then(res => {
         if(!res.data.data.error){
            for(let key of res.data.data){
               key.projects.map(item => {
                  item.description = item.description.split(";")
                  // console.log(item);
               }) 
               AllProject.value.push(key)
               catImg.value = FILE_URL + 'images/' + key.img
            }
            AllAbout.value = res.data.data
         }
      })
   }
}
watch(()=> store.lang, () => {
   allAbout()
})
onMounted(() => {
   allAbout()
})
</script> 

<style scoped>
/* .about_footer{
    
} */
</style>