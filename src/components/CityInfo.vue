<template>
  <div class="info_citys">
       <div class="info_item xl:w-full xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:items-center"
         :class="[city.bg == 1 ? 'bg-menuColor text-eeee' : 'bg-cityBg text-black']"
          v-for="(city) in Citys" :key="city.id"
            >
           <div 
           class="
           infoo
           item xl:w-11/12 xl:min-h-98 px-3 xl:my-6
           " 
           :class="[city.bg == 1 && city.url.length == 0 && city.list.length == 0 ? 'border-b-2 border-b-white' : 'border-b-0']"
           >
              <div class="city_name xl:text-4xl underline font-medium xl:pb-4">
                    {{city.name}}
              </div>
              <div class="city_img xl:flex">
                 <div class="images">
                    <img :src="city.img" class="xl:w-130 xl:h-99" alt="">
                 </div>
                 <div class="text xl:w-130 xl:text-xl xl:font-normal pl-4">
                    {{city.text}}
                 </div>
              </div>
              <div v-if="city.text2.length > 0" class="city_text xl:text-xl xl:py-4">
                 {{ city.text2 }}
              </div>
              <div v-if="city.list.length > 0" class="city_ul">
                 <ol class="list-disc xl:ml-5 xl:text-xl">
                    <li v-for="item in city.list" :key="item.id">
                        {{item.name}}
                    </li>
                 </ol>
              </div>
           </div>
           <div v-if="city.url.length > 0" class="footer xl:w-full xl:flex xl:justify-center xl:h-15"
            :class="[city.bg == 1 ? 'bg-cityBg text-black' : 'bg-menuColor text-eeee']"
           >
               <div 
                    class="city_footer item xl:w-11/12 px-3 xl:my-6 xl:flex xl:justify-end xl:items-center"
                    v-for="item in city.url" :key="item.id"
                    >
                    <div v-if="item.youtube_url" class="icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/inyou.png" alt="">
                        </div>
                        <div class="link">
                            <a href="#" class="xl:text-2xl">{{item.youtube_url}}</a>
                        </div>
                    </div>
                    <div v-if="item.facebook_url" class="icon xl:flex xl:items-center xl:px-4">
                        <div class="xl:mr-2">
                            <img src="../assets/images/iface.png" alt="">
                        </div>
                        <div class="link">
                            <a href="#" class="xl:text-2xl">{{item.facebook_url}}</a>
                        </div>
                    </div>
                    <div v-if="item.insta_url" class="icon xl:flex xl:items-center">
                        <div class="xl:mr-2">
                            <img src="../assets/images/ins.png" alt="">
                        </div>
                        <div class="link">
                            <a href="#" class="xl:text-2xl">{{item.insta_url}}</a>
                        </div>
                    </div>
               </div>
           </div>
       </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import img1 from "../assets/images/Rectangle6.png"
