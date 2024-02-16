<template>
  <div class="modal" :id="'lns_' + modelId" v-if="props.showModal.bool">
       <n-modal
            v-model:show="props.showModal.bool"
            class="custom-card w-100"
            preset="card"
            title="Images"
            :bordered="false"
            size="huge"
            :segmented="segmented"
        >
            <div class="content min-h-64 overflow-y-scroll" v-if="InfoAll">
                <div class="images xl:flex-row xx:flex xx:justify-center" v-if="InfoAll.Images.length > 0">
                    <!-- <div class="img p-1" v-for="(item,index) in InfoAll.Images" :key="item.Id">
                        <img @click="Images(index)" class="xl:w-56 xl:h-56 xx:w-60 xx:h-60" :src="FILE_URL + 'images/' + item.url" alt="rasm">
                    </div> -->
                     <n-carousel show-arrow :dot-placement="placement" :dot-type="type">
                        <div class="images" v-for="(item,index) in InfoAll.Images" :key="index">
                            <img 
                                :src="FILE_URL + 'images/' + item.url"  
                                alt="img"
                                class="carousel-img"
                            >
                        </div>
                    </n-carousel>
                </div>
            </div>
            <!-- <template #footer>
            Footer
            </template> -->
        </n-modal>
  </div>
</template>

<script setup>
import {computed, inject, onMounted, ref, watch} from "vue"
import {useMessage} from "naive-ui"
import {City} from '../stores/index'
const store = City()
const props = defineProps({
    showModal:{
        type: Object,
        required: true
    }
})
const placement = ref("top")
const type = ref("top")
const FILE_URL = inject('FILE_URL')
let InfoAll = ref({})
const segmented = ref({
    content: "soft",
    footer: "soft"
})
const Images = (index) => {
        let names = FILE_URL + 'images/' + InfoAll.value.Images[index].url
        window.open(names, '_blank')
}
// const widths = document.querySelector('.modal')
// const bodyStyle = ref({
//     width: '1050px'
// })
// const 
const showModal = ref(false)
const modelId = ref(null)
const message = useMessage()
const onPositiveClick = () => {
    message.success("submit")
    showModal.value = false
}
const onNegativeClick = () => {
    message.success("cancel")
    showModal.value = false  
}
watch(() => store.cityOne, () => {
    InfoAll.value = store.cityOne
})
computed(() => store.cityOne, () => {
    InfoAll.value = store.cityOne
})
</script>

<style scoped>
.carousel-img {
  width: 100%;
  object-fit: cover;
}
</style>