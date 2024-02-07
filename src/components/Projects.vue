<template>
     <slot>
        <div class="projectss proo mt-12 xl:flex xl:items-center xx:flex xx:items-center xl:h-64 xx:h-24"
          :style="{'background-image': props.Img.img ? 'url(' + props.Img.img + ')' : 'none'}"
        >
         <div class="img_content xl:h-64 xx:h-24">
         </div>
         <div class="route absolute z-30 w-full">
             <h1 class="text-eeee text-center font-normal xl:text-9xl xx:text-5xl xx:font-bold">{{ props.Img.title }}</h1>
         </div>
         <!-- <div class="img absolute right-16 bottom-10 z-30">
             <img src="../assets/images/Ellipse.png" alt="">
         </div> -->
     </div>
     </slot>
</template>

<script setup>
import {inject, onMounted, ref, watch} from "vue"
import {useRoute} from "vue-router"
const FILE_URL = inject('FILE_URL')
const route = useRoute()
const textCss = ref("")
const props = defineProps({
    Img:{
        type: Object
    }
})
watch(() => props.Img, () => {
    props.Img.title = props.Img.title.toUpperCase()
    props.Img.img = FILE_URL + 'images/' + props.Img.img
})
</script>

<style scoped>

@media(min-width: 1200px){
.projectss img:nth-child(1){
    width: 78px;
    height: 78px;
}  
.projectss{
    min-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: border-box;
    display: flex;
    position: relative;
    z-index: 10;
}
.img_content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.7;
    z-index: 20;
}
}
@media(min-width: 360px){ 
.projectss{
    min-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: border-box;
    display: flex;
    position: relative;
    z-index: 10;
}
.img_content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.7;
    z-index: 20;
}
}

/* @media(min-width: 480px){
.route h1{
   font-size: 60px; 
   font-family: sans-serif;
   font-weight: 700;
}
} */
</style>