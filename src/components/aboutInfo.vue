<template>
    <div class="about_info flex justify-center xl:w-full">
        <div class="about_content xl:w-11/12 xl:flex xl:flex-wrap xl:justify-between xl:items-start">
               <div 
                class="xl:w-8/12 xl:pr-2 xl:text-base xl:font-normal cursor-pointer hover:underline"
                >
                    {{t('about.title')}}
                </div>
                <div 
                    class="xl:w-4/12 xl:pl-2 xl:text-xl cursor-pointer xl:font-medium hover:underline"
                    >
                    {{t('about.titles')}}
                </div>
        </div>
    </div>
</template>

<script setup>
import {useI18n} from "vue-i18n"
const {t} = useI18n()
</script>

<style scoped>
/* .info_item{
    text-decoration: underline;
} */
</style>