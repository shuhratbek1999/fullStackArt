<template>
    <div class="content xl:w-full xl:min-h-screen xl:flex xl:justify-center xl:items-center">
        <div class="forms xl:w-11/12 xl:min-h-96 xl:bg-gray-200 xl:p-4">
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="select">Category</label>
                    <n-select 
                      id="select" 
                      size="large" 
                      v-model:value="data.category_id" 
                      :options="Category" 
                      @update:value="SelectUpdate"
                      label-field="name"
                      value-field="id"
                      filterable
                      clearable
                      />
                </div>
                <div class="input xl:w-5/12">
                    <label class="mb-2 inline-block" for="name">Name</label>
                    <n-input id="name" size="large" v-model:value="data.name" type="text" placeholder="name is required" />
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-between xl:my-3" v-if="selectCategory == 'Projects'">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="name">Aftor name</label>
                    <n-input id="name" size="large" v-model:value="data.aftor_name" type="text" placeholder="aftor name is required" />
                </div>
                <div class="input xl:w-5/12 xl:flex xl:items-center">
                 <div class="imagess xl:w-4/12">
                    <label class="mb-2 inline-block" for="name">aftor images</label>
                    <n-upload
                    v-model:file-list="data.aftor_img"
                    list-type="image-card"
                    :max=1
                    >
                    Click to Upload
                    </n-upload>
                 </div>
                 <div class="upload_img xl:w-4/12">
                    <n-checkbox
                      v-if="route.params.id"
                      size="large"
                      label="Rasmni yangilash"
                      v-model:checked="change_image"
                      class="mr-4"
                    />
                    <n-avatar
                      v-if="route.params.id"
                      :src="image"
                      style="
                        border: 1px solid #dcdcdc;
                        width: 96px;
                        position: absolute;
                        height: 96px;
                      "
                    />
                 </div>
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-5/12" v-if="selectCategory == 'Projects'">
                    <label class="mb-2 inline-block" for="name">Description</label>
                    <n-input id="name" size="large" v-model:value="data.description" type="textarea" />
                </div>
                <div class="selec xl:w-11/12" v-else>
                    <label class="mb-2 inline-block" for="name">Text</label>
                    <n-input id="name" size="large" v-model:value="data.description" type="textarea" />
                </div>
                <div class="input xl:w-5/12" v-if="selectCategory == 'Projects'">
                    <label class="mb-2 inline-block" for="name">Extra Description</label>
                    <n-input id="name" size="large" v-model:value="data.extra_description" type="textarea" />
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-between xl:my-3" v-if="selectCategory == 'Projects'">
                <div class="selec xl:w-10/12">
                        <label class="mb-2 inline-block" for="name">Facts</label>
                    <div class="facts xl:my-3 xl:flex xl:justify-between xl:items-center" v-for="(item,index) in data.Facts" :key="index">
                        <n-input class="xl:w-11/12" id="name" size="large" v-model:value="item.text" type="textarea" />
                        <div class="w-11 h-11 bg-white rounded-full flex justify-center items-center xl:ml-4">
                            <n-icon class="cursor-pointer" size="20" @click="DeleteFact(index)">
                                <TrashAltRegular />
                            </n-icon>
                        </div>
                    </div>
                </div>
                <div class="button_fact xl:w-1/12 xl:mt-4 rounded">
                    <n-button @click="FactAdd" type="success" class="xl:bg-blue-700">
                        Add
                    </n-button>
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-11/12">
                    <label class="mb-2 inline-block" for="name">Images</label>
                    <n-upload
                    v-model:file-list="data.Images"
                    list-type="image-card"
                    :max=15
                    >
                        Click to Upload 
                    </n-upload>
                    <!-- <div class="delete absolute top-0 left-0">{{data.Images}}</div> -->
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-center xl:my-3" v-if="selectCategory == 'Projects'">
                <div class="selec xl:w-full xl:flex xl:justify-between xl:flex-wrap">
                    <div class="insta xl:w-5/12">
                    <n-checkbox size="large" class="xl:mb-4" v-model:checked="insta">
                        Instagramm 
                    </n-checkbox>
                    <n-input v-if="insta" id="name" size="large" v-model:value="insta_url" type="text" />
                    </div>
                    <div class="insta xl:w-5/12">
                    <n-checkbox size="large" class="xl:mb-4" v-model:checked="facebook">
                        Facebook
                    </n-checkbox>
                    <n-input v-if="facebook" id="name" size="large" v-model:value="facebook_url" type="text" />
                    </div>
                    <div class="insta xl:w-5/12 xl:mt-4">
                    <n-checkbox size="large" class="xl:mb-4" v-model:checked="you">
                        You tube
                    </n-checkbox>
                    <n-input v-if="you" id="name" size="large" v-model:value="you_tube_url" type="text" />
                    </div>
                    <div class="insta xl:w-5/12 xl:mt-4">
                    <n-checkbox size="large" class="xl:mb-4" v-model:checked="sayt">
                        web sayt
                    </n-checkbox>
                    <n-input v-if="sayt" id="name" size="large" v-model:value="sayt_url" type="text" />
                    </div>
                </div>
            </div>
            <n-button @click="Saqlash" class="xl:bg-blue-600" type="success">
                Save
            </n-button>
            <n-button @click="Cancel" type="error" class="bg-red-500 mt-10 ml-4">Cancel</n-button>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, inject,computed} from "vue"