import img2 from "../assets/images/Rectangle8.png"
import img3 from "../assets/images/Rectangle9.png"
import {FacebookF,Instagram, Youtube} from "@vicons/fa"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const Citys = ref([
    {
        id: 1,
        name: "KvARTal – cultural district of Sofia",
        img: img1,
        text: `
        "KvARTal" is the bohemian quarter in the old center of Sofia, following the example of a number of 
        European cities. Located between "Dondukov", "Maria Luisa”, "Slivnitsa" and "Vasil Levski" boulevards,
         it is a rich cultural and historical area with the most buildings-monuments of culture. Known since
          the beginning of the 20th century as the trade district, where “Targovska” Street was crossing it, 
          making all the area on the way to the Central Station and around the The Palace (National Art Gallery
           now) was full of life. The royal guests stayed here, there were the first hotels and common living 
           buildings, many intellectuals and merchants lived here, as well famous doctors, as well a curious fact 
           is that Princess Maria Luisa was born here.
        `,
        text2: `
          For eight years now, DOMA Art Foundation has been working in partnership with a numerous of organizations,
           architects, urban planners, locations and neighbors through various of events and projects for the 
           improvement of the area, the preservation of the cultural, architectural and historical heritage and the 
           creation of the “KvARTal” brand, as the place in the old center of Sofia, where one would like to be.
        `,
        list: ``,
        bg: 0,
        url: [
            {
                id: 1,
                insta_url: 'kvartal.art.district',
                facebook_url: 'kv.art.al'
            }
        ]
    },
    {
        id: 2,
        name: "KvARTal Festival",
        img: img2,
        text: `
        "KvARTal Festival" – an urban cultural festival, held in the area of the old bohemian center of Sofia with 
        a large program promoting the "KvARTal" art district and the architectural and cultural heritage and the 
        area. Every year the festival is organized on the weekend around September 17 – The Day of Sofia.
        `,
        text2: ` `,
        list: ``,
        bg: 0,
        url:[
            {
                id: 1,
                youtube_url: 'KvARTal Festival',
                facebook_url: 'kvARTal.festival',
                insta_url: 'kv.art.al'
            }
        ]
    },
     {
        id: 3,
        name: "NEXT Balkan – exchange with the young Balkan art",
        img: img3, 
        text: `
            Project for exchange and cooperation of young artists and experts, sharing experience, projects and 
            initiatives between the Balkan scene. Since 2015, the foundation has established partnerships between 
            Serbia, Albania, Kosovo, Macedonia, Romania, etc. In this project, the foundation is partnering with 
            the Cultural Institute of the Ministry of Foreign Affairs. Sofia City Art Gallery, Regional 
            Contemporary Art Center "Toplocentrala", Doza Gallery, etc.`,
        text2: ` `,
        list: ``,
        bg: 0,
        url: []
    },
     {
        id: 4,
        name: "New Creative Academy",
        img: img3, 
        text: `
            New Creative Academy – contemporary arts education within courses, alternatives to current learning 
            models relevant to both undergraduate and postgraduate levels of ability. The Academy consists of five 
            courses with some of the most exciting current specialists in the field of contemporary art, 
            installation, performance, culture and management with extensive experience at an international level. 
            The program includes open lectures with guest speakers in each of the fields so that students get the 
            full mix of local and international knowledge and opportunities.`,
        text2: ` `,
        list: ``,
        bg: 1,
        url:[
            {
                id: 1,
                youtube_url: ' www.domaartfest.com'
            }
        ]
    },
     {
        id: 5,
        name: "Art Compass",
        img: img3, 
        text: `
            "Art Compass" is a program for contemporary cultural content in regional centers and cities, outside 
            the capital of Bulgaria. Among the projects are a partnership with Pazardzhik Municipality and the 
            "Art Idea Art Alley" festival, where four artists: Valenitna Sharra, Martian Tabakov, Alexander 
            Violetov and Viktoria Georgieva participated in various projects, changing the urban environment 
            with curator Martina Stefanova, 2018, as well as long-term partnerships with cities such as Varna, 
            the "Turn Back Time" project in 2022, partnerships with Veliko Tarnovo, Ruse and others.
`,
        text2: ` `,
        list: ``,
        bg: 1,
        url: []
    },
    {
        id: 6,
        name: "Public Art Donation",
        img: img3, 
        text: `
            In 2013, four Korean artists were invited to create public sculptures on site in Sofia as part of 
            DOMA Art Fest 2013. After a week of hard work, the sculptures were completed and donated: three of 
            them to Sofia Municipality and one to the Ministry of Culture. Together with the main Sofia architect, 
            they were installed in four different places around the city, where they can still be seen:`,
        text2: ` `,
        list: [
            {
                id: 1,
                name: `The sculpture "Wind on the Hill" by the Korean sculptor Hwang Yong Hwan, installed in South Park, to the right of the alley from the park entrance at Vitosha Blvd.`
            },
            {
                id: 2,
                name: `Kayagun sculpture, Korean musical instrument by Prof. Ko Seung Hyun's in the lake in park “Drujba”`
            },
             {
                id: 3,
                name: `The "Red Sign" sculpture by Choi Yong Ok, which was specially made for the Bulgarians after the author became familiar with our history, is installed in the park in Studentski Grad on the 8th of December Blvd., opposite The University of National and World Economy`
            },
             {
                id: 4,
                name: `Kayagun sculpture, Korean musical instrument by Prof. Ko Seung Hyun's in the lake in park “Drujba”`
            }
        ],
        bg: 1,
        url: []
    },
     {
        id: 7,
        name: "Sofia Art Tours",
        img: img3, 
        text: `
            In 2013, four Korean artists were invited to create public sculptures on site in Sofia as part of 
            DOMA Art Fest 2013. After a week of hard work, the sculptures were completed and donated: three of 
            them to Sofia Municipality and one to the Ministry of Culture. Together with the main Sofia architect, 
            they were installed in four different places around the city, where they can still be seen:`,
        text2: ` `,
        list: ``,
        bg: 1,
        url: []
    },
    {
        id: 8,
        name: "Sofia Art Tours",
        img: img3, 
        text: `
            Фестивал за съвременно изкуство и култура, който се провежда в София и продължава между две и четири 
            седмици. Всяко издание на фестивала е посветено на страна / регион, представена в България от различни 
            артисти и като отговор българските художници се представят в страната / региона за годината. Фестивалът
             има за цел да отвори диалог между местната и чуждестранна сцена, да насърчи видимостта и познаването 
             на съвременното изкуство и култура в България и чужбина`,
        text2: ` `,
        list: [
            {
                id: 1,
                name: `2013 - “The HeARTbeat of South Korea” – South Korean contemporary art in Sofia: 10 days, 20 guest artists, 4 locations);`
            },
            {
                id: 2,
                name: `2014 - “The HeARTbeat of New Russia” – presentation of Russian contemporary art and culture in Sofia (10 days, 25 visiting artists, 5 locations);`
            },
             {
                id: 3,
                name: `2014 – Bulgarian Contemporary Art in South Korea (project: "Eurassia Art Express") - 2 weeks, 8 guest artists, two locations.`
            },
             {
                id: 4,
                name: `2015 – “NORDICA” – presentation of contemporary art and culture from the Nordic region - Denmark, Sweden, Finland, Iceland and Norway in Sofia, Bulgaria (1 month, 40 visiting artists, 10 locations, 2 cities: Sofia and Plovdiv)`
            }
        ],
        bg: 0,
        url:[
            {
                id: 1,
                insta_url: 'DomaFestival',
                facebook_url: 'www.domaartfest.com'
            }
        ]
    },
     {
        id: 9,
        name: "UnderGara Creative Hub (София 2019 – културна столица на Европа)",
        img: img1, 
        text: `
            UnderGara is a project to create a small cluster as an innovative platform for culture and art: 
            creative businesses together in one place in the underpass of the Central Railway Station, known as 
            the "Rotunda" with 140 abandoned empty spaces and not yet used. The project was part of the candidacy 
            for Sofia - Cultural Capital of Europe 2019, but Plovdiv won the competition. However, the European 
            jury mentioned one project for each city that should be continued, and UnderGara was the project 
            from Sofia with the highest points. However, the metropolitan municipality changed the focus of 
            culture, so it remained frozen.`,
        text2: ` `,
        list: ``,
        bg: 0,
        url:[
            {
                id: 1,
                facebook_url: ' Undergara'
            }
        ]
    },
    {
        id: 10,
        name: "„YES“ for Night Transport",
        img: img1, 
        text: `
            "DOMA" has several urban initiatives, including the creation of Night Urban Transport in Sofia, 
            already a fact, and the cultivation of abandoned parts of the urban landscape, working together 
            with artists.`,
        text2: ` `,
        list: ``,
        bg: 0,
        url: []
    }
])
let Urls = ref([])
const initScroolAnimation = () => {
    Citys.value.forEach((city, index) => {
        animate(index)
    })
}
const animate = (index) => {
    const selector = `.info_item:nth-child(${index+1})`
    gsap.from(selector, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        scrollTrigger:{
            trigger: selector,
            start: 'top 50%'
        }
    })
}
onMounted(() => {
    initScroolAnimation()
})
</script>

<style scoped>
/* .item:nth-child(4n + 1)::after{
    content: "";
    width: 100%;
    height: 2px;
    background-color: black;
} */
</style>