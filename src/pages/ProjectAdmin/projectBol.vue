<template>
    <div class="project_bol w-full min-h-screen flex flex-col">
        <div class="item form_top w-11/12 xl:flex xl:justify-between xl:my-3">
        <div class="selec xl:w-5/12">
            <label class="mb-2 inline-block" for="select">име</label>
            <n-input id="name" size="large" v-model:value="data.name" type="text" placeholder="името е задължително" />
        </div>
        <div class="input xl:w-5/12" v-if="Selected != 'About us'">
            <label class="mb-2 inline-block" for="name">афтор</label>
            <n-input id="name" size="large" v-model:value="data.aftor_name" type="text" placeholder="името е задължително" />
        </div>
        </div>
        <div class="item form_top w-11/12 xl:flex xl:justify-between xl:my-3">
            <div class="selec xl:w-5/12">
                <label class="mb-2 inline-block" for="select">описание</label>
                <n-input id="name" size="large"  v-model:value="data.description" type="textarea" placeholder="името е задължително" />
            </div>
            <div class="input xl:w-5/12" v-if="Selected != 'About us'">
                <label class="mb-2 inline-block" for="name">картс</label>
                <n-input id="name" size="large" v-model:value="data.cart" type="text" placeholder="името е задължително" />
            </div>
            <div class="input xl:w-5/12" v-else>
                <label class="mb-2 inline-block" for="name">допълнително описание</label>
                <n-input id="name" size="large" v-model:value="data.extra_description" type="textarea" placeholder="името е задължително" />
            </div>
        </div>
        <div class="form_top flex flex-col justify-center my-3" v-if="Selected != 'About us'">
            <div class="urls_content flex justify-between items-center bg-gray-400 p-4 rounded-tr-lg rounded-bl-lg text-white">
            <label class="mb-2 inline-block text-2xl font-sans" for="name">факт</label>
            <div class="button_fact rounded">
                <n-button @click="FactAdd" type="success" class="bg-blue-700 rounded-md">
                    Add
                </n-button>
            </div>
            </div>
            <div class="selec xl:w-10/12">
                <div class="facts my-3 flex justify-between items-center" v-for="(item,index) in data.Factss" :key="index">
                    <n-input class="xl:w-10/12" id="name" size="large" v-model:value="item.text" type="textarea" />
                    <div class="w-11 h-11 bg-white rounded-full flex justify-center items-center ml-4">
                        <n-icon class="cursor-pointer" size="20" @click="DeleteFact(index)">
                            <TrashAltRegular />
                        </n-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="form_top flex flex-col my-3">
        <div class="urls_content flex justify-between items-center rounded-tr-lg rounded-bl-lg bg-gray-400 p-4 text-white">
            <label class="mb-2 inline-block text-2xl" for="name">URL адреси</label>
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
            <div class="facts my-3 flex justify-between items-center" v-for="(item,index) in data.Urlss" :key="index">
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
    </div>
</template>

<script setup>
import {ref,watch, watchEffect,computed} from "vue"
import {TrashAltRegular} from "@vicons/fa"
const emit = defineEmits(['projectbol'])
const props = defineProps({
    ProjectBol:{
        type: Array,
        required: true
    },
    selectCategory:{
        type: String,
        required: true
    }
})
let data = ref({
    name: "",
    aftor_name: "",
    cart: "",
    description: "",
    extra_description: "",
    lang: "bol",
    Factss: [],
    Urlss: []
})
const Logos = ref([
    {
        id: 1,
        name: "instagramm"
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
const UrlAdd = () => {
    let url = {
        name: "",
        link: "",
        type: "instagramm",
        color: "black"
    }
    data.value.Urlss.push(url)
}
const FactAdd = () => {
    let texts = {
        text: ""
    }
    data.value.Factss.push(texts)
}
const DeleteUrl = (index) => {
     data.value.Urlss.splice(index, 1)
}
const DeleteFact = (index) => {
   data.value.Factss.splice(index, 1)
}
const ProEmit = () => {
    emit('projectbol', data.value)
}
const Selected = computed(() => props.selectCategory)
watch(() => data.value.description, () => {
       ProEmit()
})
watch(() => data.value.cart, () => {
       ProEmit()
})
watchEffect(() => {
    if(props.ProjectBol[0]){
        data.value = props.ProjectBol[0]
    }
})
</script>