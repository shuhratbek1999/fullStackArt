<template>
    <div class="elon">
         <n-carousel autoplay>
            <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div 
                    class="news_text border-2 border-solid md:py-2 rounded-lg px-6 md:w-50 text-center bg-cyan-400 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" 
                    >
                    {{item.button}}
                </div>
             </div>
        </div>
        <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div 
                    class="news_text border-2 border-solid md:py-2 rounded-lg px-6 md:w-50 text-center bg-cyan-400 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" 
                    >
                    {{item.button}}
                </div>
             </div>
        </div>
        <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div 
                    class="news_text border-2 border-solid md:py-2 rounded-lg px-6 md:w-50 text-center bg-cyan-400 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" 
                    >
                    {{item.button}}
                </div>
             </div>
        </div>
        <div class="elon_content">
            <!-- <img src="../assets/images/photo.jpg" alt=""> -->
             <div class="elon_list" v-for="(item, index) in elonlar" :key="index">
                <!-- {{item.img}} -->
                 <div class="news_img"><img :src="item.img" width="250" alt=""></div>
                 <div class="news_title">{{item.title}}</div>
                 <div 
                    class="news_text border-2 border-solid rounded-lg md:py-2 px-6 md:w-50 text-center bg-cyan-400 text-white shadow hover:shadow-lg cursor-pointer tahrirlash" 
                    >
                    {{item.button}}
                </div>
             </div>
        </div>
        </n-carousel>
    </div>
</template>

<script setup>
import {ref} from "vue";
import News1 from "../assets/images/bobur-10.jpg";
import News2 from "../assets/images/NAVRUZBEK.jpg";
import News3 from "../assets/images/photo.png";
import News4 from "../assets/images/photo.jpg";
const elonlar = ref([
    {
        id: 1, 
        img:  News1, 
        title: "Zahiriddin Muhammad Bobur ilmiy-ijodiy merosining jahon adabiyoti, ilm-fani va davlatchiligi tarixida tutgan o‘rni",
        button: "Batafsil"
    },
    {
        id: 2, 
        img: News2, 
        title: "Aziz talabalar! Siz uchun yana bir bor Xalqaro konferensiyada ishtirok etish uchun imkoniyat!",
        button: "Batafsil"
    },
    {
        id: 3, 
        img: News3, 
        title: "Tadqiqotchilik va kreativ sa’y-harakatlarni qo‘llaymiz",
        button: "Batafsil"
    },
    {
        id: 4, 
        img: News4, 
        title: "Zahiriddin Muhammad Bobur ilmiy-ijodiy merosining jahon adabiyoti, ilm-fani va davlatchiligi tarixida tutgan o‘rni",
        button: "Batafsil"
    },
])
</script>
<style scoped>
.elon{
    width: 100%;
    height: 500px;
    background-color: #F7F8F9;
    /* border: 2px solid red; */
}

.elon_content{
    width: 90%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-wrap: wrap;
    /* border: 2px solid red; */
    margin: 0 auto;
}
.elon_content .elon_list{
    /* border: 2px solid red; */
    width: 23.5%;
    height: 400px;
    /* background-color: rgba(201, 197, 197, 0.4); */
    margin: 5px 9px;
    padding: 10px;
    box-shadow: 0px 0px 10px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
    /* text-align: center; */
}
/* .elon_content .elon_list:hover{
    transform: scale(0.95,1.04);
} */
.elon_list .news_img{
    display: flex;
    justify-content: center;
    /* text-align: center; */
    /* border: 2px solid red; */
    /* height: 200px; */
}
.elon_list .news_img img{
    height: 180px;
}
.elon_list .news_title{
    font-size: 16px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
     /* border: 2px solid red; */
     min-height: 120px;
    /* font-style: */
}
.elon_list .news_text .btn{
    width: 280px;
    text-indent: 20px;
    font-size: 12px;
    font-family: sans-serif;
}
@media(max-width: 375px){
.elon{
    width: 360px;
    height: 700px;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* background-color: grey; */
}

.elon_content{
    width: 360px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-wrap: wrap;
    /* border: 2px solid red; */
}
.elon_content .elon_list{
    /* border: 2px solid rgb(201, 197, 197); */
    width: 150px;
    height: 300px;
    background-color: rgba(201, 197, 197, 0.4);
    margin: 5px;
    padding: 10px;
    box-shadow: 0px 0px 10px grey;
    transition: all 0.9s ease-in-out;
    cursor: pointer;
    border-radius: 5px;
}
.elon_content .elon_list:hover{
    transform: scale(0.95,1.04);
}
.elon_list .news_img{
    text-align: center;
    /* height: 200px; */
}
.elon_list .news_img img{
    height: 100px;
}
.elon_list .news_title{
    font-size: 10px;
    padding: 10px 0px;
    font-weight: 600;
    font-family: sans-serif;
    /* font-style: */
}
.elon_list .news_text{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-indent: 0px;
    font-size: 12px;
    font-family: sans-serif;
    padding: 0px;
}
.elon_list .news_text{
    width: 100%;
    /* height: 30px; */
    /* line-height: 30px; */
    display: flex;
    justify-content: center;
    /* border: 4px solid red; */
}
}
</style>