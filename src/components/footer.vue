<template>
  <div 
       class="footer flex justify-center w-full"
       :style="{'background-image': props.catImg? 'url('+ props.catImg +')' : 'none'}"
       >
       <div class="
       footer_content xl:w-11/12 xl:flex xl:flex-wrap xl:justify-between xx:w-11/12 xx:flex xx:flex-wrap xx:justify-between
       xl:items-center z-10 xs:w-11/12 xs:flex xs:flex-wrap xs:justify-between"
       >
       </div>
       <div 
          class="footer_left"
          >
        </div>
        <div class="footer_right text-eeee mr-8 absolute z-40 right-10"
             v-if="AllAbouts"
            >
            <div 
                class="icon flex items-center cursor-pointer"
                v-for="(all,index) in AllAbouts" :key="index"
                >
                  <div class="eng" v-if="all.project">
                    <div class="all" v-for="(pro,index) in all.project" :key="index">
                      <div class="itemss my-2" v-for="(item,index) in pro.Url" :key="index">
                        <div v-if="item.type == 'instagramm'" class="icon flex items-center">
                        <div class="mr-2 xl:w-12 xl:h-12 bg-black xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center" :style="{'backgroundColor': item.color}">
                            <n-icon class="xx:text-sm xl:text-xl">
                               <LogoInstagram />
                            </n-icon>
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                        </div>
                        </div>
                        <div v-if="item.type == 'facebook'" class="icon flex items-center">
                            <div class="mr-2 xl:w-12 xl:h-12 bg-black xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center">
                                <n-icon class="xx:text-sm xl:text-xl">
                                  <FacebookF />
                                </n-icon>
                            </div>
                            <div class="link">
                                <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                            </div>
                        </div>
                        <div v-if="item.type == 'you tube'" class="icon flex items-center">
                            <div class="mr-2 xl:w-12 xl:h-12 bg-black xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center">
                                <n-icon class="xx:text-sm xl:text-xl">
                                  <Youtube />
                                </n-icon>
                            </div>
                            <div class="link">
                                <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                            </div>
                        </div>
                        <div v-if="item.type == 'Site'" class="icon flex items-center">
                            <div class="xl:mr-2 xl:w-12 bg-black xl:h-12 xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center">
                                <n-icon class="xx:text-sm xl:text-xl">
                                  <Google />
                                </n-icon>
                            </div>
                            <div class="link">
                                <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                            </div>
                        </div>
                      </div>
                  </div>
                  </div>
                  <div class="bol" v-else>
                     <div class="all" v-for="(pro,index) in all.projects" :key="index">
                      <div class="itemss my-2" v-for="(item,index) in pro.Urlss" :key="index">
                        <div v-if="item.type == 'instagramm'" class="icon flex items-center">
                        <div class="mr-2 xl:w-12 xl:h-12 bg-black xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center" :style="{'backgroundColor': item.color}">
                            <n-icon class="xx:text-sm xl:text-xl">
                               <LogoInstagram />
                            </n-icon>
                        </div>
                        <div class="link">
                            <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                        </div>
                        </div>
                        <div v-if="item.type == 'facebook'" class="icon flex items-center">
                            <div class="mr-2 xl:w-12 xl:h-12 bg-black xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center">
                                <n-icon class="xx:text-sm xl:text-xl">
                                  <FacebookF />
                                </n-icon>
                            </div>
                            <div class="link">
                                <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                            </div>
                        </div>
                        <div v-if="item.type == 'you tube'" class="icon flex items-center">
                            <div class="mr-2 xl:w-12 xl:h-12 bg-black xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center">
                                <n-icon class="xx:text-sm xl:text-xl">
                                  <Youtube />
                                </n-icon>
                            </div>
                            <div class="link">
                                <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                            </div>
                        </div>
                        <div v-if="item.type == 'Site'" class="icon flex items-center">
                            <div class="xl:mr-2 xl:w-12 bg-black xl:h-12 xx:w-7 xx:h-7 xs:w-8 xs:h-8 rounded-full flex justify-center items-center">
                                <n-icon class="xx:text-sm xl:text-xl">
                                  <Google />
                                </n-icon>
                            </div>
                            <div class="link">
                                <a target="_blank" :href="item.link" class="xl:text-2xl xx:text-xs xs:text-xs">{{item.name}}</a>
                            </div>
                        </div>
                      </div>
                  </div>
                  </div>
            </div>
         </div>
         <div style="height: 2px; background-color: white" class="absolute w-11/12 bottom-6"></div>
  </div>
</template>

<script setup>
import {FacebookF,Instagram, Youtube,InstagramSquare,Google} from "@vicons/fa"
import {LogoInstagram} from "@vicons/ionicons5"
import { watch,computed } from "vue"
import {useI18n} from "vue-i18n"
const {t} = useI18n()
const props = defineProps({
  AllAbout:{
    type: Array,
    required: true
  },
  catImg:{
    type: String,
    required: true
  }
})
const AllAbouts = computed(() => props.AllAbout)
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
@media(min-width: 360px){
.footer{
    height: 170px;
    background-image: url('../assets/images/Rectangle3.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 10;
}
.footer_content{
    width: 100%;
    height: 170px;
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
  right: 10px;
  top: 20px;
  position: absolute;
  z-index: 100;
}
}
@media(min-width: 1280px){
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
}
</style>