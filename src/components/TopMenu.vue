<template>
    <div 
    class="top_menu fixed top-0 w-full xl:h-16 bg-greys z-20">
    <slot>
        <div class="content xl:w-full xl:flex xl:justify-center">
            <div class="navbar xl:w-11/12 xl:flex xl:items-center xl:justify-between">
                <ul class="flex justify-center items-center w-2/12">
                    <li><img src="../assets/images/dom.png" alt="dom png"></li>
                    <li class="mr-1"><img src="../assets/images/Group.png" alt="group img"></li>
                </ul>
                <ul class="flex justify-between w-10/12">
                    <li v-for="item in Menus" :key="item.id" class="cursor-pointer h-full">
                        <span 
                            v-if="item.label != 'eng'" 
                            @click="MenuItem(item.label)" 
                            class="text-menuColor font-Atyp xl:text-sm xs:text-xs" 
                            :class="[{'border-b-gray-400 border-b-2 pb-2': route.name == item.label},{'text-sm': locale == 'de'}]"
                            >
                            {{ $t(`menu.${item.label.toLowerCase()}`) }}
                        </span>
                        <select v-else v-model="lang" class="custom-select" @change="handleChange">
                            <option v-for="lang in Options" :key="lang" :value="lang.value">
                                {{lang.label}}
                            </option>
                        </select>
                    </li>
                </ul>
            </div>
            <div 
                class="
                hidden_navbar xs:h-14 xl:hidden xs:flex xs:justify-between xs:w-full xs:px-10 xs:items-center
                xx:h-14 xx:flex xx:justify-between xx:w-full xx:px-10 xx:items-center
                "
                >
                    <ul class="xs:flex xs:items-center xx:flex xx:items-center">
                        <li class="mr-1"><img class="xs:w-10 xx:w-9" src="../assets/images/Group.png" alt="group img"></li>
                        <li><img class="xs:w-10 xx:w-9" src="../assets/images/dom.png" alt="dom png"></li>
                    </ul>
                    <div class="icons">
                        <n-icon class="menu" @click="Activate">
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
                            <span @click="MenuItem(item.label)" class="text-menuColor xl:text-base xs:text-xs xx:text-xs" :class="{'border-b-gray-400 border-b-2 pb-2': route.name == item.label}">{{item.label}}</span>
                        </li>
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
    },
    {
        id: 10,
        label: 'eng'
    }
])
const Options = ref([
     {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Bulgaria',
        value: 'de'
    }
])
const MenuItem = (name) => {
    switch (name) {
        case 'About us':
            router.push('/about')
            break;
        case 'Projects':
            router.push('/')
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
const handleChange = (event) => {
    // console.log(event.target.value);
    if(event){
        localStorage.setItem('lang', event.target.value)
        const locales = `${event.target.value}` === 'en' ? "en" : "de"
        locale.value = locales
    }
}
onMounted(() => {
    handleChange()
})
</script>
<style scoped>
.menus{
    display: flex;
    border: 2px solid red;
}
</style>