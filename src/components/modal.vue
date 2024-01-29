<template>
  <div class="modal" :id="'lns_' + modelId" v-if="props.showModal.bool">
       <n-modal
            v-model:show="props.showModal.bool"
            class="custom-card"
            preset="card"
            :style="bodyStyle"
            title="Images"
            :bordered="false"
            size="huge"
            :segmented="segmented"
        >
            <div class="content xl:min-h-64 overflow-y-scroll" v-if="InfoAll">
                <div class="images xl:my-2 xl:flex xl:justify-start xl:flex-wrap" v-if="InfoAll.Images.length > 0">
                    <div class="img p-1" v-for="item in InfoAll.Images" :key="item.Id">
                        <img class="w-56 h-56" :src="FILE_URL + 'images/' + item.url" alt="rasm">
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
const bodyStyle = ref({
    width: '1050px'
})
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