<template>
  <div class="flex justify-center">
       <div class="info_item xl:w-11/12 xl:min-h-101 xl:bg-cityBg xl:flex xl:flex-wrap xl:justify-start">
           <div 
           class="
           item xl:w-1/4 xl:h-96 xl:border-r-2 xl:border-r-gray-500 px-4 xl:my-6
           cards
           " 
           v-for="city in Cards" :key="city.id"
           ref="cards"
           >
               <div class="info_name xl:text-xl xl:w-60 xl:h-28">
                  {{city.name}}
               </div>
               <div class="circle_info xl:flex">
                   <div class="circle mr-2">
                      <img class="xl:w-11 xl:h-11 xl:rounded-full xl:border-2" :src="city.img" alt="">
                   </div>
                   <div class="user">
                        <div style="color: #000000" class="user_name xl:text-base">Карточки</div>
                        <div style="color: #7C7C7C" class="users font-normal xl:text-base">Алексей Филиппов</div>
                   </div>
               </div>
               <div class="images xl:my-2">
                  <img :src="city.img" alt="">
               </div>
           </div>
       </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import img1 from "../assets/images/Rectangle6.png"
import img2 from "../assets/images/Rectangle8.png"
import img3 from "../assets/images/Rectangle9.png"
import img4 from "../assets/images/Rectangle10.png"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const Cards = ref([
    {
        id: 1,
        name: 'KvARTal – cultural district of Sofia',
        user: 'Алексей Филиппов',
        img: img1
    },
    {
        id: 2,
        name: 'KvARTal Festival',
        user: 'Алексей Филиппов',
        img: img2
    },
    {
        id: 3,
        name: 'NEXT Balkan – contemporary Balkan Art',
        user: 'Алексей Филиппов',
        img: img3
    },
    {
        id: 4,
        name: 'New Creative Academy',
        user: 'Алексей Филиппов',
        img: img4
    },
     {
        id: 5,
        name: 'Art Compass',
        user: 'Алексей Филиппов',
        img: img1
    },
     {
        id: 6,
        name: 'New Creative Academy',
        user: 'Алексей Филиппов',
        img: img3
    },
     {
        id: 7,
        name: 'New Creative Academy',
        user: 'Алексей Филиппов',
        img: img2
    },
     {
        id: 8,
        name: 'New Creative Academy',
        user: 'Алексей Филиппов',
        img: img4
    },
     {
        id: 9,
        name: 'New Creative Academy',
        user: 'Алексей Филиппов',
        img: img1
    },
     {
        id: 10,
        name: 'New Creative Academy',
        user: 'Алексей Филиппов',
        img: img3
    }
])

const initScroolAnimation = () => {
    Cards.value.forEach((city, index) => {
        animate(index)
    })
}
const animate = (index) => {
    const selector = `.item:nth-child(${index+1})`
    gsap.from(selector, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        scrollTrigger:{
            trigger: selector,
            start: 'top 98%'
        }
    })
}
onMounted(() => {
    initScroolAnimation()
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
@media(min-width: 360px){
.cards:nth-child(2n + 1){
    border-left: 0px;
}
}
</style>