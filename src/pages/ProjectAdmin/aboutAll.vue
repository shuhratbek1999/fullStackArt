<template>
   <div class="project_add flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div class="rights relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
              <div class="search my-4 w-12/12 flex justify-end">
                <n-input 
                  style="width: 390px !important" 
                  type="text" 
                  class="w-60 mr-16" 
                  clearable
                  placeholder="searching..."
                  v-model:value="search"
                  @input="Filtered"
                />
              </div>
            <div class="pro_all w-full flex flex-col items-center my-4">
                <div class="tables w-11/12">
                    <n-data-table
                    :single-line="false"
                    :columns="columns"
                    :data="filterArray(search,Projects)"
                    :pagination="pagination"
                />
                </div>
            <div class="buttons w-10/12">
                <div @click="Add" class="w-12 h-12 cursor-pointer text-white flex justify-center items-center rounded-full bg-blue-600">
                     <n-icon size="20">
                        <Add12Filled />
                     </n-icon>
                 </div>
            </div>
            </div>
        </div>
   </div>
</template>

<script setup>
import {onMounted, ref, h } from "vue"
import {useRouter, useRoute} from "vue-router"
import {NButton,NIcon, useDialog, useMessage} from "naive-ui"
import {Pencil, Trash} from "@vicons/ionicons5"
import {Add12Filled} from "@vicons/fluent"
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import axios from 'axios'
const router = useRouter()
const route = useRoute()
const dialog = useDialog()
const message = useMessage()
const sidebarOpen = ref(false)
const Projects = ref([])
let search = ref("")
const columns = ref([
    {
        title: "#",
        key: "no",
        width: 50,
        render: (_, index) => {
        return index + 1;
    },
    },
    {
        title: "name",
        key: "name",
    },
    {
        title: "Action",
        key: "actions",
        align: "center",
        width: 150,
        render(row) {
      return [
        h(
          NButton,
          {
            size: "small",
            type: "primary",
            style: {
              height: "35px",
              backgroundColor: "green"
            },
            onClick: (e) => {
              router.push({name: 'ProjectUpdate', params:{id: `${row.id}`}})
            },
          },
          {
            icon: () =>
              h(NIcon, {
                component: Pencil,
              }),
          }
        ),
        h(
          NButton,
          {
            size: "small",
            type: "error",
            style: {
              height: "35px",
              marginLeft: "10px",
              backgroundColor: "red"
            },
            onClick: (e) => {
              dialog.warning({
                title: "Ogohlantirish",
                content: "Ma'lumot o'chirilsinmi",
                positiveText: "O'chirish",
                negativeText: "Bekor qilish",
                class: 'bg-gray-100',
                onPositiveClick: () => {
                     message.success(`${row.id}`)
                  axios.delete("project/delete/" + row.id).then((res) => {
                    if (res) {
                      allProject();
                    }
                  });
                  message.success("O'chirildi");
                },
                onNegativeClick: () => {
                  message.error("Bekor qilindi");
                },
              });
            },
          },
          {
            icon: () =>
              h(NIcon, {
                component: Trash,
              }),
          }
        ),
      ];
    },
    }
])
const pagination = ref({
  pageSize: 8,
})
const Filtered = (text) => {
    search.value = text
}
const filterArray = (text,arr) =>{
  if(text.length > 0 && arr){
    return arr.filter(x => x.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
  }
  return arr
}
const Add = () => {
    router.push('/project_add')
}

const allProject = () => {
  let names = route.name.slice(0, (route.name.length - 1))
    axios.get('category/categoryAll/' + names).then(res => {
        if(!res.error){
           if(res.data.data){
            console.log(res.data.data[0]);
             Projects.value = res.data.data[0].project
           }
        }
    })
}
onMounted(() => {
    allProject()
})
</script>

<style scoped>
button, [type='button'], [type='reset'], [type='submit'] {
    background-color: blue !important;
    background-image: none;
    color: black;
}
.n-button--warning-type{
    background-color: yellow !important;
}
</style>