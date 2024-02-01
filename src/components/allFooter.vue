<template>
  <div class="all_footer xl:flex xl:justify-center xl:bg-menuColor xl:items-center xl:h-96">
      <div class="content xl:w-11/12 xl:h-96 xl:flex xl:flex-col justify-center">
        <div class="footer_top  xl:w-full xl:h-20 xl:flex xl:items-center xl:justify-center">
            <ul class="xl:flex xl:items-center xl:justify-between xl:w-full">
                <li v-for="item in Menus" :key="item.id" class="px-4 xl:first:pl-0 last:pr-0 cursor-pointer">
                    <a 
                        href="#"
                        @click="MenuItem(item.label)" 
                        class="text-white xl:text-sm xs:text-xs xl:text-eeee spam">
                        {{ $t(`menu.${item.label.toLowerCase()}`) }}
                     </a>
                </li>
            </ul>
        </div>
        <div class="footer_center xl:border-y-2 xl:border-y-eeee xl:w-full xl:h-48 xl:flex xl:items-start xl:py-6 xl:justify-between">
             <div class="footer_item">
                <span class="xl:text-sm xl:text-eeee xl:font-normal">{{t('footer.location')}}</span> <br> 
                <span class="xl:text-sm xl:text-eeee xl:font-medium">{{t('footer.adress')}}</span>
             </div>
             <div class="footer_item">
                <span class="xl:text-sm xl:text-eeee xl:font-normal">{{t('footer.contact')}}</span> <br> 
                <span class="xl:text-sm xl:text-eeee xl:font-medium">+1(234)56789</span>
             </div>
             <div class="footer_item">
                <span class="xl:text-sm xl:text-eeee xl:font-normal">{{t('footer.email')}}</span> <br> 
                <span class="xl:text-sm xl:text-eeee xl:font-medium">Elbekgulomov0@gmail.com</span>
             </div>
             <div class="footer_item">
                <div class="item xl:text-sm xl:text-eeee xl:font-normal">
                   <span class="xl:text-sm xl:text-eeee xl:font-medium"> {{t('footer.founders')}}</span> <br> 
                   <span>Martina Stefanova,</span> <br> 
                   <span>Doychin Kotlarov</span>
                </div>
                <div class="item xl:text-sm xl:text-eeee xl:font-normal xl:mt-2">
                    <span class="xl:font-medium">{{t('footer.general')}}</span> <br>
                   <span> Martina Stefanova</span>
                </div>
             </div>
             <div class="footer_item">
                <div class="icon xl:flex xl:items-center">
                    <img class="xl:mr-2 xl:w-8 xl:h-8" src="../assets/images/ins.png" alt="instagram">
                    <span class="xl:text-sm xl:text-ffff">{{t('footer.dom1')}}</span>
                </div>
                <div class="icon xl:flex xl:items-center xl:my-3">
                    <img class="xl:mr-2 xl:w-8 xl:h-8" src="../assets/images/iface.png" alt="facebook">
                    <span class="xl:text-sm xl:text-ffff">{{t('footer.dom2')}}</span>
                </div>
                <div class="icon xl:flex xl:items-center">
                    <img class="xl:mr-2 xl:w-8 xl:h-8" src="../assets/images/inyou.png" alt="youtube">
                    <span class="xl:text-sm xl:text-ffff">{{t('footer.dom3')}}</span>
                </div>
             </div>
        </div>
        <div class="footer_bottom xl:w-full xl:justify-center xl:h-12">
             <div class="footer_b_text xl:flex xl:justify-center xl:text-ffff">
                {{t('footer.title')}}
             </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import topMenu from './TopMenu.vue'
import {ref} from "vue"
import {useRouter, useRoute} from "vue-router"
import { useI18n } from "vue-i18n";
const { t,locale } = useI18n();
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

<style scoped>
.spam{
    background: linear-gradient(to right, transparent, transparent),
    linear-gradient(to right, white, white);
    background-size: 100% 0.1rem, 0 0.1rem;
    background-repeat: no-repeat;
    background-position: 100% 100%, 0 100%;
    transition: background-size 0.3s ease-in;
    padding-bottom: 2px;
}
.spam:hover{
    background-size: 0 0.1rem, 95% 0.1rem;
}
</style>