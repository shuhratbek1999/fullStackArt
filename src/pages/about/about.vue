<template>
  <div class="about">
      <div class="about_menu xl:w-full xs:flex xs:justify-between xs:w-1/3 xx:flex xx:justify-between xx:w-1/3">
      <topMenu />
      </div>
      <ProjectLabel>
         <div class="projectss mt-16 xl:h-60 xx:mt-11 xx:h-40 xx:flex xx:items-center xx:justify-around xs:mt-11 xs:h-40 xs:flex xs:items-center xs:justify-around h-64 xl:flex xl:items-center xl:justify-around">
            <div class="flex route_name w-11/12 xl:border-b-2 border-b-black pb-4 xl:text-9xl xx:text-6xl xs:xx:text-6xl font-bold text-cityFot animate__animated animate__backInLeft">
                {{t('about.routeabout')}}
            </div>
        </div>
      </ProjectLabel>
      <div class="about_infoo flex justify-center pb-10 mt-6">
         <AboutInfo :allPost="AllAbout" />
      </div>
      <div class="about_footer flex justify-center">
         <AboutFooter />
      </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
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
const allAbout = () => {
   axios.get('category/categoryAll/' + route.name)
   .then(res => {
      if(!res.data.data.error){
         AllAbout.value.push(res.data.data[0])
      }
   })
}
onMounted(() => {
   allAbout()
})
</script> 

<style scoped>
.route_name{
   font-size: 170px;
}
/* .about_footer{
    
} */
</style>