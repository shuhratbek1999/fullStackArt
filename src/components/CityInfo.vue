<template>
  <div class="info_citys relative">
       <div 
           class="
           info_item xl:w-full xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:items-center xl:mt-4 xl:mb-2
           xx:w-full xx:mx-auto xx:flex xx:flex-col xx:justify-center xx:items-center xx:mt-4 xx:mb-2
           xs:w-full xs:mx-auto xs:flex xs:flex-col xs:justify-center xs:items-center xs:mt-4 xs:mb-2
           "
          v-for="(city,index) in props.cityInfo" :key="city.id"
           :id="'city_info' + index"
           data-aos="fade-up"
            >
           <div 
           class="
           infoo
           item xl:w-11/12 xl:min-h-94 px-3 font-sans xx:w-11/12 xx:min-h-52 xs:w-11/12 xs:min-h-52
           " 
           >
              <div class="city_img xl:flex xl:w-full xx:flex xx:w-full xs:flex xs:w-full">
                 <div @click="ModalShow(city,index)" class="images w-6/12">
                    <img :src="FILE_URL + 'images/' + city.Images[0].url" class="xl:w-130 xl:h-96 xx:w-48 xx:h-28 xs:w-130 xs:h-96 rounded cursor-pointer" alt="">
                 </div>
                 <div class="text w-6/12 xl:pl-4 xx:pl-2">
                    <div class="city_name">
                            <a href="#" class="xl:text-4xl xx:text-xs xs:text-xs font-sans font-medium">{{city.name}}</a>
                    </div>
                     <div id="description" class="description xx:h-20 xs:h-24 text-justify xl:text-xl xx:text-xx font-sans">
                        {{DescText[index]}}
                     </div>
                 </div>
              </div>
              <div v-if="ExtraText.length>0" class="city_text xl:text-xl font-sans pb-3 text-justify xx:text-xx xs:text-xs">
                 {{ ExtraText[index] }}
              </div>
              <div v-if="city.Fact.length > 0" class="city_ul pb-3">
                 <ol class="list-disc xl:ml-5 xl:text-xl">
                    <li v-for="item in city.Fact" :key="item.id" class="font-sans xl:text-base xx:text-xx xs:text-xs">
                        {{item.text}}
                    </li>
                 </ol>
              </div>
           </div>
           <div 
                v-if="city.Url.length > 0" 
                class="footer xl:w-full xl:flex xl:justify-end xl:h-15 xx:w-full xx:flex xx:justify-end xx:h-10 xs:w-full xs:flex xs:justify-end xs:h-15"
              :class="['bg-cityFot', 'text-cityBg']"
           >
               <div 
                    class="city_footer item xl:h-15 xl:px-3 xl:flex xl:justify-center xl:items-center xl:mr-12 xx:h-10 xx:flex xx:justify-center xx:items-center xx:mr-4 xs:h-15 xs:flex xs:justify-center xs:items-center xs:mr-12"
                    v-for="item in city.Url" :key="item.id"
                    >
                    <div v-if="item.type == 'instagramm'" class="icon flex xl:items-center">
                        <div class="xl:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/inyou.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'facebook'" class="icon icon flex xl:items-center">
                        <div class="xl:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/iface.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'you tube'" class="icon icon flex xl:items-center">
                        <div class="xl:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/inyou.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'Site'" class="icon flex xl:items-center">
                        <div class="xl:mr-2 xx:mr-1 xs:mr-1">
                            <img src="../assets/images/inyou.png" class="xx:w-6 xx:h-6 xl:w-8 xl:h-8" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl xx:text-xx xs:text-xs">{{item.name}}</a>
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
const CircleText = (arr) => {
let desc = document.querySelector('.info_citys')
console.log(desc.clientWidth)
    if(arr.length > 0){
        arr.map(res => {
          if(desc.clientWidth > 1200){
            let news = res.description.slice(0, 601)
            let extra = res.description.slice(602, res.description.length - 1)
            DescText.value.push(news)
            ExtraText.value.push(extra)
          }else{
            let news = res.description.slice(0, 145)
            let extra = res.description.slice(146, res.description.length - 1)
            DescText.value.push(news)
            ExtraText.value.push(extra)
          }
        })
    }
}
watch(() => store.cityAll, () => {
    Citys.value = store.cityAll
    CircleText(store.cityAll)
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