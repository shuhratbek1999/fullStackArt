<template>
     <div class="containerss">
         <div class="login_top">
              <div class="login_about">
                  <ul>
                    <!-- <li><img src="../../assets/images/logo.png" alt=""></li> -->
                    <li class="login_title">Xush kelibsiz!</li>
                    <li class="logins" style="color: rgb(241, 194, 131)">
                        Allaqachon hisobingiz bormi? <br>
                        <span @click="Login"> Login</span>
                    </li>
                  </ul>
              </div>
              <div class="login_kirish">
                    <div class="header">Ro'yxatdan o'ting!</div>
                   <n-form ref="formRef" :model="model" :rules="rules">
                    <n-form-item label="Ism va familiya" path="name">
                    <n-input 
                        class="input" 
                        v-model:value="model.name" 
                        @keydown.enter.prevent 
                        size="large" 
                        clearable
                        />
                    </n-form-item>
                    <n-form-item label="Email" path="email">
                    <n-input 
                        class="input" 
                        v-model:value="model.email" 
                        @keydown.enter.prevent 
                        size="large" 
                        clearable
                        />
                    </n-form-item>
                    <n-form-item label="Telefon raqami" path="phone">
                    <n-input 
                        class="input" 
                        v-model:value="model.phone" 
                        @keydown.enter.prevent 
                        size="large" 
                        clearable
                        />
                    </n-form-item>
                    <n-form-item label="Fakultetingini tanlang" path="fakultet"> 
                        <n-select
                            v-model:value="model.fakultet"
                            :options="fakultets"
                            label-field="name"
                            value-field="id"
                            class="viloyat"
                            filterable
                            > </n-select>
                    </n-form-item>
                    <n-form-item label="Yo'nalishingizni tanlang" path="yonalish"> 
                        <n-select
                            v-model:value="model.yonalish"
                            :options="yonalishs"
                            label-field="name"
                            value-field="id"
                            class="viloyat"
                            filterable 
                            placeholder="yo'nalish tanlang"
                            > 
                        </n-select>
                    </n-form-item>
                    <n-form-item path="password" label="Password">
                    <n-input
                        v-model:value="model.password"
                        :type="input_type"
                        @input="handlePasswordInput"
                        @keydown.enter.prevent
                        size="large"
                        class="input input_password"
                         clearable
                    />
                     <n-icon class="eye_icon" size="20">
                    <EyeOffOutline @click="handleInput" />
                    </n-icon>
                    </n-form-item>
                    <n-form-item
                    ref="rPasswordFormItemRef"
                    first
                    path="reenteredPassword"
                    label="Parolni tasdiqlang"
                    >
                    <n-input
                        v-model:value="model.reenteredPassword"
                        :disabled="!model.password"
                        type="password"
                        @keydown.enter.prevent
                        class="input"
                    />
                    </n-form-item>
                    <n-row :gutter="[0, 24]">
                    <n-col :span="24">
                        <div style="display: flex; justify-content: center">
                            <div 
                                class="border-2 border-solid rounded-lg py-2 px-6 md:w-80 text-center bg-cyan-400 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" 
                                :disabled="model.email === null"
                                @click="handleValidateButtonClick"
                                >
                                    Kirish
                            </div>
                        </div>
                    </n-col>
                    </n-row>
                   </n-form>
                    <div class="password_remember">Parolni unitdingizmi?</div>
              </div>
         </div>
         <div class="login_footer">
              <div class="foter_name">
                  2023 © O'zMUJF
              </div>
              <div class="foter_link">
                  RTTM tomonidan ishlab chiqilgan
              </div>
         </div>
    </div>
</template>
<script setup>
import {ref} from "vue"; 
import {useMessage} from "naive-ui";
import { EyeOffOutline } from "@vicons/ionicons5";
import {useRouter} from "vue-router";
import {Register} from '../../stores/index.js'
const router = useRouter();
const formRef = ref(null);
const rPasswordFormItemRef = ref(null)
const message = useMessage();
const register = Register();
let input_type = ref("password")
let model = ref({
    name: "",
    phone: "",
    fakultet: null,
    yonalish: null,
    email: "",
    password: "",
    reenteredPassword: ""
})
const fakultets = ref([
    {id: 1, name: "Matematika"},
    {id: 2, name: "Axborot texnologiyalari"},
    {id: 3, name: "Ona tili va adabiyot"},
    {id: 4, name: "Jismoniy madaniyat"},
    {id: 5, name: "Tabiiy fanlar"}
])
const yonalishs = ref([
    {id: 1, name: "Matematika"},
    {id: 2, name: "Informatika"},
    {id: 3, name: "Ona tili va adabiyot"},
    {id: 4, name: "Jismoniy tarbiya"},
    {id: 5, name: "Mehnat"},
    {id: 6, name: "Huquqshunoslik"},
])
    let validatePasswordStartWith = (rule, value) => {
        return !!model.value.password && model.value.password.startsWith(value) && model.value.password.length >= value.length
    }
    let validatePasswordSame = (rule,value) => {
        return value === model.value.password;
    }
