<template>
  <div class="projects bg-cityBg">
      <div class="project_menu xl:w-full xs:flex xs:justify-between xs:w-1/3">
        <topMenu />
      </div>
      <ProjectLabel :Img="CategoryImg" />
      <div class="cardAll">
         <InfoCard :infoCard="AllArray" />
      </div>
      <div class="city_info">
        <CityInfo :cityInfo="AllArray" />
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
import  {City} from "../../stores/index"
import {onMounted, reactive, ref} from "vue"
import axios from "axios"
import {useRoute} from "vue-router"
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
const ProjectsProp = (arr) => {
   if(arr.length > 0){
      arr.map(res => {
         res.project.map(item => {
           item.description = item.description.split(";")
            })
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

</style>