<template>
  <div class="info_citys relative">
       <div 
           class="
           info_item xl:w-full xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:items-center xl:mt-4 xl:mb-2
           xx:w-full xx:mx-auto xx:flex xx:flex-col xx:justify-center xx:items-center xx:mt-4 xx:mb-2
           xs:w-full xs:mx-auto xs:flex xs:flex-col xs:justify-center xs:items-center xs:mt-4 xs:mb-2
           lg:w-full lg:mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-4 lg:mb-2
           md:w-full md:mx-auto md:flex md:flex-col md:justify-center md:items-center md:mt-4 md:mb-2
           "
          v-for="(city,index) in props.cityInfo" :key="city.id"
           :id="'city_info' + index"
           data-aos="fade-up"
            >
           <div 
           class="
           infoo
           item xl:w-11/12 xl:min-h-94 lg:w-11/12 lg:min-h-94 md:w-11/12 md:min-h-94 px-3 font-sans xx:w-11/12 xx:min-h-52 xs:w-11/12 xs:min-h-52
           " 
           >
              <div class="city_img flex-col xl:flex xl:w-full lg:flex lg:w-full md:flex md:w-full xx:flex xx:w-full xs:flex xs:w-full">
                 <div class="city_titles mb-3 font-sans font-semibold">
                    <a class="xl:text-4xl lg:text-4xl md:text-3xl" href="#">{{ city.name }}</a>
                 </div>
                 <div class="images w-full flex justify-start">
                    <img 
                        @click="ModalShow(city,index)" 
                        :src="FILE_URL + 'images/' + city.Images[0].url" 
                        class="xl:w-130 xl:h-96 lg:w-130 lg:h-96 md:w-130 md:h-96 xx:w-48 xx:h-28 xs:w-130 xs:h-96 
                        rounded cursor-pointer" 
                        alt=""
                    >
                 </div>
                 <div class="text w-full xx:my-2 xs:my-2 text-justify xx:text-xx xs:text-xs xl:text-xl md:text-base">
                     {{city.description}}
                 </div>
              </div>
              <div v-if="city.Fact.length > 0" class="city_ul pb-3">
                 <ol class="list-disc xl:ml-5 xl:text-xl lg:text-xl">
                    <li v-for="item in city.Fact" :key="item.id" class="font-sans xl:text-xl text-justify lg:text-base md:text-base xx:text-xx xs:text-xs">
                        {{item.text}}
                    </li>
                 </ol>
              </div>
           </div>
           <div 
                v-if="city.Url.length > 0" 
                class="footer xl:w-full xl:flex xl:justify-end xl:h-15 xx:w-full lg:w-full lg:flex lg:justify-end lg:h-15 md:w-full md:flex md:justify-end md:h-15 xx:flex xx:justify-end xx:h-10 xs:w-full xs:flex xs:justify-end xs:h-15"
              :class="['bg-cityFot', 'text-cityBg']"
           >
               <div 
                    class="city_footer item xl:h-15 xl:px-3 xl:flex xl:justify-center xl:items-center xl:mr-12 lg:h-15 lg:px-3 lg:flex lg:justify-center lg:items-center lg:mr-12 md:h-15 md:px-3 md:flex md:justify-center md:items-center md:mr-12 xx:h-10 xx:flex xx:justify-center xx:items-center xx:mr-4 xs:h-15 xs:flex xs:justify-center xs:items-center xs:mr-12"
                    v-for="item in city.Url" :key="item.id"
                    >
                    <div v-if="item.type == 'instagramm'" class="icon flex xl:items-center lg:items-center md:items-center">
                        <div class="xl:mr-2 lg:mr-2 md:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/inyou.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl lg:text-xl md:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'facebook'" class="icon icon flex xl:items-center lg:items-center md:items-center">
                        <div class="xl:mr-2 lg:mr-2 md:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/iface.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl lg:text-xl md:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'you tube'" class="icon icon flex xl:items-center lg:items-center md:items-center">
                        <div class="xl:mr-2 lg:mr-2 md:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/inyou.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl lg:text-xl md:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'Google'" class="icon flex xl:items-center lg:items-center md:items-center">
                        <div class="xl:mr-2 lg:mr-2 md:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/inyou.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl lg:text-xl md:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'Twitter'" class="icon flex xl:items-center lg:items-center md:items-center">
                        <div class="xl:mr-2 lg:mr-2 md:mr-2 xx:mr-1 xs:mr-1 xl:w-9 border-2 xl:h-9 xx:w-6 xx:h-6 xs:w-6 xs:h-6 rounded-full flex justify-center items-center">
                            <n-icon class="xx:text-sm xl:text-xl lg:text-xl md:text-xl">
                                <LogoTwitter />
                            </n-icon>
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl lg:text-xl md:text-xl xx:text-xs xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
               </div>
           </div>
       </div>
           <Modal :showModal="show" class="absolute top-0 right-0" />
  </div>
</template>

<script setup>
import {onMounted, ref, inject,watchEffect, computed, watch} from "vue"
import {FacebookF,Instagram, Youtube} from "@vicons/fa"
import {LogoTwitter} from "@vicons/ionicons5"
import {City} from '../stores/index'
import Modal from './modal.vue'
const store = City()
const FILE_URL = inject("FILE_URL");
const emit = defineEmits(['showModal'])
const show = ref({})
const props = defineProps({
    cityInfo:{
        type: Array,
        required: true
    }
})
const DescText = ref([])
const ExtraText = ref([])
const ModalShow = (data, index) => {
    store.cityOne = data
    show.value.bool = true
    show.value.Id = index + 1
}
const Citys = ref([])
let Urls = ref([])
watch(() => store.cityAll, () => {
    Citys.value = store.cityAll
})
</script>

<style scoped>
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
</style>