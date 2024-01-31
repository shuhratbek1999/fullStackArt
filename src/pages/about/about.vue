<template>
  <div class="about" style="background-color: #E5E5E5">
      <div class="about_menu xl:w-full xs:flex xs:justify-between xs:w-1/3 xx:flex xx:justify-between xx:w-1/3">
      <topMenu />
      </div>
      <ProjectLabel>
         <div class="projectss mt-16 xl:h-60 xx:mt-11 xx:h-40 xx:flex xx:items-center xx:justify-around xs:mt-11 xs:h-40 xs:flex xs:items-center xs:justify-around h-64 xl:flex xl:items-center xl:justify-around">
            <div class="flex route_name xl:text-9xl xx:text-6xl xs:xx:text-6xl font-bold text-cityFot animate__animated animate__backInLeft">
                {{t('about.routeabout')}}
            </div>
            <div class="circles w-1/4"></div>
        </div>
      </ProjectLabel>
      <div class="about_infoo flex justify-center pb-10">
         <AboutInfo />
      </div>
      <div class="about_footer flex justify-center">
         <AboutFooter />
      </div>
  </div>
</template>

<script setup>
import topMenu from "../../components/TopMenu.vue"
import ProjectLabel from "../../components/Projects.vue"
import AboutInfo from "../../components/aboutInfo.vue"
import AboutFooter from "../../components/footer.vue"
import {useRouter, useRoute} from "vue-router"
import {useI18n} from "vue-i18n"
const {t} = useI18n()
const router = useRouter()
const route = useRoute()
</script> 

<style scoped>
.route_name{
   font-size: 170px;
}
/* .about_footer{
    
} */
</style>