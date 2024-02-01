<template>
<slot>
   <div class="flex justify-center" v-if="props.infoCard">
         <div class="info_item xl:w-11/12 xl:min-h-98 xl:bg-cityBg xl:flex xl:flex-wrap xl:justify-start"
         v-if="props.infoCard.length > 0"
        >
           <div 
                class="
                item xl:w-1/4 xl:h-97 xl:border-r-2 xl:border-r-gray-500 px-2 xl:my-6
                cards aos-init font-Atyp relative
                " 
                v-for="(city,index) in props.infoCard" :key="city.id"
                ref="cards"
                data-aos="fade-up"
                data-aos-delay="100"
                >
               <div class="content xl:h-56 relative">
                    <div class="info_name xl:text-xl xl:w-60 hover:cursor-pointer font-AtypBold">
                        <a :href="'#' +'city_info' + index">
                            {{city.name}}
                        </a>
                    </div>
                    <p class="xl:text-base font-Atyp">
                        <a :href="'#' +'city_info' + index" class="info_spam">
                            {{city.description}}
                        </a>
                    </p>
                    <div class="time absolute bottom-3 font-Atyp">
                        {{ moment(city.date_time * 1000).format("YYYY-MM-DD") }}
                    </div>
                </div>
                <div class="images absolute bottom-0 overflow-hidden w-72 h-40 cursor-pointer" @click="ModalShow(city,index)"
                >
                    <img class="hover:scale-105 duration-500" draggable="true" :src="FILE_URL + 'images/' + city.Images[0].url" alt="">
                </div>
           </div>
            <Modal :showModal="show" class="absolute top-0 right-0" />
       </div>
  </div>
</slot>
</template>

<script setup>
import Modal from './modal.vue'
import {onMounted, ref, inject, watch,computed} from "vue"
import {City} from "../stores/index"
import {useI18n} from "vue-i18n"
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
const {t} = useI18n()
const FILE_URL = inject("FILE_URL");
const store = City()
const emit = defineEmits(['showModal'])
const show = ref({})
const props = defineProps({
    infoCard:{
        type: Array,
        required: false
    }
})
const ModalShow = (data, index) => {
    store.cityOne = data
    show.value.bool = true
    show.value.Id = index + 1
}
const Cards = ref([])
const UrlImages = (img) => {
   return FILE_URL + 'images/' + img[0].url
}
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
.item:nth-child(4n + 4){
    border-right: 0px;
}
a {
  background: 
    linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, black, black);
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.8s ease-in;
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