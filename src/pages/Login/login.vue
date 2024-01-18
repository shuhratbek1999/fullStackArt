<template>
    <div class="containers w-full flex h-screen items-center justify-center">
        <div class="login w-1/2 flex justify-end">
            <n-form
                ref="formRef"
                :label-width="200"
                :model="model"
                :rules="rules"
                :size="size"
                class="w-10/12 flex flex-col items-center p-4 border-2 rounded-l-md"
                >
                <n-form-item class="w-8/12" label="Login" path="user.name">
                    <n-input v-model:value="model.login" placeholder="Input Name" />
                </n-form-item>
                <n-form-item class="w-8/12" label="Password" path="user.age">
                    <n-input
                    type="password"
                    show-password-on="mousedown"
                    placeholder="Password"
                    :maxlength="8"
                    v-model:value="model.password"
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
        <div class="register w-1/2">
            <div class="w-10/12 bg-blue-100 h-72 rounded-r-md flex justify-center items-center">
                salom
            </div>
        </div>
    <!-- <n-button @click="notify('success')">
        Success
    </n-button> -->
</div>
</template>
<script setup>
import {onMounted, ref} from "vue"; 
import {useMessage, useNotification} from "naive-ui";
import { GlassesOutline } from "@vicons/ionicons5";
import {useRouter} from "vue-router"
const formRef = ref(null);
const router = useRouter();
const message = useMessage();
const notification = useNotification()
let input_type = ref("password")
let model = ref({
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
    router.push('/project')
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