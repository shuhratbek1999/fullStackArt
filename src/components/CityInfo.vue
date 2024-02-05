<template>
  <div class="info_citys relative" v-if="props.cityInfo.length > 0">
       <div class="info_item xl:w-full xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:items-center xl:mt-4 xl:mb-2"
          v-for="(city,index) in props.cityInfo" :key="city.id"
           :id="'city_info' + index"
           data-aos="fade-up"
            >
           <div 
           class="
           infoo
           item xl:w-11/12 xl:min-h-94 px-3 font-sans
           " 
           >
              <div class="city_img xl:flex xl:w-full">
                 <div @click="ModalShow(city,index)" class="images w-6/12">
                    <img :src="FILE_URL + 'images/' + city.Images[0].url" class="xl:w-130 xl:h-96 xl:rounded cursor-pointer" alt="">
                 </div>
                 <div class="text xl:w-6/12 pl-4">
                    <div class="city_name">
                            <a href="#" class="xl:text-4xl font-sans font-medium pb-2">{{city.name}}</a>
                    </div>
                     <div class="description text-justify xl:text-xl font-sans">
                        {{DescText[index]}}
                     </div>
                 </div>
              </div>
              <div v-if="ExtraText.length>0" class="city_text xl:text-xl font-sans pb-3 text-justify">
                 {{ ExtraText[index] }}
              </div>
              <div v-if="city.Fact.length > 0" class="city_ul pb-3">
                 <ol class="list-disc xl:ml-5 xl:text-xl">
                    <li v-for="item in city.Fact" :key="item.id" class="font-sans">
                        {{item.text}}
                    </li>
                 </ol>
              </div>
           </div>
           <div v-if="city.Url.length > 0" class="footer xl:w-full xl:flex xl:justify-end xl:h-15"
              :class="['bg-cityFot', 'text-cityBg']"
           >
               <div 
                    class="city_footer item xl:h-15 px-3 xl:flex xl:justify-center xl:items-center"
                    v-for="item in city.Url" :key="item.id"
                    >
                    <div v-if="item.type == 'instagramm'" class="icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/inyou.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'facebook'" class="icon icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/iface.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'you tube'" class="icon icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/inyou.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-xl">{{item.name}}</a>
                        </div>
                    </div>
                    <div v-if="item.type == 'Site'" class="icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/inyou.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-2xl">{{item.name}}</a>
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
    if(arr.length > 0){
        arr.map(res => {
          let news = res.description.slice(0, 601)
          let extra = res.description.slice(602, res.description.length - 1)
          DescText.value.push(news)
          ExtraText.value.push(extra)
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