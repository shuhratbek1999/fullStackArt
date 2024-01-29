<template>
     <slot>
        <div class="projectss proo xl:mt-16 xl:flex xl:items-center"
          :style="{'background-image': props.Img.img ? 'url(' + props.Img.img + ')' : 'none'}"
        >
         <div class="img_content">
         </div>
         <div class="route xl:text-9xl xl:text-eeee absolute left-52 z-30">
             {{ props.Img.title }}
         </div>
         <div class="img absolute right-16 bottom-10 z-30">
            <!-- {{props.Img.img}} -->
             <img src="../assets/images/Ellipse.png" alt="">
             <!-- <img :src="props.Img.img" class="w-12 h-12" alt=""> -->
         </div>
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
@media(min-width: 1280px){
.projectss img:nth-child(1){
    width: 78px;
    height: 78px;
}  
.projectss{
    min-width: 100%;
    height: 240px;
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
    height: 240px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.7;
    z-index: 20;
}
}
</style>