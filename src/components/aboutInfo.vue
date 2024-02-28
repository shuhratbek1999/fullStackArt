<template>
    <div class="about_info flex justify-center w-full">
        <div 
        class="about_content xl:w-11/12 xl:flex xl:flex-wrap xl:justify-between xl:items-start
           xx:flex xx:flex-wrap xx:justify-center xx:w-11/12
           xs:flex xs:flex-wrap xs:justify-center xs:w-11/12
           lg:w-11/12 lg:flex lg:flex-wrap lg:justify-between lg:items-start
           md:w-11/12 md:flex md:flex-wrap md:justify-between md:items-start
        " 
         v-for="(item,index) in AllProps" :key="index"
        >
        <div class="newsEng" v-if="item.project">
            <div class="
            w-full pr-2 font-normal cursor-pointer xl:flex xl:flex-row xx:flex-col xx:items-center xx:justify-center
            xs:flex-col xs:items-center xs:justify-center xl:items-start
            lg:flex lg:flex-row md:flex md:flex-row md:items-start lg:items-start
            "
            v-for="info in item.project" :key="info"
            >
            <div 
            class="lefts xl:w-8/12 xl:border-r-2 xl:border-r-black pr-3 xx:w-11/12 xs:w-11/12
            xx:border-b-2 xx:border-b-gray-800 xx:pb-4 xl:border-b-0
            xs:border-b-2 xs:border-b-gray-800 xs:pb-4
            lg:w-8/12 lg:border-r-2 lg:border-r-black lg:border-b-0
            md:w-8/12 md:border-r-2 md:border-r-black md:border-b-0
            "
            >
            <a href="#" class="text-justify xl:w-full font-Atyp xl:text-base lg:text-base md:text-base xx:text-xs xs:text-xs">
                <div class="desc" v-for="(info,index) in info.description" :key="index">
                    <a href="#" class="texts">
                        {{info}}
                    </a>
                </div>
            </a>
            </div>
            <div 
            class="rights xl:w-4/12 xx:w-11/12 xs:w-11/12
            xx:pt-4 xl:pt-0 xl:pl-4 md:w-4/12 md:pl-4 lg:w-4/12 lg:pl-4 lg:pt-0 md:pt-0
            "
            >
                <span class="font-Atyp text-justify xl:text-xl md:text-xl lg:text-xl texts xx:text-xs xx:font-medium xs:text-xs">
                {{info.extra_description}}
            </span>
            </div>
            </div>
        </div>
        <div class="ab_new" v-else>
            <div 
                class="
                w-full pr-2 font-normal cursor-pointer xl:flex xl:flex-row xx:flex-col xx:items-center xx:justify-center
                xs:flex-col xs:items-center xs:justify-center xl:items-start
                lg:flex lg:flex-row md:flex md:flex-row md:items-start lg:items-start
                "
                v-for="info in item.projects" :key="info"
                >
            <div 
            class="lefts xl:w-8/12 xl:border-r-2 xl:border-r-black pr-3 xx:w-11/12 xs:w-11/12
            xx:border-b-2 xx:border-b-gray-800 xx:pb-4 xl:border-b-0
            xs:border-b-2 xs:border-b-gray-800 xs:pb-4
            lg:w-8/12 lg:border-r-2 lg:border-r-black lg:border-b-0
            md:w-8/12 md:border-r-2 md:border-r-black md:border-b-0
            "
            >
            <a href="#" class="text-justify xl:w-full font-Atyp xl:text-base lg:text-base md:text-base xx:text-xs xs:text-xs">
                <div class="desc" v-for="(info,index) in info.description" :key="index">
                    <a href="#" class="texts">
                        {{info}}
                    </a>
                </div>
            </a>
            </div>
            <div 
            class="rights xl:w-4/12 xx:w-11/12 xs:w-11/12
            xx:pt-4 xl:pt-0 xl:pl-4 md:w-4/12 md:pl-4 lg:w-4/12 lg:pl-4 lg:pt-0 md:pt-0
            "
            >
                <span class="font-Atyp text-justify xl:text-xl md:text-xl lg:text-xl texts xx:text-xs xx:font-medium xs:text-xs">
                {{info.extra_description}}
            </span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"
import {useI18n} from "vue-i18n"
const {t} = useI18n()
const props = defineProps({
    allPost:{
        type: Array,
        required: true
    }
})
const AllProps = computed(() => props.allPost)
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
    transition: background-size 0.4s ease-out;
}
.texts:hover{
    background-size: 100% 2px;
}
</style>