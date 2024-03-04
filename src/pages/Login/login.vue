<template>
    <div class="containers w-full xl:flex xl:h-screen xl:justify-center xl:items-center xl:flex-row xx:flex 
    xx:flex-col xx:h-100 xx:justify-center xx:items-center xs:flex xs:h-100 xs:justify-center 
    xs:items-center
    ">
        <div class="login xl:w-1/2 xx:w-full xx:h-97 xs:w-full flex xl:justify-end xx:justify-center xs:justify-center items-center xl:h-110">
            <n-form
                ref="formRef"
                :label-width="200"
                :model="data"
                :rules="rules"
                :size="size"
                class="xx:w-11/12 xs:w-11/12 xx:h-full xs:h-2/4 xl:w-10/12 xl:h-3/4 xl:flex xl:flex-col xl:items-center xl:justify-center xl:p-4 border-2 rounded-l-md
                xx:flex xx:flex-col xx:items-center xx:justify-center xs:flex xs:flex-col xs:items-center xs:justify-center
                "
                >
                <n-form-item class="w-8/12" label="Login" path="user.name">
                    <n-input v-model:value="data.login" placeholder="Input Name" />
                </n-form-item>
                <n-form-item class="w-8/12" label="Password" path="user.age">
                    <n-input
                    type="password"
                    show-password-on="mousedown"
                    placeholder="Password"
                    v-model:value="data.password"
                    />
                    <template #password-visible-icon>
                        <n-icon :size="16" :component="GlassesOutline" />
                    </template>
                </n-form-item>
                <n-form-item class="w-8/12">
                    <n-button @click="Login" type="primary" class="bg-blue-400">
                        Login
                    </n-button>
                </n-form-item>
            </n-form>
        </div>
        <div class="register w-1/2 xl:h-110 xl:flex xl:items-center xx:h-10 xs:h-10 xx:mt-4 xl:mt-0">
            <div class="w-10/12 xx:w-10/12 bg-blue-100 xl:h-3/4 rounded-r-md xl:flex xl:justify-center xl:items-center">
                <span class="text-slate-800 font-medium hover:underline hover:cursor-pointer">Forgot password or login?</span>
            </div>
        </div>
</div>
</template>
<script setup>
import {onMounted, ref} from "vue"; 
import {useMessage, useNotification} from "naive-ui";
import { GlassesOutline } from "@vicons/ionicons5";
import {useRouter} from "vue-router"
import axios from "axios"
const formRef = ref(null);
const router = useRouter();
const message = useMessage();
const notification = useNotification()
let input_type = ref("password")
let data = ref({
    login: "",
    password: ""
})
const size = ref("medium")
let rules = {
    login: [
        {required: true,
        validator(rule, value){
            if(!value){
                return new Error("Email is required");
            } 
            else{
                let tekshir = value.length > 3
                if(!tekshir){
                   return new Error("Login kamida 3 ta harfdan katta bo'lsin")
                }
            }
            },
        trigger: ["input", "blur"]
        }
    ],
    password: [
        {
          required: true,
          message: "Password is required"
        }
      ]
}
const handleValidateButtonClick = (e)=> {
    e.preventDefault();
    formRef.value?.validate(
        (errors) => {
        if (!errors) {
            message.success("Valid");
        } else {
            message.error("Fo'rmalarni to'ldirish shart");
        }
        }
    );
}
const notify = (type) => {
    notification[type]({
        content: "What to say?",
        meta: "I don't know",
        duration: 2500,
        keepAliveOnHover: true
    });
}
const Login = () => {
    axios.post('user/login', data.value).then(res => {
        if(!res.data.error){
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('user_id', res.data.data.id)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            notification.success({
                content: `request success`,
                meta: `You are registered!`,
                duration: 2500,
                keepAliveOnHover: true
            });
            setTimeout(() => {
                router.push('/category_all')
            }, 2000);
        }
        else{
            notification.error({
                content: `request error`,
                meta: `${res.data.message}`,
                duration: 2500,
                keepAliveOnHover: true
            })
        }
    })
}
</script>
<style scoped>
.containers{
    width: 100%;
}
/* .containers .login{
    width: 600px;
} */
</style>