import axios from "axios"
import {TrashAltRegular} from "@vicons/fa"
import {useMessage} from "naive-ui"
import {useRouter,useRoute} from "vue-router"
const user_id = localStorage.getItem('user_id')
const FILE_URL = inject("FILE_URL");
const message = useMessage()
const router = useRouter()
const route = useRoute()
let insta_url = ref(""),
facebook_url = ref(""),
you_tube_url = ref(""),
sayt_url = ref("")
let insta = ref(false),facebook = ref(false),you = ref(false),
sayt = ref(false);
let change_image = ref(false)
let image = ref(null)
const Category = ref([])
const fileList = ref([])
const selectCategory = ref("")
let data = ref({
    category_id: null,
    name: "",
    aftor_name: "",
    aftor_img: [],
    description: "",
    extra_description: "",
    user_id: user_id,
    Images: [],
    Facts: [],
    Urls: [
        {
            insta_url: insta_url.value,
            facebook_url: facebook_url.value,
            you_tube_url: you_tube_url.value,
            sayt_url: sayt_url.value
        }
    ]
})
const SelectUpdate = (id) => {
    let index = Category.value.findIndex(ids => ids.id == id)
    selectCategory.value = Category.value[index].name
    // console.log(Category.value[index])
}
const Saqlash = () => {
    data.value.Urls.forEach(item => {
        item.insta_url = insta_url.value
        item.facebook_url = facebook_url.value
        item.you_tube_url = you_tube_url.value
        item.sayt_url = sayt_url.value
    })
    let formData = new FormData()
    formData.append("name", data.value.name)
    formData.append("category_id", data.value.category_id)
    formData.append("aftor_name", data.value.aftor_name)
    formData.append("description", data.value.description)
    formData.append("extra_description", data.value.extra_description)
    formData.append("user_id", data.value.user_id)
    formData.append("Facts", JSON.stringify(data.value.Facts))
    formData.append("Urls", JSON.stringify(data.value.Urls))
    for (let i = 0; i < data.value.Images.length; i++) {
        formData.append(`images`, data.value.Images[i].file);
    }
     for (let i = 0; i < data.value.aftor_img.length; i++) {
        formData.append("project_img", data.value.aftor_img[i].file);
    }
      if(route.name == 'ProjectAdd'){
        axios.post('project/create', formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            if(!res.data.error){
                message.success(`${res.data.message}`)
                setTimeout(() => {
                    router.push('/project_all')
                }, 2000);
            }else{
                message.error(`dasturda xatolik`)
            }
        })
      }else{
        formData.append('change_img', change_image.value)
        axios.patch('project/update/' + route.params.id, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
           if(!res.data.error){
                message.success(`${res.data.message}`)
                setTimeout(() => {
                    router.push('/project_all')
                }, 2000);
            }else{
                message.error(`dasturda xatolik`)
            } 
        })
      }
}
const FactAdd = () => {
    let texts = {
        text: ""
    }
    data.value.Facts.push(texts)
}
const DeleteFact = (index) => {
   data.value.Facts = data.value.Facts.splice(index, 1)
}
const ProjectOne = () => {
    axios.get('project/one/' + route.params.id)
    .then(res => {
        if(!res.data.error){
            for(let key of res.data.data.Images){
                key.url = FILE_URL + 'images/' + key.url
            }
            UpdateProject(res.data.data)
        }
    })
}
const UpdateProject = (model) => {
    if(model.Url.length > 0){
        if(model.Url[0].insta_url.length > 0){
            insta.value = true
        }else if(model.Url[0].facebook_url.length > 0){
            facebook.value = true
        }
        else if(model.Url[0].you_tube_url.length > 0){
            you.value = true
        }
        else if(model.Url[0].sayt_url.length > 0){
            sayt.value = true
        }
    }
    image = FILE_URL + 'images/' + model.aftor_img
    data.value = {
        category_id: model.category_id,
        name: model.name,
        aftor_name: model.aftor_name,
        aftor_img: [],
        description: model.description,
        extra_description: model.extra_description,
        user_id: model.user_id,
        Images: model.Images,
        Facts: model.Fact,
        Urls: model.Url 
    }
    selectCategory.value = model.category.page.name
}
const Cancel = () => {
    router.push('/project_all')
}
const Categorys = () => {
    axios.get('category/alls').then(res => {
        if(!res.error){
           Category.value = res.data.data
        }
    })
}
onMounted(() => {
    Categorys()
    if(route.name != 'ProjectAdd'){
        ProjectOne()
    }
})
</script>

<style scoped>
label{
    font-family: 'Times New Roman', Times, serif;
}
</style>