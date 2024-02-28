<template>
     <slot>
        <div class="projectss proo mt-12 xl:flex xl:items-center lg:flex lg:items-center md:flex md:items-center xx:flex xx:items-center xl:h-64 lg:h-64 md:h-40 xx:h-24"
          :style="{'background-image': props.Img.img ? 'url(' + props.Img.img + ')' : 'none'}"
        >
         <div class="img_content xl:h-64 lg:h-64 md:h-40 xx:h-24">
         </div>
         <div class="route absolute z-30 w-full">
             <h1 v-if="store.lang === 'en'" class="text-eeee text-center font-normal xl:text-9xl xx:font-bold lg:text-8xl md:text-7xl"
              :class="[getLength(props.Img.title) ? 'xx:text-4xl' : 'text-5xl']"
             >
                {{ props.Img.title }}
            </h1>
            <h1 v-else class="text-eeee text-center font-normal xl:text-9xl xx:font-bold lg:text-8xl md:text-7xl"
              :class="[getLength(props.Img.titles) ? 'xx:text-4xl' : 'text-5xl']"
             >
                {{ props.Img.titles }}
            </h1>
         </div>
     </div>
     </slot>
</template>

<script setup>
import {inject, onMounted, ref, watch} from "vue"
import {useRoute} from "vue-router"
import {City} from "../stores/index"
const store = City()
const FILE_URL = inject('FILE_URL')
const route = useRoute()
const textCss = ref("")
const props = defineProps({
    Img:{
        type: Object
    }
})
const getLength = (text) =>{
    if(text){
        if(text.length > 12){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}
watch(() => props.Img, () => {
    props.Img.title = props.Img.title.toUpperCase()
    props.Img.img = FILE_URL + 'images/' + props.Img.img
})
</script>

<style scoped>
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
    opacity: 0.6;
    z-index: 20;
}
}
@media(min-width: 960px){
.projectss img:nth-child(1){
    width: 78px;
    height: 78px;
}  
.projectss{
    min-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-origin: border-box;
    display: flex;
    position: relative;
    /* object-fit: contain; */
    z-index: 10;
}
.img_content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.6;
    z-index: 20;
}
}
@media(min-width: 1024px){
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
    opacity: 0.6;
    z-index: 20;
}
}
@media(min-width: 1280px){
.projectss{
    min-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: border-box;
    background-attachment: scroll;
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
    opacity: 0.6;
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