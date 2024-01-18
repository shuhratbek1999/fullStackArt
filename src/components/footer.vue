<template>
  <div 
    class="
    footer w-full text-white flex items-center justify-between xl:flex-row
    xx:flex-col xx:justify-around
    ">
       <div 
          class="
          footer-left xl:w-3/4 xx:w-full xx:px-4 xs:h-3/4 flex xl:flex-col md:flex-col items-center justify-center border-r-2 border-r-white
          xx:flex-row xx:py-2
          "
          >
          <div class="item w-9/12 xl:text-3xl xx:text-xl xx:w-7/12 xs:w-7/12 font-thin">
            <span class="font-bold">Founders:</span> <br>
            Martina Stefanova, Doychin Kotlarov
          </div>
          <div class="item xl:text-3xl xx:text-xl w-9/12 mt-2 text-ffff font-thin xx:w-7/12">
            <span class="font-bold">General Manager:</span> <br>
            Martina Stefanova
          </div>
       </div>
       <div 
       class="
       footer-right w-1/2 flex flex-col items-center ml-60 xx:w-full xx:ml-0
      
       "
       >
          <div class="icon flex items-center cursor-pointer">
                <div class="facebook flex justify-center items-center">
                <n-icon size="25">
                    <Instagram />
                </n-icon>
                </div>
            <div class="ml-2"><a href="#" class="xl:text-3xl xx:text-xl">doma_art_foundation</a></div>
         </div>
         <div class="icon flex items-center my-2 cursor-pointer">
                <div class="facebook border-2 w-8 h-8 rounded-full flex justify-center items-center">
                <n-icon size="18">
                    <FacebookF />
                </n-icon>
                </div>
            <div class="ml-2"><a href="#" class="xl:text-3xl xx:text-xl">doma_art_foundation</a></div>
         </div>
         <div class="icon flex items-center cursor-pointer">
                <div class="facebook flex justify-center items-center">
                <n-icon size="25">
                    <Youtube />
                </n-icon>
                </div>
            <div class="ml-2"><a href="#" class="xl:text-3xl xx:text-xl">doma_art_foundation</a></div>
         </div>
       </div>
  </div>
</template>

<script setup>
import {FacebookF,Instagram, Youtube} from "@vicons/fa"
</script>

<style scoped>
.footer{
    height: 350px;
}
</style>