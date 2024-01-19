<template>
  <div class="projects bg-cityBg">
      <div class="project_menu xl:w-full xs:flex xs:justify-between xs:w-1/3">
        <topMenu />
      </div>
      <ProjectLabel />
      <div class="cardAll">
         <InfoCard />
      </div>
      <div class="city_info">
        <CityInfo />
      </div>
      <Footer />
  </div>
</template>

<script setup>
import topMenu from "../../components/TopMenu.vue"
import Navbar from "../../components/Navbar.vue"
import ProjectLabel from "../../components/Projects.vue"
import InfoCard from "../../components/infoCard.vue"
import CityInfo from "../../components/CityInfo.vue"
import Footer from "../../components/allFooter.vue"
import {onMounted} from "vue"
// const handlerScroll = () => {
//   let project = document.querySelector('.projects'),
//   city = document.querySelector('.city_info')
//    console.log("scrool bolyapti", window.pageYOffset, window.getComputedStyle(city).height);
//    if(window.pageYOffset >= city.scrollHeight){
//       console.log("trueee");
//    }
// }
// onMounted(() => {
//   window.addEventListener('scroll', handlerScroll)
// })
</script>

<style scoped>

</style>