<template>
  <div class="categoryAll flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
             <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
             <div class="pro_all w-full flex flex-col items-center my-4">
                <div class="tables w-11/12">
                    <n-data-table
                    :single-line="false"
                    :columns="columns"
                    :data="Categorys"
                    :pagination="pagination"
                />
                </div>
            <div class="buttons w-11/12">
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
import {useRouter} from "vue-router"
import {NButton,NIcon, useDialog, useMessage} from "naive-ui"
import {Pencil, Trash} from "@vicons/ionicons5"
import {Add12Filled} from "@vicons/fluent"
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import axios from 'axios'
const router = useRouter()
const dialog = useDialog()
const message = useMessage()
const sidebarOpen = ref(false)
const Categorys = ref([])
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
        title: "Location",
        key: "location",
    },
    {
        title: "Email",
        key: "email",
    },
     {
        title: "Meneger",
        key: "meneger",
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
               router.push({name: 'FooterUpdate', params: {id: `${row.id}`}})
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
                title: "Caution",
                content: "Delete information",
                positiveText: "Delete",
                negativeText: "Cancel",
                class: 'bg-gray-100',
                onPositiveClick: () => {
                     message.success(`${row.name}`)
                  axios.delete("footer/delete/" + row.id).then((res) => {
                    if (res) {
                      allCategory();
                    }
                  });
                  message.success("Deleted");
                },
                onNegativeClick: () => {
                  message.error("Cancel");
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
const pagination = {
  pageSize: 8,
};
const Add = () => {
    router.push('/footer_add')
}
const allCategory = () => {
    axios.get('footer/all').then(res => {
        if(!res.error){
            Categorys.value = res.data.data
        }
    })
}
onMounted(() => {
    allCategory()
})

</script>

<style scoped>

</style>