<template>
    <div class="about_info flex justify-center xl:w-full">
        <div 
        class="about_content xl:w-11/12 xl:flex xl:flex-wrap xl:justify-between xl:items-start
           xx:flex xx:flex-wrap xx:justify-center xx:w-11/12
           xs:flex xs:flex-wrap xs:justify-center xs:w-11/12
        "
         v-for="(item,index) in props.allPost" :key="index"
        >
               <div 
                class="
                w-full pr-2 font-normal cursor-pointer xl:flex xl:flex-row xx:flex-col xx:items-center xx:justify-center
                xs:flex-col xs:items-center xs:justify-center xl:items-start
                "
                v-for="info in item.project" :key="info"
                >
                  <div 
                  class="lefts xl:w-8/12 xl:border-r-2 xl:border-r-black pr-3 xx:w-11/12 xs:w-11/12
                  xx:border-b-2 xx:border-b-gray-800 xx:pb-4 xl:border-b-0
                  xs:border-b-2 xs:border-b-gray-800 xs:pb-4
                  "
                  >
                    <a href="#" class="texts font-Atyp xl:text-base xx:text-xs xs:text-xs">
                        {{info.description}}
                    </a>
                  </div>
                  <div 
                  class="rights xl:w-4/12 xx:w-11/12 xs:w-11/12
                  xx:pt-4 xl:pt-0 xl:pl-4
                  "
                  >
                     <a href="#" class="font-Atyp xl:text-xl texts xx:text-xs xs:text-xs">
                        {{info.extra_description}}
                    </a>
                  </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import {useI18n} from "vue-i18n"
const {t} = useI18n()
const props = defineProps({
    allPost:{
        type: Array,
        required: true
    }
})
</script>

<style scoped>
/* .info_item{
    text-decoration: underline;
} */
.texts{
    background: linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, black,black);
    background-size: 0 2px;
    background-position: left bottom;
    background-repeat: no-repeat;
    transition: background-size 0.6s ease-out;
}
.texts:hover{
    background-size: 100% 2px;
}
</style>