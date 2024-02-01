<template>
  <div 
       class="footer flex justify-center xl:w-full">
       <div 
       class="
       footer_content xl:w-11/12 xl:flex xl:flex-wrap xl:justify-between 
       xl:items-center z-10"
       >
       </div>
       <div 
          class="footer_left"
          >
        </div>
        <div class="footer_right xl:text-eeee xl:mr-8 absolute z-40 right-10"
            >
              <div class="icon flex items-center cursor-pointer">
                    <div class="instagramm flex justify-center items-center">
                        <img class="xl:w-10 xl:h-10" src="../assets/images/ins.png" alt="instagram">
                    </div>
                <div class="ml-2">
                  <a href="#" class="xl:text-3xl xx:text-xl xl:text-white xl:opacity-100 font-Atyp">
                   {{t('footer.dom1')}}
                  </a>
                  </div>
            </div>
            <div class="icon flex items-center cursor-pointer xl:my-5">
                    <div class="facebook flex justify-center items-center">
                        <img class="xl:w-10 xl:h-10" src="../assets/images/iface.png" alt="facebook">
                    </div>
                <div class="ml-2">
                  <a href="#" class="xl:text-3xl xx:text-xl font-Atyp">
                    {{t('footer.dom2')}}
                  </a>
                </div>
            </div>
            <div class="icon flex items-center cursor-pointer">
                    <div class="facebook flex justify-center items-center">
                        <img class="xl:w-10 xl:h-10" src="../assets/images/inyou.png" alt="you tube">
                    </div>
                <div class="ml-2">
                  <a href="#" class="xl:text-3xl xx:text-xl font-Atyp">
                      {{t('footer.dom3')}}
                    </a>
                  </div>
            </div>
         </div>
         <div style="height: 2px; background-color: white" class="absolute w-11/12 bottom-6"></div>
  </div>
</template>

<script setup>
import {FacebookF,Instagram, Youtube} from "@vicons/fa"
import {useI18n} from "vue-i18n"
const {t} = useI18n()
</script>

<style scoped>
.footer{
    height: 330px;
    background-image: url('../assets/images/Rectangle3.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 10;
}
.footer_content{
    width: 100%;
    height: 330px;
    position: absolute;
    top: 0;
    left: 20;
    background-color: black;
    opacity: 0.5;
    padding: 0px 60px;
    z-index: 20;
}
.footer_left{
  position: absolute;
  z-index: 100;
  left: 60px;
  top: 80px;
  border-right: 1px solid white;
  width: 50%;
}
.footer_right{
  right: 60px;
  top: 100px;
  position: absolute;
  z-index: 100;
}
.footer_content .xl-text-3xl {
  opacity: 1; /* Barcha .xl-text-3xl klassiga opacity qo'shish */
}
</style>