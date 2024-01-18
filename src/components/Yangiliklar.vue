<template>
    <div class="tanlov">
        <div class="tanlov_top">
             So'nggi yangiliklar
        </div>
        <div class="tanlov_content">
             <div class="tanlov_content_about">
                 <div class="tanlov_content_about_list rounded-lg bg-white" v-for="(item,index) in Tanlov" :key="index">
                    <div class="tanlov_content_about_img">
                     <img :src="item.img" alt="" :width="imgWidth">
                    </div>
                    <div class="tanlov_content_about_text">
                        <div class="about_text indent-2.5">
                            {{item.text}}
                        </div>
                        <div 
                            class="batafsil xs:text-xs border-2 border-solid rounded-lg my-2 py-2 px-6 md:w-40 text-center bg-cyan-700 text-white shadow hover:shadow-lg cursor-pointer" 
                            >
                            Batafsil
                        </div>
                    </div>
                 </div>
             </div>
             <div class="tanlov_content_list">
                 <div class="tanlov_list" v-for="(item,index) in Tanlov" :key="index">
                      <div class="tanlov_item_img">
                          <img :src="item.img" alt="">
                      </div>
                      <div class="tanlov_item_text">
                          <div class="tanlov_item_title">Diqqat yangilik</div>
                          <div class="tanlov_date">{{item.date_time}}</div>
                      </div>
                 </div>
             </div>
        </div>
    </div>
</template>
<script setup>
import {reactive, ref} from "vue";
import tanlovImg from "../assets/images/doctor.jpg";
const imgWidth = ref("350")
const Tanlov = reactive([
    {id: 1, text: "Birlashgan Millatlar Tashkiloti Bosh Assambleyasining 2015-yil 22-dekabrdagi 70-sessiyasida 11-fevral “Ilm-fan sohasidagi ayollar va qizlar xalqaro kuni” sifatida rasman eʼlon qilingan. Ushbu munosabat bilan “O‘zbekiston olima va tadqiqotchi xotin-qizlarining innovatsion g‘oyalari” tanlovi tashkil etilmoqda. Tanlov joriy yilning yanvar-fevral oylarida 3 bosqichda va 18-30 hamda 30 yoshdan yuqori bo‘lgan yosh toifasidagi xotin-qizlar o‘rtasida",
    img: tanlovImg, date_time: "2023-02-04 10:00:21"},
    {id: 1, text: "Birlashgan Millatlar Tashkiloti Bosh Assambleyasining 2015-yil 22-dekabrdagi 70-sessiyasida 11-fevral “Ilm-fan sohasidagi ayollar va qizlar xalqaro kuni” sifatida rasman eʼlon qilingan. Ushbu munosabat bilan “O‘zbekiston olima va tadqiqotchi xotin-qizlarining innovatsion g‘oyalari” tanlovi tashkil etilmoqda. Tanlov joriy yilning yanvar-fevral oylarida 3 bosqichda va 18-30 hamda 30 yoshdan yuqori bo‘lgan yosh toifasidagi xotin-qizlar o‘rtasida",
    img: tanlovImg, date_time: "2023-02-04 10:00:21"},
    {id: 1, text: "Birlashgan Millatlar Tashkiloti Bosh Assambleyasining 2015-yil 22-dekabrdagi 70-sessiyasida 11-fevral “Ilm-fan sohasidagi ayollar va qizlar xalqaro kuni” sifatida rasman eʼlon qilingan. Ushbu munosabat bilan “O‘zbekiston olima va tadqiqotchi xotin-qizlarining innovatsion g‘oyalari” tanlovi tashkil etilmoqda. Tanlov joriy yilning yanvar-fevral oylarida 3 bosqichda va 18-30 hamda 30 yoshdan yuqori bo‘lgan yosh toifasidagi xotin-qizlar o‘rtasida",
    img: tanlovImg, date_time: "2023-02-04 10:00:21"}
])
</script>

<style scoped>
.tanlov{
    width: 100%;
    /* border: 2px solid red; */
}
.tanlov .tanlov_top{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
}
.tanlov_top_right{
    font-size: 22px;
    width: 35%;
}
.tanlov .tanlov_content{
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    margin: 30px 0px;
    /* border: 2px solid yellow; */
}
.tanlov .tanlov_content .tanlov_content_about_list{
    width: 100%;
    display: flex;
    /* border: 2px solid red; */
    margin: 10px 0px;
}
.tanlov .tanlov_content .tanlov_content_about{
    width: 65%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid blue; */
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_img{
    width: 40%;
    /* border: 2px solid red; */
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_text{
    width: 60%;
    padding: 10px 30px;
}
.tanlov_content_about_title{
    font-size: 20px;
}
.tanlov .tanlov_content .tanlov_content_list{
    width: 35%;
    height: 300px;
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    margin: 10px 0px 10px 30px;
    /* border: 2px solid black; */
}
.tanlov_content_list .tanlov_list{
    width: 250px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
}
.tanlov_list .tanlov_item_img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 10px;
}
.tanlov_list .tanlov_item_img img{
    width: 80px;
}
.tanlov_item_text .tanlov_date{
    font-size: 12px;
}

@media(max-width: 375px){
.tanlov{
    width: 370px;
    /* border: 2px solid red; */
}
.about_text{
    font-size: 8px;
}
.tanlov .tanlov_top{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
}
.tanlov .tanlov_top .tanlov_top_left{
    font-size: 10px;
    width: 60%;
    font-weight: bold;
    /* align-self: center; */
}
.tanlov_top_right{
    font-size: 10px;
    width: 30%;
    font-weight: bold;
}
.tanlov .tanlov_content{
    width: 360px;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    margin: 10px 0px;
    /* border: 2px solid yellow; */
}
.tanlov .tanlov_content .tanlov_content_about_list{
    width: 100%;
    display: flex;
    flex-direction: column;
    /* border: 2px solid red; */
    margin: 10px 0px;
}
.tanlov .tanlov_content .tanlov_content_about{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    /* border: 2px solid blue; */
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_img{
    width: 100%;
    /* border: 2px solid red; */
}
.tanlov .tanlov_content .tanlov_content_about .tanlov_content_about_text{
    width: 100%;
    padding: 10px;
}
.tanlov_content_about_title{
    font-size: 14px;
}
.tanlov .tanlov_content .tanlov_content_list{
    width: 40%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    margin: 10px 10px 10px 30px;
    /* border: 2px solid black; */
}
.tanlov_content_list .tanlov_list{
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* border: 2px solid red; */
}
.tanlov_list .tanlov_item_img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 10px;
}
.tanlov_list .tanlov_item_img img{
    width: 80px;
}
.tanlov_item_text .tanlov_date{
    font-size: 8px;
}
.tanlov_item_title{
    font-size: 10px;
}
.batafsil{
    text-align: center;
    font-size: 8px;
    height: 30px;
}
}
</style>