let rules = {
    email: [
        {required: true,
        validator(rule, value){
            // let inv = model.value.email.includes("@")
            if(!value){
                return new Error("Email is required");
            } else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w)+$/.test(model.value.email)) {
              return new Error("Email should be an integer");
            } 
            return true;
            },
        trigger: ["input", "blur"]
        }
    ],
    password: [
        {
          required: true,
          message: "Password is required"
        }
      ],
      name: [
        {
          required: true,
          message: "Name is required"
        }
      ],
      phone: [
        {
          required: true,
          message: "Phone number is required"
        }
      ],
      fakultet: [
        {
          required: true,
          message: "Fakultet is required"
        }
      ],
      yonalish: [
        {
          required: true,
          message: "Yonalish is required"
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: "Re-entered password is required",
          trigger: ["input", "blur"]
        },
        {
          validator: validatePasswordStartWith,
          message: "Password is not same as re-entered password!",
          trigger: "input"
        },
        {
          validator: validatePasswordSame,
          message: "Password is not same as re-entered password!",
          trigger: ["blur", "password-input"]
        }
      ]
}
const handlePasswordInput = () => {
    if (model.value.reenteredPassword) {
          rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
        }
}
const handleValidateButtonClick = (e)=> {
        e.preventDefault();
        formRef.value?.validate(
          (errors) => {
            if (!errors) {
              message.success("Valid");
              register.registratsiya = model.value;
              router.push('/profil')
            } else {
              message.error("Fo'rmalarni to'ldirish shart");
            }
          }
        );
      }
const handleInput = () => {
     return input_type.value === "password" ? input_type.value = "text" : input_type.value = "password"
}
const Login = () => {
     router.push("/")
}
</script>
<style scoped>
.containerss{
    width: 100%;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.login_top{
    width: 70%;
    min-height: 540px;
    background-color: rgb(235, 238, 238);
    display: flex;
}
.login_top .login_about{
    width: 33%;
    background-image: url("../../assets/images/bodyback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
}
.login_top .login_about ul{
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-evenly;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 20px 0px;
}
.login_top .login_about ul .login_title{
    color: white; 
    margin-top: -10px; 
    font-family: sans-serif;
    font-size: 25px;
}
.login_top .login_about ul .logins{
    font-size: 16px;
}
.login_top .login_about ul li span{
    display: inline;
    color: aqua;
    transition: all 0.5s ease-in-out;
}
.login_top .login_about ul li span:hover{
    color: blue;
    cursor: pointer;
}
.Kirish{
    width: 450px !important;
}
.input{
    width: 500px !important;
}
.input_password{
    width: 500px !important;
    position: relative;
}
.login_kirish{
    width: 70%;
    height: 500px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}
.eye_icon{
    position: absolute;
    right: 30px;
    top: 10px;
    cursor: pointer;
}
.header, .password_remember{
    width: 70%;
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
}
.header{
    font-size: 25px;
    font-family: sans-serif;
    color: blue;
}
.login_footer{
    width: 99%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(100, 99, 99);
}
.foter_name{
    width: 35%;
    text-align: right;
}
.foter_link{
    width: calc(100% - 35%);
    text-align: right;
    margin-right: 30px  ;
}

@media(max-width: 375px){
.containerss{
    width: 370px;
    height: 100vh;
    background: rgba(33, 33, 99, 0.915);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.login_top{
    width: 340px;
    min-height: 540px;
    background-color: rgb(235, 238, 238);
    display: flex;
}
.login_top .login_about{
    width: 110px;
    background-image: url("../../assets/images/bodyback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: cover;
}
.login_top .login_about ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-evenly;
}
.login_top .login_about ul .login_title{
    color: white; 
    margin-top: -10px; 
    font-family: sans-serif;
    font-size: 15px;
}
.login_top .login_about ul .logins{
    font-size: 12px;
}
.login_top .login_about ul li{
    text-align: center;
    margin: 20px 0px;
}
.login_top .login_about ul li span{
    display: inline;
    color: aqua;
    transition: all 0.5s ease-in-out;
}
.login_top .login_about ul li span:hover{
    color: blue;
    cursor: pointer;
}
.Kirish{
    width: 200px !important;
}
.input{
    width: 200px !important;
}
.input_password{
    width: 200px !important;
    position: relative;
}
.viloyat{
    width: 200px !important;
}
.login_kirish{
    width: 250px;
    height: 500px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    /* border: 2px solid red; */
    /* padding-left: 30px; */
}
.eye_icon{
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
}
.header, .password_remember{
    width: 150px;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
    padding: 10px 0px;
}
.header{
    font-size: 15px;
    font-family: sans-serif;
    color: blue;
}
.login_footer{
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(100, 99, 99);
}
.foter_name{
    width: 35%;
    text-align: right;
}
.foter_link{
    width: calc(100% - 35%);
    text-align: right;
    margin-right: 30px  ;
}
}
</style>