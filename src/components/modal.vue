<template>
  <div class="modal">
    <n-button @click="showModal = true">
            Start Me up
        </n-button>
        <n-modal
            v-model:show="showModal"
            :mask-closable="false"
            preset="dialog"
            title="Dialog"
            content="Are you sure?"
            class="text-black"
        >
        <template #action>
            <n-button @click="onPositiveClick" type="primary" class="bg-blue-500">Confirm</n-button>
            <n-button @click="onNegativeClick" class="bg-red-500 text-white rounded">Cancel</n-button>
        </template>
        </n-modal>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useMessage} from "naive-ui"
const showModal = ref(false)
const message = useMessage()
const onPositiveClick = () => {
    message.success("submit")
    showModal.value = false
}
const onNegativeClick = () => {
    message.success("cancel")
    showModal.value = false
}
</script>

<style>

</style>