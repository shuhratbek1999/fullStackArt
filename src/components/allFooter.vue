<template>
  <div class="all_footer xl:flex xl:justify-center xl:bg-menuColor xl:items-center xl:h-96">
      <div class="content xl:w-11/12 xl:h-96 xl:flex xl:flex-col justify-center">
        <div class="footer_top  xl:w-full xl:h-20 xl:flex xl:items-center xl:justify-center">
            <ul class="xl:flex xl:items-center xl:justify-between xl:w-full">
                <li v-for="item in Menus" :key="item.id" class="px-4 xl:first:pl-0 last:pr-0 cursor-pointer">
                    <span @click="MenuItem(item.label)" class="text-white xl:text-sm xs:text-xs xl:text-eeee">{{item.label}}</span>
                </li>
            </ul>
        </div>
        <div class="footer_center xl:border-y-2 xl:border-y-eeee xl:w-full xl:h-48 xl:flex xl:items-start xl:py-6 xl:justify-between">
             <div class="footer_item">
                <span class="xl:text-sm xl:text-eeee xl:font-normal">Location</span> <br> 
                <span class="xl:text-sm xl:text-eeee xl:font-medium">Uzbekistan Tashkent</span>
             </div>
             <div class="footer_item">
                <span class="xl:text-sm xl:text-eeee xl:font-normal">Contact:</span> <br> 
                <span class="xl:text-sm xl:text-eeee xl:font-medium">+1(234)56789</span>
             </div>
             <div class="footer_item">
                <span class="xl:text-sm xl:text-eeee xl:font-normal">E-mail:</span> <br> 
                <span class="xl:text-sm xl:text-eeee xl:font-medium">Elbekgulomov0@gmail.com</span>
             </div>
             <div class="footer_item">
                <div class="item xl:text-sm xl:text-eeee xl:font-normal">
                   <span class="xl:text-sm xl:text-eeee xl:font-medium"> Founders:</span> <br> 
                   <span>Martina Stefanova,</span> <br> 
                   <span>Doychin Kotlarov</span>
                </div>
                <div class="item xl:text-sm xl:text-eeee xl:font-normal xl:mt-2">
                    <span class="xl:font-medium">General Manager:</span> <br>
                   <span> Martina Stefanova</span>
                </div>
             </div>
             <div class="footer_item">
                <div class="icon xl:flex xl:items-center">
                    <img class="xl:mr-2 xl:w-8 xl:h-8" src="../assets/images/ins.png" alt="instagram">
                    <span class="xl:text-sm xl:text-ffff">doma_art_foundation</span>
                </div>
                <div class="icon xl:flex xl:items-center xl:my-3">
                    <img class="xl:mr-2 xl:w-8 xl:h-8" src="../assets/images/iface.png" alt="facebook">
                    <span class="xl:text-sm xl:text-ffff">DomaArtFoundation</span>
                </div>
                <div class="icon xl:flex xl:items-center">
                    <img class="xl:mr-2 xl:w-8 xl:h-8" src="../assets/images/inyou.png" alt="youtube">
                    <span class="xl:text-sm xl:text-ffff">DOMA Art Foundation</span>
                </div>
             </div>
        </div>
        <div class="footer_bottom xl:w-full xl:justify-center xl:h-12">
             <div class="footer_b_text xl:flex xl:justify-center xl:text-ffff">Design & Development: GNSPRO</div>
        </div>
      </div>
  </div>
</template>

<script setup>
import topMenu from './TopMenu.vue'
import {ref} from "vue"
import {useRouter, useRoute} from "vue-router"
const router = useRouter()
const route = useRoute()
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

<style>

</style>