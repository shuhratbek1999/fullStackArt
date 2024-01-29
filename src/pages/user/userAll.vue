<template>
   <div class="userAll flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
        <div class="rights relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
            <div class="pro_all xl:w-full xl:flex xl:flex-col xl:items-center xl:my-4">
                <div class="tables xl:w-11/12">
                    <n-data-table
                    :single-line="false"
                    :columns="columns"
                    :data="Users"
                    :pagination="pagination"
                />
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
const Users = ref([])
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
        title: "User name",
        key: "name",
    },
    {
        title: "Role",
        key: "role",
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
              router.push({name: 'UserUpdate', params:{id: `${row.id}`}})
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
                  axios.delete("user/delete/" + row.id).then((res) => {
                    if (res) {
                      allUser();
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
const pagination = {
  pageSize: 10,
};
const allUser = () => {
    axios.get('user/all').then(res => {
        if(!res.error){
            Users.value = res.data.data
        }
    })
}
onMounted(() => {
    allUser()
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