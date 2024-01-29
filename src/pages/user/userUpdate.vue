<template>
  <div class="project_add flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
             <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
             <div class="pro_all xl:w-11/12 mx-auto rounded-md xl:mt-8 xl:flex xl:items-center xl:justify-around border-2 h-80">
                 <div class="category_name xl:w-5/12 xl:h-40">
                    <label class="inline-block" for="">User name</label>
                    <n-input :class="{error: v$.$invalid}" v-model:value="name" type="text" placeholder="name is required" />
                    <span class="text-red-700" v-if="Errors !== null">
                      <!-- {{Errors.name.required.$response}} -->
                        <span v-if="!Errors.name.required.$response">
                              name is required
                        </span>
                    </span>
                    <label class="my-4 inline-block" for="">Password</label>
                    <n-input v-model:value="password" type="password" placeholder="password is required" />
                    <div class="buttons">
                      <n-button @click="Saqlash" type="success" class="bg-blue-500 mt-10">Save</n-button>
                       <n-button @click="Cancel" type="error" class="bg-red-500 mt-10 ml-4">Cancel</n-button>
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
let name = ref(""),
password = ref(""),
role = ref("Admin")
const rules = computed(() => (
  {
    name: {
      required,
      minLength: minLength(3)
    }
  }
))
let Errors = ref(null)
const v$ = useVuelidate(rules, {name});
const Cancel = () => {
    router.push('/user_all')
}
const Saqlash = () => {
    let data = {
        name: name.value,
        password: password.value,
        role: role.value
    }
    if(v$.value.$invalid){
      Errors = v$.value
    }
    else{
      if(route.name == 'UserUpdate'){
        axios.patch('user/update/' + route.params.id, data)
        .then(res => {
            if(!res.data.error){
            message.success(`${res.data.message}`)
            setTimeout(() => {
               router.push('/user_all')
            }, 1000)
         }
         else{
            message.error(`${res.data.message}`)
         }
        })
      }
    }
}
const OneUser = () => {
   axios.get('user/one/' + route.params.id)
   .then(res => {
      if(res){
        name.value = res.data.data.name
        role.value = res.data.data.role
      }
   })
}
onMounted(() => {
  if(route.name == 'UserUpdate'){
    OneUser()
  }
})
</script>

<style scoped>
.error{
  outline: 1px solid red;
}
</style>