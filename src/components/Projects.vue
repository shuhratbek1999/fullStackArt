<template>
     <div>
        <slot>
        <div 
        class="
        projectss mt-16 xx:mt-12 xl:flex xl:justify-around xl:items-center xs:items-center xs:justify-around xs:w-1/3
        xx:items-center xx:justify-around
        "
        >
            <div class="xl:flex xs:flex xx:flex">
                <img class="xl:ml-32 xs:w-52 projects animate__animated animate__backInLeft" src="../assets/images/Projects.png" alt="projects">
                <img class="xl:ml-52 xs:ml-10 xx:ml-10 self-end animate__animated" :class="textCss" src="../assets/images/Ellipse.png" alt="ellipse">
            </div>
        </div>
     </slot>
     </div>
</template>

<script setup>
import {ref} from "vue"
const textCss = ref("")
setTimeout(() => {
    textCss.value = "animate__zoomInUp"
}, 2000);
</script>

<style scoped>
@media(min-width: 480px){
.projectss img:nth-child(1){
    width: 200px;
    height: 80px;
}
.projectss img:nth-child(2){
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
    width: 200px;
    height: 70px;
}
.projectss img:nth-child(2){
    width: 35px;
    height: 35px;
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
@media(min-width: 1280px){
.projectss img:nth-child(1){
    width: 800px;
    height: 150px;
}
.projectss img:nth-child(2){
    width: 78px;
    height: 78px;
}  
.projectss{
    min-width: 100%;
    height: 270px;
    background-image: url('../assets/images/Rectangle1.png');
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
} 
}
</style>