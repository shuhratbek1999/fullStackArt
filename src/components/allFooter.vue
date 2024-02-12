<template>
  <div class="all_footer xl:flex xl:justify-center xl:bg-menuColor xl:items-center xl:h-96 
  xx:flex xx:justify-center xx:bg-menuColor xx:items-center xx:h-80 xs:flex xs:justify-center xs:bg-menuColor xs:items-center xs:h-96">
      <div class="content xl:w-11/12 xl:h-96 xl:flex xl:flex-col justify-center 
      xx:w-11/12 xx:h-80 xx:flex xx:flex-col xs:w-11/12 xs:h-96 xs:flex xs:flex-col">
        <div class="footer_top  xl:w-full xl:h-20 xl:flex xl:items-center xl:justify-center xx:box-border
        xx:w-full xx:h-16 xx:flex xx:items-center xx:justify-center xs:w-full xs:h-20 xs:flex xs:items-center xs:justify-center
        ">
            <ul class="flex items-center justify-between w-full">
                <li v-for="item in Menus" :key="item.id" class="xl:px-4 lg:px-4 md:px-4 xx:px-1 xs:px-1 first:pl-0 last:pr-0 cursor-pointer">
                    <a 
                        href="#"
                        @click="MenuItem(item.label)" 
                        class="xs:text-xs xx:text-xz text-eeee spam xl:text-base lg:text-base md:text-base">
                        {{ $t(`menu.${item.label.toLowerCase()}`) }}
                     </a>
                </li>
            </ul>
        </div>
        <div class="footer_center border-y-2 border-y-eeee w-full h-48 flex items-start py-6 justify-between xx:flex-wrap xs:flex-wrap xl:flex-nowrap">
             <div class="footer_item xx:w-4/12 xs:w-4/12 xs:mb-2 xl:w-1/5">
                <span class="text-sm text-eeee font-normal xx:text-xx xs:text-xs xl:text-base">{{t('footer.location')}}</span> <br> 
                <span class="text-sm text-eeee font-medium xx:text-xx xs:text-xs xl:text-base">{{t('footer.adress')}}</span>
             </div>
             <div class="footer_item xx:w-4/12 xs:w-4/12 xs:mb-2 xl:w-1/5">
                <span class="text-sm text-eeee font-normal xx:text-xx xs:text-xs xl:text-base">{{t('footer.contact')}}</span> <br> 
                <span class="text-sm text-eeee font-medium xx:text-xx xs:text-xs xl:text-base">+1(234)56789</span>
             </div>
             <div class="footer_item xx:w-4/12 xs:w-4/12 xs:mb-2 xl:w-1/5">
                <span class="text-sm text-eeee font-normal xx:text-xx xs:text-xs xl:text-base">{{t('footer.email')}}</span> <br> 
                <span class="text-sm text-eeee font-medium xx:text-xx xs:text-xs xl:text-base">Elbekgulomov0@gmail.com</span>
             </div>
             <div class="footer_item xx:w-8/12 xs:w-8/12 xx:flex xl:w-1/5 xs:flex xl:flex-col">
                <div class="item text-sm xx:w-6/12 xs:w-6/12 text-eeee font-normal xx:text-xx xs:text-xs xl:text-base">
                   <span class="text-sm text-eeee font-medium xx:text-xx xs:text-xs xl:text-base"> {{t('footer.founders')}}</span> <br> 
                   <span class="xx:text-xx xs:text-xx xl:text-base">Martina Stefanova,</span> <br> 
                   <span class="xx:text-xx xs:text-xx xl:text-base">Doychin Kotlarov</span>
                </div>
                <div class="item text-sm text-eeee font-normal">
                    <span class="font-medium xx:text-xx xs:text-xs xl:text-base">{{t('footer.general')}}</span> <br>
                   <span class="xx:text-xx xs:text-xx xl:text-base"> Martina Stefanova</span>
                </div>
             </div>
             <div class="footer_item xx:w-4/12 xs:w-4/12 xl:w-1/5">
                <div class="icon flex items-center">
                    <img class="mr-1 xl:w-8 xl:h-8 xx:w-4 xx:h-4" src="../assets/images/ins.png" alt="instagram">
                    <span class="text-sm text-ffff xx:text-xx xs:text-xs xl:text-base">{{t('footer.dom1')}}</span>
                </div>
                <div class="icon flex items-center my-3 xx:my-1 xs:my-1">
                    <img class="mr-1 xl:w-8 xl:h-8 xx:w-4 xx:h-4" src="../assets/images/iface.png" alt="facebook">
                    <span class="text-sm text-ffff xx:text-xx xs:text-xs xl:text-base">{{t('footer.dom2')}}</span>
                </div>
                <div class="icon flex items-center">
                    <img class="mr-1 xl:w-8 xl:h-8 xx:w-4 xx:h-4" src="../assets/images/inyou.png" alt="youtube">
                    <span class="text-sm text-ffff xx:text-xx xs:text-xs xl:text-base">{{t('footer.dom3')}}</span>
                </div>
             </div>
        </div>
        <div class="footer_bottom w-full justify-center h-12">
             <div class="footer_b_text flex justify-center text-ffff xx:text-xx xs:text-xs xl:text-base">
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
@media(min-width: 360px){
.menu360{
    font-size: 8px;
}
}
@media(min-width: 1280px){
.menu360{
    font-size: 16px;
}
}
</style>