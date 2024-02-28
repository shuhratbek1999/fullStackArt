<template>
    <div 
    class="top_menu fixed top-0 xl:w-full overflow-x-hidden lg:w-full md:w-full xx:w-full xs:w-full flex items-center justify-center xl:h-16 lg:h-16 md:h-16 xx:h-12 bg-greys z-20">
    <slot>
        <div class="content w-full flex justify-center items-center">
            <div class="navbar xx:hidden xs:hidden xl:flex lg:flex md:flex flex items-center w-11/12">
                <ul class="flex justify-center items-center w-2/12 cursor-pointer">
                    <li><img class="lg:w-8 lg:h-8 md:w-8 md:h-8 mr-1" src="../assets/images/dom.png" alt="dom png"></li>
                    <li class="mr-1"><img @click="About" class="md:w-16 xl:w-full lg:w-full" src="../assets/images/Group.png" alt="group img"></li>
                </ul>
                <ul class="flex justify-between w-10/12">
                    <li v-for="item in Menus" :key="item.id" class="cursor-pointer h-full">
                        <a href="#page"
                            v-if="item.label != 'eng'" 
                            @click="MenuItem(item.label)" 
                            class="text-menuColor font-sans xl:text-sm xs:text-xs" 
                            :class="[{'border-b-gray-400 border-b-2 pb-2 font-medium': route.name == item.label},{'text-sm': locale == 'de'}]"
                        >
                            {{ $t(`menu.${item.label.toLowerCase()}`) }}
                        </a>
                    </li>
                        <select  v-model="lang" class="custom-select" @change="handleChange">
                            <option v-for="lang in Options" :key="lang" :value="lang.value">
                                {{lang.label}}
                            </option>
                        </select>
                </ul>
            </div>
            <div 
                class="
                hidden_navbar xs:h-12 xl:hidden lg:hidden md:hidden
                xs:w-full xx:w-full xx:flex xx:justify-between xx:items-center
                xs:flex xs:justify-between xs:items-center xx:px-2 xs:px-2
                "
                >
                    <ul class="xs:flex xs:items-center xx:flex xx:items-center">
                        <li><img class="xs:w-10 xx:w-9 xx:mr-1 xs:mr-1" src="../assets/images/dom.png" alt="dom png"></li>
                        <li><img @click="About"  class="xs:w-12 xx:w-14" src="../assets/images/Group.png" alt="group img"></li>
                    </ul>
                    <div class="icons">
                        <n-icon size="35" class="menu" @click="Activate">
                            <Menu />
                        </n-icon> 
                    </div>
                    <n-drawer
                        v-model:show="active"
                        :width="200"
                        resizable
                    >
                    <n-drawer-content title="Menu" class="shadow-sm" closable>
                    <ul class="flex flex-col justify-center items-left">
                        <li v-for="item in Menus" :key="item.id" class="px-4 cursor-pointer navbar_list py-2">
                            <a href="#page"
                            v-if="item.label != 'eng'" 
                            @click="MenuItem(item.label)" 
                            class="text-menuColor font-sans xl:text-sm xs:text-xs" 
                            :class="[{'border-b-gray-400 border-b-2 pb-2 font-medium': route.name == item.label},{'text-sm': locale == 'de'}]"
                        >
                            {{ $t(`menu.${item.label.toLowerCase()}`) }}
                        </a>
                        </li>
                        <select  v-model="lang" class="custom-select" @change="handleChange">
                            <option v-for="lang in Options" :key="lang" :value="lang.value">
                                {{lang.label}}
                            </option>
                        </select>
                    </ul>
                    </n-drawer-content>
                    </n-drawer>
            </div>
        </div>
    </slot>
    </div>
</template>
<script setup>
import {TelegramPlane} from "@vicons/fa";
import {Menu} from "@vicons/ionicons5"
import {onMounted, ref,watch, watchEffect} from "vue";
import {useRouter, useRoute} from "vue-router";
import { useI18n } from "vue-i18n";
import {City} from "../stores/index"
const Langes = City()
const { t,locale } = useI18n();
const router = useRouter();
const route = useRoute()
const active = ref(false);
let lang = ref('en')
const Activate = () => {
    active.value = true;
}
const Menus = ref([
    {
        id: 1,
        label: `About us`
    },
    {
        id: 2,
        label: 'Projects'
    },
    {
        id: 3,
        label: 'Visual Arts'
    },
    {
        id: 4,
        label: 'Live Arts'
    },
    {
        id: 5,
        label: 'Education'
    },
    {
        id: 6,
        label: 'Screenings'
    },
    {
        id: 7,
        label: 'Publications'
    },
    {
        id: 8,
        label: 'Media'
    },
    {
        id: 9,
        label: 'News'
    }
])
const Options = ref([
     {
        label: 'English',
        value: `${lang.value}`
    },
    {
        label: 'Bulgaria',
        value: 'de'
    }
])
const MenuItem = (name) => {
    switch (name) {
        case 'About us':
            router.push('/')
            break;
        case 'Projects':
            router.push('/project')
            break;
        case 'Education':
            router.push('/education')
            break;
        case 'Live Arts':
             router.push('/livearts')
        break;
        case 'Media':
             router.push('/media')
        break;
        case 'News':
             router.push('/news')
        break;
        case 'Publications':
             router.push('/publication')
        break;
        case 'Screenings':
             router.push('/screenings')
        break;
        case 'Visual Arts':
             router.push('/visual')
        break;
        default:
            break;
    }
}
const About = () => {
    router.push('/')
}
const handleChange = (event) => {
    if(event){
        Langes.lang = event.target.value
        localStorage.setItem('lang', event.target.value)
        const locales = `${event.target.value}` === 'en' ? "en" : "de"
        locale.value = locales
    }
}
watch(() => Langes.lang, () => {
    lang.value = Langes.lang
})
onMounted(() => {
    lang.value = Langes.lang
})
</script>
<style scoped>
.menus{
    display: flex;
    border: 2px solid red;
}
</style>