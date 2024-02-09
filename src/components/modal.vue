<template>
  <div class="modal" :id="'lns_' + modelId" v-if="props.showModal.bool">
       <n-modal
            v-model:show="props.showModal.bool"
            class="custom-card xl:w-100 xx:w-80 xs:w-90"
            preset="card"
            title="Images"
            :bordered="false"
            size="huge"
            :segmented="segmented"
        >
            <div class="content min-h-64 overflow-y-scroll" v-if="InfoAll">
                <div class="images xl:flex-row xx:flex xx:justify-center xx:flex-col xx:items-center xs:flex xs:justify-center xs:flex-col xs:items-center my-2 xl:flex xl:justify-start xl:flex-wrap" v-if="InfoAll.Images.length > 0">
                    <div class="img p-1" v-for="(item,index) in InfoAll.Images" :key="item.Id">
                        <img @click="Images(index)" class="xl:w-56 xl:h-56 xx:w-60 xx:h-60" :src="FILE_URL + 'images/' + item.url" alt="rasm">
                    </div>
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

<style>

</style>