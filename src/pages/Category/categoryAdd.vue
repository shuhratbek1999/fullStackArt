<template>
  <div class="project_add flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
             <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
             <div class="pro_all w-11/12 mx-auto rounded-md flex items-center justify-around my-4 border-2 h-80">
                 <div class="category_name w-5/12 h-56">
                    <div class="item">
                      <label class="mb-4 inline-block" for="">Page Name</label>
                      <n-select 
                        id="select" 
                        size="large" 
                        v-model:value="page_id" 
                        :options="Pages" 
                        @update:value="selectPage"
                        label-field="name"
                        value-field="id"
                        filterable
                        clearable
                        />
                      <span class="text-red-700" v-if="Errors !== null">
                        <!-- {{Errors.name.required.$response}} -->
                          <span v-if="!Errors.name.required.$response">
                                page is required
                          </span>
                      </span>
                    </div>
                     <div class="item">
                        <label class="mb-4 inline-block" for="">Page title</label>
                        <n-input v-model:value="title" size="large"  type="text" placeholder="title is required" />
                     </div>
                     <!-- <div class="item" v-if="selectPages == 'Live Arts'">
                        <label class="mb-4 inline-block" for="">Music</label>
                        <n-input v-model:value="music_type" size="large"  type="text" placeholder="music is required" />
                     </div> -->
                    <div class="buttons mt-4">
                      <n-button @click="Saqlash" type="success" class="bg-blue-500 mt-10">Save</n-button>
                      <n-button @click="Cancel" type="error" class="bg-red-500 mt-10 ml-4">Cancel</n-button>
                    </div>
                 </div>
                  <div class="category_name w-5/12 flex">
                      <div>
                        <label class="mb-4 inline-block" for="name">page image</label>
                          <n-upload
                          v-model:file-list="img"
                          list-type="image-card"
                          :max=1
                          >
                              Click to Upload
                          </n-upload>
                      </div>
                      <div class="ml-4">
                        <div class="check mb-2">
                          <n-checkbox
                            v-if="route.params.id"
                            size="large"
                            label="update image"
                            v-model:checked="change_image"
                          />
                        </div>
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
        </div>
  </div>
</template>

<script setup>
import {onMounted, ref, h, reactive, computed, inject} from "vue"
import {useVuelidate} from "@vuelidate/core"
import {required, minLength} from "@vuelidate/validators"
import {useRouter, useRoute} from "vue-router"
import {NButton,NIcon, useDialog, useMessage} from "naive-ui"
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
const FILE_URL = inject("FILE_URL");
import axios from 'axios'
const router = useRouter()
const route = useRoute()
const dialog = useDialog()
const message = useMessage()
const sidebarOpen = ref(false)
const change_image = ref(false)
const Add = () => {
  router.push('/category_add')
}
const Cancel = () =>{
  router.push('/category_all')
}
const Pages = ref([])
let selectPages = ref("")
let page_id = ref(null),
img = ref([]),
title = ref(""),
image = ref(null),
music_type = ref("")
let Errors = ref(null)
const rules = computed(() => (
  {
    page_id: {
      required
    }
  }
))
const v$ = useVuelidate(rules, {page_id});
const Saqlash = () => {
  let fileDate = new FormData()
  fileDate.append('page_id', page_id.value)
  fileDate.append('title', title.value)
  fileDate.append('music_type', music_type.value)
  for(let key of img.value){
    fileDate.append('cat_img', key.file)
  }
    if(v$.value.$invalid){
      Errors = v$.value
    }
    else{
      if(route.name == 'CategoryAdd'){
        axios.post('category/create', fileDate, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
         if(!res.data.error){
            message.success(`${res.data.message}`)
            setTimeout(() => {
               router.push('/category_all')
            }, 1000)
         }
         else{
            message.error(`${res.data.message}`)
         }
      })
      }
      else{
        fileDate.append('change_image', change_image.value)
        axios.patch('category/update/' + route.params.id, fileDate, {
            headers:{
              'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            if(!res.data.error){
            message.success(`${res.data.message}`)
            setTimeout(() => {
               router.push('/category_all')
            }, 1000)
         }
         else{
            message.error(`${res.data.message}`)
         }
        })
      }
    }
}
const selectPage = (id) => {
   let onePage = Pages.value.filter(x => x.id == id)
   selectPages.value = onePage[0].name
}
const AllPage = () => {
    axios.get('page/all')
    .then(res => {
       if(!res.data.error){
         Pages.value = res.data.data
       }
    })
}
const OneCategory = () => {
   axios.get('category/one/' + route.params.id)
   .then(res => {
      if(res){
        page_id.value = res.data.data.page_id
        title.value = res.data.data.title
        music_type.value = res.data.data.music_type
        selectPages.value = res.data.data.page.name
        image = FILE_URL + "images/" + res.data.data.img
      }
   })
}
onMounted(() => {
  if(route.name != 'CategoryAdd'){
    OneCategory()
  }
  AllPage()
})
</script>

<style scoped>
.error{
  outline: 1px solid red;
}
</style>