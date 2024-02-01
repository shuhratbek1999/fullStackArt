<template>
  <div class="info_citys relative" v-if="props.cityInfo.length > 0">
       <div class="info_item xl:w-full xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:items-center"
          v-for="(city,index) in props.cityInfo" :key="city.id"
           :id="'city_info' + index"
           data-aos="fade-up"
            >
           <div 
           class="
           infoo
           item xl:w-11/12 xl:min-h-98 px-3 font-Atyp
           " 
           >
              <div class="city_img xl:flex">
                 <div @click="ModalShow(city,index)" class="images">
                    <img :src="FILE_URL + 'images/' + city.Images[0].url" class="xl:w-130 xl:h-96 xl:rounded" alt="">
                 </div>
                 <div class="text xl:w-130 xl:text-xl xl:font-normal pl-4">
                    <div class="city_name xl:text-4xl font-AtypBold font-medium underline-offset-4 pb-2 underline">
                            {{city.name}}
                    </div>
                     <div class="description xl:text-xl font-Atyp">
                        {{city.description}}
                     </div>
                 </div>
              </div>
              <div v-if="city.extra_description.length>0" class="city_text xl:text-xl xl:py-4">
                 {{ city.extra_description }}
              </div>
              <div v-if="city.Fact.length > 0" class="city_ul xl:py-4">
                 <ol class="list-disc xl:ml-5 xl:text-xl">
                    <li v-for="item in city.Fact" :key="item.id">
                        {{item.text}}
                    </li>
                 </ol>
              </div>
           </div>
           <div v-if="city.Url.length > 0" class="footer xl:w-full xl:flex xl:justify-center xl:h-15"
              :class="['bg-cityFot', 'text-cityBg']"
           >
               <div 
                    class="city_footer item xl:w-11/12 px-3 xl:my-6 xl:flex xl:justify-end xl:items-center"
                    v-for="item in city.Url" :key="item.id"
                    >
                    <div v-if="item.you_tube_url" class="icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/inyou.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.you_tube_url" class="xl:text-2xl">{{item.you_tube_url}}</a>
                        </div>
                    </div>
                    <div v-if="item.facebook_url" class="icon xl:flex xl:items-center xl:px-4">
                        <div class="xl:mr-2">
                            <img src="../assets/images/iface.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.facebook_url" class="xl:text-2xl">{{item.facebook_url}}</a>
                        </div>
                    </div>
                    <div v-if="item.insta_url" class="icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/ins.png" alt="">
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.insta_url" class="xl:text-2xl">{{item.insta_url}}</a>
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
/* .item:nth-child(4n + 1)::after{
    content: "";
    width: 100%;
    height: 2px;
    background-color: black;
} */
/* .city_name{
    background: linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, black,black);
    background-size: 80% 0.1rem, 0 0.1rem;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.8s ease-in;
}
.city_name:hover{
    background-size:  0 0.1rem, 95% 0.1rem;
    cursor: pointer;
} */
</style>