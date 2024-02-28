<template>
  <div class="projects bg-cityBg" id="page">
      <div class="project_menu xl:w-full xs:flex xs:justify-between xs:w-1/3">
        <topMenu />
      </div>
      <div class="labels">
         <ProjectLabel :Img="CategoryImg" />
      </div>
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
import {onMounted, reactive, ref, watch} from "vue"
import axios from "axios"
import {useRoute} from "vue-router"
const store = City()
const route = useRoute()
const AllArray = ref([])
const CategoryImg = ref({})
const OneProject = () => {
   if(store.lang == 'en'){
      axios.get('category/categoryAll/' + route.name)
   .then(res => {
      ProjectsProp(res.data.data)
   })
   }else{
      axios.get('category/categoryBol/' + route.name)
      .then(res => {
         ProjectsProp(res.data.data)
      })
   }
}
const ProjectsProp = async(arr) => {
   if(arr.length > 0){
      await arr.map(res => {
            if(res.project){
               res.project.map(item => {
               item.description = item.description.split(";")
            })
             AllArray.value = res.project
             store.cityAll = res.project
            }
            else{
               res.projects.map(item => {
               item.description = item.description.split(";")
            })
             AllArray.value = res.projects
            store.cityAll = res.projects
            }
            CategoryImg.value = res
      })
   }
}
watch(()=> store.lang, () => {
   OneProject()
})
onMounted(() => {
   OneProject()
})
</script>

<style scoped>

</style>