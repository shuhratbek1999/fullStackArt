<template>
  <div class="flex flex-col items-center justify-around w-full">
    <div class="city flex flex-col items-center" v-for="city in Citys" :key="city.id">
     <div class="city_info w-10/12">
        <div class="city_item mb-5 mt-10"> 
        <span class="border-b-2 cursor-pointer border-b-gray-500 font-bold text-2xl xx:text-xs xl:text-xl pb-1"> {{city.name}} </span>
        </div>
        <div class="city_item flex justify-between" >
            <div class="img w-1/2 xx:w-2/4">
                <img width="630" :src="city.img" alt="info">
            </div>
            <div class="text w-1/2 xx:w-3/4 px-4 xx:text-xx xl:text-base">
                {{city.text}}
            </div>
        </div>
        <div class="city_item mt-2 xx:text-xx xl:text-base">
            {{city.text2}}
        </div>
     </div>
    <div class="footer w-full py-3 pr-20 xx:pr-5 bg-cityFot my-8 text-white flex justify-end items-center">
            <div class="icon flex items-center cursor-pointer">
                <div class="facebook border-2 w-8 h-8 xl:w-8 xl:h-8 xx:w-6 xx:h-6 rounded-full flex justify-center items-center">
                <n-icon size="18" class="xx:text-xs">
                    <FacebookF />
                </n-icon>
                </div>
            <div class="ml-2"><a class="xx:text-xs xl:text-base" href="#">kvartal.art.district</a></div>
            </div>
            <div class="icon flex ml-8 cursor-pointer">
            <n-icon size="25">
                <Instagram />
            </n-icon>
            <div class="ml-2"><a class="xx:text-xs xl:text-base" href="#">kv.art.al</a></div>
            </div>
        </div>
  </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import img1 from "../assets/images/Rectangle6.png"
import img2 from "../assets/images/Rectangle8.png"
import img3 from "../assets/images/Rectangle9.png"
import {FacebookF,Instagram} from "@vicons/fa"
const Citys = ref([
    {
        id: 1,
        name: "KvARTal – cultural district of Sofia",
        img: img1,
        text: `
        "KvARTal" is the bohemian quarter in the old center of Sofia, following the example of a number of 
        European cities. Located between "Dondukov", "Maria Luisa”, "Slivnitsa" and "Vasil Levski" boulevards,
         it is a rich cultural and historical area with the most buildings-monuments of culture. Known since
          the beginning of the 20th century as the trade district, where “Targovska” Street was crossing it, 
          making all the area on the way to the Central Station and around the The Palace (National Art Gallery
           now) was full of life. The royal guests stayed here, there were the first hotels and common living 
           buildings, many intellectuals and merchants lived here, as well famous doctors, as well a curious fact 
           is that Princess Maria Luisa was born here.
        `,
        text2: `
          For eight years now, DOMA Art Foundation has been working in partnership with a numerous of organizations,
           architects, urban planners, locations and neighbors through various of events and projects for the 
           improvement of the area, the preservation of the cultural, architectural and historical heritage and the 
           creation of the “KvARTal” brand, as the place in the old center of Sofia, where one would like to be.
        `
    },
    {
        id: 2,
        name: "KvARTal Festival",
        img: img2,
        text: `
        "KvARTal Festival" – an urban cultural festival, held in the area of the old bohemian center of Sofia with 
        a large program promoting the "KvARTal" art district and the architectural and cultural heritage and the 
        area. Every year the festival is organized on the weekend around September 17 – The Day of Sofia.
        `,
        text2: ` `
    },
     {
        id: 3,
        name: "NEXT Balkan – exchange with the young Balkan art scene",
        img: img3,
        text: `
            Project for exchange and cooperation of young artists and experts, sharing experience, projects and 
            initiatives between the Balkan scene. Since 2015, the foundation has established partnerships between 
            Serbia, Albania, Kosovo, Macedonia, Romania, etc. In this project, the foundation is partnering with 
            the Cultural Institute of the Ministry of Foreign Affairs. Sofia City Art Gallery, Regional 
            Contemporary Art Center "Toplocentrala", Doza Gallery, etc.`,
        text2: ` `
    }
])
</script>

<style>

</style>