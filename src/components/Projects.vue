<template>
     <div class="projectss xl:mt-16 xl:flex xl:items-center xl:mb-5">
         <div class="img_content">
           salom
         </div>
         <div class="route xl:text-9xl xl:text-eeee absolute left-52 z-30">
             {{ route.name.toUpperCase() }}
         </div>
         <div class="img absolute right-16 bottom-10 z-30">
             <img src="../assets/images/Ellipse.png" alt="">
         </div>
     </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const route = useRoute()
const textCss = ref("")
setTimeout(() => {
    textCss.value = "animate__zoomInUp"
}, 2000);
onMounted(() => {
    gsap.from('.route', {
        opacity: 0,
        duration: 4,
        y: 50,
    })
})
</script>

<style scoped>
@media(min-width: 1280px){
.projectss img:nth-child(1){
    width: 78px;
    height: 78px;
}  
.projectss{
    min-width: 100%;
    height: 240px;
    background-image: url('../assets/images/Rectangle1.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    position: relative;
    z-index: 10;
}
.img_content{
    width: 100%;
    height: 240px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 20;
}
}
</style>