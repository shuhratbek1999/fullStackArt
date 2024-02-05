<template>
<slot>
   <div class="flex justify-center" v-if="props.infoCard">
         <div class="info_item xl:w-11/12 xl:min-h-98 xl:bg-cityBg xl:flex xl:flex-wrap xl:justify-start"
         v-if="props.infoCard.length > 0"
        >
           <div 
                class="
                item xl:w-1/4 xl:h-97 xl:border-r-2 xl:border-r-gray-500 px-2 xl:my-6
                cards aos-init font-Atyp
                " 
                v-for="(city,index) in props.infoCard" :key="city.id"
                ref="cards"
                data-aos="fade-up"
                data-aos-delay="100"
                >
               <div class="info_name xl:text-xl xl:w-60 xl:h-38 hover:cursor-pointer">
                  <a class="font-sans font-medium" :href="'#' +'city_info' + index">{{t('city.name', {city: city.name})}}</a>
               </div>
               <div class="circle_info xl:flex">
                   <div class="circle mr-2">
                      <img class="xl:w-11 xl:h-11 xl:rounded-full xl:border-2 cursor-pointer" :src="FILE_URL + 'images/' + city.aftor_img" alt="">
                   </div>
                   <div class="user">
                        <div style="color: #000000" class="user_name xl:text-base font-sans">{{city.cart}}</div>
                        <div style="color: #7C7C7C" class="users font-normal font-sans xl:text-base">{{city.aftor_name}}</div>
                   </div>
               </div>
               <div class=" absolute bottom-0 overflow-hidden">
                  <img class="w-72 h-40 hover:scale-105 duration-500 cursor-pointer" :src="FILE_URL + 'images/' + city.Images[0].url" alt="">
               </div>
           </div>
       </div>
  </div>
</slot>
</template>

<script setup>
import {onMounted, ref, inject, watch} from "vue"
import {City} from "../stores/index"
import {useI18n} from "vue-i18n"
import AOS from 'aos';
import 'aos/dist/aos.css';
const {t} = useI18n()
const FILE_URL = inject("FILE_URL");
const store = City()
const props = defineProps({
    infoCard:{
        type: Array,
        required: false
    }
})
const Cards = ref([])

watch(() => store.cityAll, () => {
    Cards.value = store.cityAll
    console.log(store.cityAll)
})
onMounted(() => {
   AOS.init({
      easing: 'ease-in-out',
      duration: 1000,
      offset: 50,
      animatedClassName: 'cards'
   })
   AOS.refresh()
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
.images_img:hover{
    transform: scale(1.1);
}
a {
  background: 
    linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, black, black);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in;
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