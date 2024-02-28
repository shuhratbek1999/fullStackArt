<template>
  <div class="content w-full min-h-screen flex justify-center items-center">
        <div class="forms w-11/12 min-h-96 bg-gray-200 p-4 rounded-md shadow-lg my-4 font-Atyp">
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="select">Location</label>
                    <n-input id="name" size="large" v-model:value="data.location" type="text" placeholder="location is required" />
                </div>
                <div class="input xl:w-5/12">
                    <label class="mb-2 inline-block" for="name">Contact</label>
                    <n-input id="name" size="large" v-model:value="data.contact" type="text" placeholder="contact is required" />
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="select">Email</label>
                    <n-input id="name" size="large" v-model:value="data.email" type="text" placeholder="email is required" />
                </div>
                <div class="input xl:w-5/12">
                    <label class="mb-2 inline-block" for="name">Founders</label>
                    <n-input id="name" size="large" v-model:value="data.founders" type="text" placeholder="Founders is required" />
                </div>
            </div>
            <div class="form_top xl:flex xl:justify-between xl:my-3">
                <div class="selec xl:w-5/12">
                    <label class="mb-2 inline-block" for="select">Meneger</label>
                    <n-input id="name" size="large" v-model:value="data.meneger" type="text" placeholder="meneger is required" />
                </div>
            </div>
            <div class="form_top w-full xl:flex xl:justify-between xl:my-3">
                <FooterUrl @url="Url" :Urls="UrlsProp" />
            </div>
            <n-button @click="Saqlash" class="bg-blue-600" type="success">
                Save
            </n-button>
            <n-button @click="Cancel" type="error" class="bg-red-500 mt-10 ml-4">Cancel</n-button>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, h, reactive, computed, inject} from "vue"
import {useRouter, useRoute} from "vue-router"
import {NButton,NIcon, useDialog, useMessage} from "naive-ui"
import FooterUrl from "./footerUrl.vue"
import axios from 'axios'
const router = useRouter()
const route = useRoute()
const dialog = useDialog()
const message = useMessage()
let UrlsProp = ref([])
let data = ref({
    location: "",
    contact: "",
    email: "",
    founders: "",
    meneger: "",
    Urls: []
})
const Add = () => {
  router.push('/footer_add')
}
const Cancel = () =>{
  router.push('/footer_all')
}
const Url = (datas) => {
    data.value.Urls = datas
}
const Saqlash = () => {
   if(route.name == 'FooterAdd'){
      axios.post('footer/create',data.value)
      .then(res => {
         if(res.data){
            message.success(`${res.data.message}`)
            setTimeout(() => {
               router.push('/footer_all')
            }, 1000)
         }
      })
   }else if(route.name == 'FooterUpdate'){
    // console.log(data.value, "update");
      axios.patch('footer/update/' + route.params.id, data.value)
      .then(res => {
        if(res.data){
            data.value = {
                location: res.data.location,
                contact: res.data.contact,
                email: res.data.email,
                founders: res.data.founders,
                meneger: res.data.meneger,
                Urls: res.data.Urls
            }
            message.success(`${res.data.message}`)
            setTimeout(() => {
               router.push('/footer_all')
            }, 1000)
        }
      })
   }
}
const OneCategory = () => {
   axios.get('footer/one/' + route.params.id)
   .then(res => {
      if(res){
        data.value = {
            location: res.data.data.location,
            contact: res.data.data.contact,
            email: res.data.data.email,
            founders: res.data.data.founders,
            meneger: res.data.data.meneger,
            Urls: res.data.data.Urls
        }
        UrlsProp.value = res.data.data.Urls
      }
   })
}
onMounted(() => {
  if(route.name != 'FooterAdd'){
    OneCategory()
  }
})
</script>

<style scoped>
.error{
  outline: 1px solid red;
}
</style>