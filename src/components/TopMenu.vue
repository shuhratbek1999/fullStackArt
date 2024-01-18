<template>
    <div 
    class="top_menu fixed top-0 w-full xl:h-16 xx:h-12 xs:h-14 bg-greys">
           <div class="navbar flex xx:hidden xs:hidden xl:flex xl:items-center xl:justify-center">
                <ul class="flex w-3/12 justify-center items-center">
                    <li><img src="../assets/images/dom.png" alt="dom png"></li>
                    <li class="mr-1"><img src="../assets/images/Group.png" alt="group img"></li>
                </ul>
                <ul class="flex w-10/12 justify-center">
                    <li v-for="item in Menus" :key="item.id" class="px-4 cursor-pointer">
                        <span @click="MenuItem(item.label)" class="text-menuColor xl:text-base xs:text-xs" :class="{'border-b-gray-400 border-b-2 pb-2': route.name == item.label}">{{item.label}}</span>
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
</template>
<script setup>
import {TelegramPlane} from "@vicons/fa";
import {Menu} from "@vicons/ionicons5"
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router";
const router = useRouter();
const route = useRoute()
const active = ref(false);
const Activate = () => {
    active.value = true;
}
const Menus = ref([
    {
        id: 1,
        label: 'About us'
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
        label: 'Eng'
    }
])

const MenuItem = (name) => {
    switch (name) {
        case 'About us':
            router.push('/about')
            break;
        case 'Projects':
            router.push('/project')
            break;
        default:
            break;
    }
}
</script>
<style scoped>
.menus{
    display: flex;
    border: 2px solid red;
}
</style>