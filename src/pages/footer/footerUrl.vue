<template>
    <div class="form_top w-full flex flex-col my-3">
        <div class="urls_content flex justify-between items-center rounded-tr-lg rounded-bl-lg bg-gray-400 p-4 text-white">
            <label class="mb-2 inline-block text-2xl" for="name">URL</label>
            <div class="button_fact rounded">
                <n-button @click="UrlAdd" type="success" class="bg-blue-700 rounded-md">
                    Add
                </n-button>
            </div>
        </div>
        <div class="selec w-full mt-2">
            <div class="url_top w-full flex justify-between items-center rounded-tr-lg rounded-bl-lg bg-gray-400 p-3 text-white font-sans">
                <div class="url_h w-3/12 xl:text-xl lg:text-base md:text-sm">name</div>
                <div class="url_h w-6/12 xl:text-xl lg:text-base md:text-sm">link</div>
                <div class="url_h w-3/12 xl:text-xl lg:text-base md:text-sm">social network</div>
                <!-- <div class="url_h w-3/12"></div> -->
            </div>
            <div class="facts my-3 flex justify-between items-center" v-for="(item,index) in Urls" :key="index">
                <div class="name w-3/12">
                    <n-input class="w-56" placeholder="name is required" id="name" size="large" v-model:value="item.name" type="text" />
                </div>
                <div class="link w-6/12 mx-2">
                    <n-input class="w-40" placeholder="link is required" id="name" size="large" v-model:value="item.link" type="text" />
                </div>
                <div class="logo w-3/12">
                    <n-select 
                        id="select" 
                        size="large" 
                        v-model:value="item.type" 
                        :options="Logos" 
                        label-field="name"
                        value-field="name"
                        placeholder="select is required"
                        filterable
                        clearable
                        />
                </div>
                <div class="w-11 h-11 bg-white rounded-full flex justify-center items-center ml-3">
                    <n-icon class="cursor-pointer" size="20" @click="DeleteUrl(index)">
                        <TrashAltRegular />
                    </n-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {onMounted, ref, watch,computed, watchEffect} from "vue"
import axios from "axios"
import {TrashAltRegular} from "@vicons/fa"
import {useMessage} from "naive-ui"
import {useRouter,useRoute} from "vue-router"
const message = useMessage()
const router = useRouter()
const route = useRoute()
const emit = defineEmits(['url'])
const props = defineProps({
    Urls:{
        type: Array,
        required: true
    }
})
let Urls = ref([
    {
        name: "",
        link: "",
        type: "instagram",
        color: "footer"
    }
])
const Logos = ref([
    {
        id: 1,
        name: "instagram"
    },
    {
        id: 2,
        name: "facebook"
    },
    {
        id: 3,
        name: "you tube"
    },
    {
        id: 4,
        name: "Google"
    },
    {
        id: 5,
        name: "Twitter"
    },
])
const DeleteUrl = (index) => {
     Urls.value.splice(index,1)
}
const UrlAdd = () => {
    let url = {
        name: "",
        link: "",
        type: "instagram",
        color: "footer"
    }
 Urls.value.push(url)
}
const UrlChange = () => {
    Urls.value.forEach(item => {
        if(item.link.length > 0){
          emit('url', Urls.value)
        }
    })
}
watchEffect(() => {
    Urls.value.forEach(item => {
        if(item.link.length > 0){
            UrlChange()
        }
    })
})
watchEffect(() => {
    if(props.Urls){
        Urls.value = props.Urls
    }
})
</script>