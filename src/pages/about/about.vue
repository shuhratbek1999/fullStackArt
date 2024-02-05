<template>
  <div class="about">
      <div class="about_menu xl:w-full xs:flex xs:justify-between xs:w-1/3 xx:flex xx:justify-between xx:w-1/3">
      <topMenu />
      </div>
      <ProjectLabel>
         <div class="projectss mt-16 xl:h-95 xx:mt-11 xx:h-40 xx:flex xx:items-center xx:justify-around xs:mt-11 xs:h-40 xs:flex xs:items-center xs:justify-around h-64 xl:flex xl:items-center xl:justify-around">
            <div 
            class="flex route_name w-11/12 xl:border-b-2 border-b-black pb-10 xl:text-9xl xs:xx:text-6xl 
            font-bold text-cityFot animate__animated animate__backInLeft xx:text-5xl"
            >
                <div class="texts xl:w-7/12 uppercase">
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
import {ref,inject} from "vue"
import topMenu from "../../components/TopMenu.vue"
import ProjectLabel from "../../components/Projects.vue"
import AboutInfo from "../../components/aboutInfo.vue"
import AboutFooter from "../../components/footer.vue"
import {useRouter, useRoute} from "vue-router"
import {useI18n} from "vue-i18n"
import { onMounted } from "vue"
import axios from "axios"
const {t} = useI18n()
const router = useRouter()
const route = useRoute()
const AllAbout = ref([])
const AllProject = ref([])
const FILE_URL = inject("FILE_URL")
let catImg = ref("")
const allAbout = () => {
   axios.get('category/categoryAll/' + route.name)
   .then(res => {
      if(!res.data.data.error){
         AllAbout.value = res.data.data
         for(let key of res.data.data){
            AllProject.value.push(key)
            catImg.value = FILE_URL + 'images/' + key.img
         }
      }
   })
}
onMounted(() => {
   allAbout()
})
</script> 

<style scoped>
/* .about_footer{
    
} */
</style>