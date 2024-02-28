<template>
    <div class="content w-full min-h-screen flex justify-center items-center">
        <div class="forms w-11/12 min-h-96 bg-gray-200 p-4 rounded-md shadow-lg my-4 font-Atyp">
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
            <div class="form_top xl:flex xl:justify-between xl:my-3" v-if="selectCategory !== 'About us'">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="name">Aftor name</label>
                    <n-input id="name" size="large" v-model:value="data.aftor_name" type="text" placeholder="aftor name is required" />
                </div>
                <div class="input xl:w-5/12 md:w-10/12 lg:w-10/12 flex items-center">
                 <div class="imagess w-4/12">
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
                      label="Update img"
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
            <div class="form_top xl:flex xl:justify-between xl:my-10">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="name">Description</label>
                    <n-input id="name" class="rounded" size="large" v-model:value="data.description" type="textarea" />
                </div>
                <div class="extraa xl:w-5/12 lg:w-full md:w-full flex xl:justify-around md:justify-between lg:justify-between" v-if="selectCategory !== 'About us'">
                <div class="selec mr-10">
                    <label class="mb-2 inline-block" for="name">Cart</label>
                    <n-input id="name" class="rounded" size="large" v-model:value="data.cart" type="text" />
                </div>
                <div class="input">
                    <label class="mb-2 inline-block" for="name">date time</label>
                     <n-date-picker
                        v-model:value="data.date_time"
                        value-format="yyyy-MM-dd"
                        type="date"
                        size="large"
                        clearable
                        placeholder="Select a start date"
                        style="width: 250px"
                        :on-update:value="change2"
                    />
                </div> 
                </div>
                <div class="extra_text w-5/12" v-else>
                    <label class="mb-2 inline-block" for="name">extra text</label>
                    <n-input id="name" class="rounded" size="large" v-model:value="data.extra_description" type="textarea" />
                </div>
            </div>
            <div class="form_top flex flex-col justify-center my-3">
                <div class="urls_content flex justify-between items-center bg-gray-400 p-4 rounded-tr-lg rounded-bl-lg text-white">
                    <label class="mb-2 inline-block text-2xl font-sans" for="name">Fact</label>
                    <div class="button_fact rounded">
                        <n-button @click="FactAdd" type="success" class="bg-blue-700 rounded-md">
                            Add
                        </n-button>
                    </div>
                </div>
                <div class="selec xl:w-10/12">
                    <div class="facts my-3 flex justify-between items-center" v-for="(item,index) in data.Facts" :key="index">
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
                    <label class="mb-2 inline-block text-2xl" for="name">Urls</label>
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
                    <div class="facts my-3 flex justify-between items-center" v-for="(item,index) in data.Urls" :key="index">
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
                                @update:value="SelectLogos"
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
            <ProjectBol @projectbol="projectbol" :ProjectBol="data.ProjectBols" :selectCategory="selectCategory" />
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-11/12">
                    <label class="mb-2 inline-block text-2xl font-bold" for="name">Images</label>
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
            <div class="form_top xl:flex xl:justify-center xl:my-3">
                
            </div>
            <n-button @click="Saqlash" class="bg-blue-600" type="success">
                Save
            </n-button>
            <n-button @click="Cancel" type="error" class="bg-red-500 mt-10 ml-4">Cancel</n-button>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, inject,computed} from "vue"
import ProjectBol from "./projectBol.vue"
import axios from "axios"
import {TrashAltRegular} from "@vicons/fa"
import {useMessage} from "naive-ui"
import {useRouter,useRoute} from "vue-router"
const user_id = localStorage.getItem('user_id')
const FILE_URL = inject("FILE_URL");
const message = useMessage()
const router = useRouter()
const route = useRoute()
let change_image = ref(false)
let image = ref(null)
let Music_type = ref("")
const Category = ref([])
const fileList = ref([])
const selectCategory = ref("")
let data = ref({
    category_id: null,
    date_time: null,
    cart: "",
    name: "",
    aftor_name: "",
    aftor_img: [],
    description: "",
    extra_description: "",
    user_id: user_id,
    Images: [],
    Facts: [],
    Urls: [],
    ProjectBols: []
})
const projectbol = (datas) => {
    data.value.ProjectBols.push(datas)
}
const SelectUpdate = (id) => {
    let index = Category.value.findIndex(ids => ids.id == id)
    selectCategory.value = Category.value[index].name
    Music_type.value = Category.value[index].music_type
}
const SelectLogos = (e) => {
    console.log(e);
}
const change2 = (e) => {
    data.value.date_time = e
};
const Saqlash = () => {
    let formData = new FormData()
    if(selectCategory == 'About us'){
        formData.append("name", "About")
    }
    else{
        formData.append("name", data.value.name)
    }
    formData.append("category_id", data.value.category_id)
    formData.append("date_time", data.value.date_time)
    formData.append("cart", data.value.cart)
    formData.append("aftor_name", data.value.aftor_name)
    formData.append("description", data.value.description)
    formData.append("extra_description", data.value.extra_description)
    formData.append("user_id", data.value.user_id)
    formData.append("Facts", JSON.stringify(data.value.Facts))
    formData.append("Urls", JSON.stringify(data.value.Urls))
    formData.append("ProjectBols", JSON.stringify(data.value.ProjectBols))
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
                message.error(`error`)
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
                message.error(`error`)
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
const DeleteUrl = (index) => {
     data.value.Urls.splice(index, 1)
}
const UrlAdd = () => {
    let url = {
        name: "",
        link: "",
        type: "instagramm",
        color: "black"
    }
    data.value.Urls.push(url)
}
const Colors = ref([
    {
        id: 1,
        name: 'black'
    },
    {
        id: 2,
        name: 'white'
    },
    {
        id: 3,
        name: 'red'
    },
    {
        id: 4,
        name: 'blue'
    },
])
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
const DeleteFact = (index) => {
   data.value.Facts.splice(index, 1)
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
    image = FILE_URL + 'images/' + model.aftor_img
    model.date_time = model.date_time * 1000
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
        Urls: model.Url,
        cart: model.cart,
        date_time: model.date_time,
        ProjectBols: model.ProjectBols
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