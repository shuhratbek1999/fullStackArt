<template>
  <div class="infoo xl:w-full xl:flex xl:justify-center xs:flex xs:justify-center xx:flex xx:justify-center">
    <div class="border-y-2 xl:justify-start xs:justify-center xx:justify-center py-4 xl:w-10/12 xl:flex xl:flex-wrap xs:flex xs:flex-wrap xx:flex xx:flex-wrap border-y-gray-400">
       <div class="animate__animated animate__fadeInLeft cards xl:w-3/12 xs:w-5/12 xx:w-5/12 p-4 border-l-2 border-l-gray-400 first:border-l-0 my-4" v-for="card in Cards" :key="card.id">
          <div class="card_title xl:h-20 xl:text-base xs:text-xs xs:h-16 xx:text-xs xx:h-16">
                {{card.name}}
          </div>
        <div class="card_img_circle flex justify-start py-3">
            <div class="circle rounded-full w-11 h-11 mr-2">
                <img class="w-10 h-10" :src="card.img" alt="">
            </div>
            <div class="user">
                <div class="user_title xl:text-base xs:text-xs xx:text-xs">Карточки</div>
                <div class="user_name xl:text-base xs:text-xs xx:text-xs">{{card.user}}</div>
            </div>
        </div>
        <div class="card_img">
            <img :src="card.img" :alt="card.name">
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
import img4 from "../assets/images/Rectangle10.png"
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
        name: 'New Creative Academy',
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
</script>

<style scoped>
.circle img{
    border-radius: 50%;
}
.cards:nth-child(5), .cards:nth-child(9){
    border-left: 0px;
}
@media(min-width: 360px){
.cards:nth-child(2n + 1){
    border-left: 0px;
}
}
</style>