<template>
     <div class="projectss xl:mt-20 xl:flex xl:items-center xl:justify-center relative xl:mb-5">
         <div class="route text-white xl:text-10xl xl:mr-72 xl:font-bold">
             {{ route.name.toUpperCase() }}
         </div>
         <div class="img absolute right-16 bottom-10 wow animate__fadeIn" data-wow-duration="2s">
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
@media(min-width: 480px){
.projectss img:nth-child(1){
    width: 40px;
    height: 40px;
}  
.projectss{
    min-width: 100%;
    height: 120px;
    background-image: url('../assets/images/Rectangle1.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
}
}
@media(min-width: 360px){
.projectss img:nth-child(1){
    width: 35px;
    height: 35px;
}  
.projectss{
    min-width: 100%;
    height: 100px;
    background-image: url('../assets/images/Rectangle1.png');
    background-repeat: no-repeat;
    background-size: contain;
     display: flex;
    position: relative;
    margin-top: 48px;
}
}
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
    filter: brightness(0.6);
}
/* .projectss::before{
     content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 2;
    opacity: 0.4;
} */
.route{
    opacity: 2;
}
}
</style>