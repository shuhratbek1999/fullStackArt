<template>
  <div class="visual bg-cityBg relative">
      <div class="visual_menu">
         <topMenu />
      </div>
      <ProjectLabel :Img="CategoryImg" />
      <div class="cardAll">
         <InfoCard :infoCard="AllArray" />
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
import {onMounted, reactive, ref} from "vue"
import axios from "axios"
import {useRoute} from "vue-router"
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

</style>