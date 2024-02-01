<template>
    <div class="about_info flex justify-center xl:w-full">
        <div 
        class="about_content xl:w-11/12 xl:flex xl:flex-wrap xl:justify-between xl:items-start"
         v-for="(item,index) in props.allPost" :key="index"
        >
               <div 
                class="
                xl:w-full xl:pr-2 xl:text-base xl:font-normal cursor-pointer xl:flex
                "
                v-for="info in item.project" :key="info"
                >
                  <div class="lefts w-8/12 border-r-2 border-r-black pr-3">
                    <a href="#" class="texts font-Atyp text-base">
                        {{info.description}}
                    </a>
                  </div>
                  <div class="rights w-4/12 pl-3">
                     <a href="#" class="font-Atyp text-xl underline underline-offset-4">
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