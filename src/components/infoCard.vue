<template>
<slot>
   <div class="flex justify-center w-full" v-if="props.infoCard">
         <div class="
         info_item xl:w-11/12 lg:w-11/12 lg:min-h-98 lg:flex lg:flex-wrap lg:justify-start xx:w-11/12 xx:min-h-52 xl:min-h-98 xl:flex xl:flex-wrap xl:justify-start
         xx:flex xx:flex-wrap xx:justify-start xs:flex xs:flex-wrap xs:justify-start xx:mt-4
         md:flex md:flex-wrap md:justify-start md:mt-10 lg:mt-10
         "
         v-if="props.infoCard.length > 0"
        > 
           <div 
                class="
                item xl:w-1/4 xl:h-97 lg:w-1/4 lg:h-97 lg:px-2 border-r-2 border-r-gray-500 xl:px-2 xl:my-6 lg:my-6
                cards aos-init font-Atyp
                xx:w-4/12 xx:h-40 box-border xx:my-2 xs:my-2 xx:px-2
                md:w-1/4 md:h-80
                " 
                v-for="(city,index) in props.infoCard" :key="city.id"
                ref="cards"
                data-aos="fade-up"
                data-aos-delay="100"
                >
               <div 
                    class=
                    "info_name relative xl:text-xl lg:text-lg xx:text-xx xs:text-xs xl:w-60 xl:h-48 lg:h-48 md:h-48 xx:h-24 xs:h-24 hover:cursor-pointer md:text-base"
                    >
                  <a class="font-sans font-medium xx:text-xx xs:text-xs xl:text-xl md:text-xl lg:text-lg" :href="'#' +'city_info' + index">{{t('city.name', {city: city.name})}}</a>
                <div class="circle_info xl:flex xx:flex absolute bottom-0">
                    <div class="circle mr-2">
                        <img class="xl:w-11 xl:h-11 lg:w-11 lg:h-11 xx:w-5 xx:h-5 md:w-9 md:h-9 rounded-full cursor-pointer" :src="FILE_URL + 'images/' + city.aftor_img" alt="">
                    </div>
                    <div class="user">
                            <div style="color: #000000" class="user_name xl:text-base lg:text-base md:text-base text-base xx:text-xx xs:text-xs font-sans">{{city.cart}}</div>
                            <div style="color: #7C7C7C" class="users font-normal lg:text-base md:text-base xl:text-base xx:text-xx xs:text-xs font-sans text-base">{{city.aftor_name}}</div>
                    </div>
                </div>
               </div>
               <div class=" absolute bottom-0 overflow-hidden md:pr-0 lg:pr-0 xx:pr-2 xl:pr-0">
                  <img class="xl:w-72 xl:h-40 xx:w-32 lg:w-11/12 lg:h-40 xx:h-16 md:w-52 md:h-28 hover:scale-105 duration-500 cursor-pointer" :src="FILE_URL + 'images/' + city.Images[0].url" alt="">
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
.cards:nth-child(2n + 2){
    border-left: 0px;
}
}
</style>