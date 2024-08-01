<script setup>
import { ref } from 'vue';


const slides = ref([
    {
        "name": "Ahmed Khan",
        "job": "Software Engineer",
        "title": "Excellent Service",
        "remarks": "The company and their team have handled my business trip perfectly, from ticket booking to visa processing. Their efficiency and attention to detail ensured a smooth and stress-free experience. Highly recommended for professional travel needs."
    },
    {
        "name": "Fatima Begum",
        "job": "Teacher",
        "title": "Smooth Experience",
        "remarks": "The team at Projonmo Tours made my vacation planning effortless. Their expertise in visa management and personalized service made my trip enjoyable and worry-free. I will definitely use their services again."
    },
    {
        "name": "Karim Chowdhury",
        "job": "Doctor",
        "title": "Professional Service",
        "remarks": "I am pleased with the organization as they have provided exceptional service for my medical conference abroad. Their thorough planning and professional approach ensured all arrangements were perfect, allowing me to focus on my work. Highly reliable agency."
    },
    {
        "name": "Ayesha Rahman",
        "job": "University Student",
        "title": "Budget-Friendly",
        "remarks": "As a student, finding affordable travel options is crucial. Projonmo Tours offered budget-friendly packages without compromising on quality. Their support and guidance made my educational trip memorable and affordable."
    },
    {
        "name": "Rafiq Islam",
        "job": "Businessman",
        "title": "Reliable Agency",
        "remarks": "For my frequent business travels, I trust Projonmo Tours. Their efficiency in booking and visa management saves me time and hassle. Their reliable services are invaluable for my professional needs."
    },
    {
        "name": "Nusrat Jahan",
        "job": "Bank Manager",
        "title": "Outstanding Support",
        "remarks": "Projonmo Tours provided outstanding support for my family holiday. Their attention to detail and personalized service ensured a delightful and stress-free vacation. They handled everything perfectly, from flights to hotel bookings."
    },
    {
        "name": "Zafar Iqbal",
        "job": "Civil Engineer",
        "title": "Highly Satisfied",
        "remarks": "I am highly satisfied with Projonmo Tours. Their comprehensive travel solutions and expert guidance exceeded my expectations. They managed all aspects of my trip seamlessly, making it a wonderful experience."
    },
    {
        "name": "Mariam Akhtar",
        "job": "Graphic Designer",
        "title": "Great Experience",
        "remarks": "My experience with Projonmo Tours was fantastic. Their innovative solutions and attention to detail made my travel plans hassle-free. I appreciated their personalized approach and highly recommend their services."
    },
    {
        "name": "Hasan Mahmud",
        "job": "Journalist",
        "title": "Efficient Service",
        "remarks": "Projonmo Tours provided efficient and reliable service for my international assignment. Their clear communication and professional handling of all travel arrangements ensured a smooth trip. Ideal for media professionals with tight schedules."
    },
    {
        "name": "Shabnam Yasmin",
        "job": "Lawyer",
        "title": "Exceptional Care",
        "remarks": "The exceptional care and meticulous planning by Projonmo Tours made my vacation delightful. Their expertise in managing visas and travel itineraries ensured everything was perfect. I felt well taken care of throughout my trip."
    },
    {
        "name": "Mahmud Billah",
        "job": "Media And Branding",
        "title": "Great Hospitality",
        "remarks": "I want to express my sincere thanks for your proactive support and guidance. Your assistance has been crucial in obtaining my visa. My special thanks to Saiful vaiya who helped me throughout my application procedure."
    }
]
);

const breakpoints = ref({
    0: {
        slidesPerView: 1,
        spaceBetween: 40,
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1800: {
        slidesPerView: 4,
        spaceBetween: 30
    }
});
</script>
<template>

    <div class="h-auto overflow-hidden ">
        <main
            class="container   bg-[#E6EDF8]  justify-center  overflow-hidden max-w-full lg:max-w-full  w-full    mx-auto text-start   flex gap-4 lg:p-16  md:p-8 p-4">

            <section class="lg:w-[1200px] relative lg:h-[350px] ">
                <div class="w-[200px]  h-[300px] absolute  right-0 blur-3xl"
                    style=" background: linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%); background-blend-mode: multiply, overlay, lighten, darken, luminosity, color-dodge; filter: blur(200px);">

                </div>


                <div class="lg:w-[40%] flex flex-col gap-4">
                    <h1 class="header  text-start">What our Client
                        say about us</h1>
                    <p>We assess, plan, create, and assist with your growth path</p>


                </div>


            </section>


        </main>
        <div class="lg:-mt-64 w-full lg:ml-[17%]   ">
            <div class=" w-full ">
                <div class=" mx-auto   lg:bg-none  bg-[#E6EDF8] lg:bg-white/0  flex flex-col items-center max-w-full">

                    <swiper :breakpoints="breakpoints" :slides-per-view="1" :space-between="10"
                        class="my-swiper w-full ">
                        <swiper-slide v-for="(slide, index) in slides" :key="index">
                            <div
                                class="bg-white rounded-lg flex flex-col  shadow-md p-8  gap-4 lg:w-[392px] w-full  h-[342px]">
                                <div class="flex items-center gap-4 ">
                                    <div class="rounded-full bg-slate-400 w-14 h-14 ">

                                    </div>
                                    <div>
                                        <p class="font-bold text-black">{{ slide.name }}</p>
                                        <p class="">{{ slide.job }}</p>

                                    </div>
                                </div>
                                <div class=" w-full flex gap-4">
                                    <p class="text-black font-bold ">{{ slide.title }}</p>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect opacity="0.4" x="0.40918" width="47.2818" height="48"
                                            fill="url(#pattern0_35_701)" />
                                        <defs>
                                            <pattern id="pattern0_35_701" patternContentUnits="objectBoundingBox"
                                                width="1" height="1">
                                                <use xlink:href="#image0_35_701"
                                                    transform="matrix(0.0211498 0 0 0.0208333 -0.00759494 0)" />
                                            </pattern>
                                            <image id="image0_35_701" width="48" height="48"
                                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAqtJREFUaEPtmMvLTlEUxn9fuceE+ChGRkgZ4A9A30hIuRQlZYAQA+UyJX1GrikzA5IMUEbIxFApRYmUckvKyDXFeWq/dTqdyzpn7Z3enDN66zvr+Z7fWmvvs/YeYcifkSH3Tw/wryvYV6CvgDMDfQs5E+gO/28qMAPYCawHFgGzgM/AM+AWcAX42jKdUTQtFdgKnAXm1Bj8ABwAbhohomk2ARwDToDpi/0HOAKcboCIqlkHoCxdM5ofeBbExtBWZRzRNasApgOvgFFjS+Rf+wgsBL4VYlNoVraG+ll93/XZm8FfKgSn0KwEeACs6uoeuAusLcSn0KwEeA/McwC8A+YX4lNoVgL8BCY5AL5nu9G0QnwKzWQV+AVMjlyBMs1KgPvAakcFvgAzC/EpNCsB9mcGzjkA3gILCvEpNCsBtGe/BOZ2hHic7UQrSr4DsTVrR4TNwPWWX+KBZ81Em0rgo2s2zUJHgZMdIMbDXFRWwKiaTQAyoKzpq1zXTp8C5OzgWNmvm0yjaVoA5ElrYgewAVgcRmvtNE/D4Cazr4GpAUALWAu57omiaQVoWsvrgNvhpefAkqYAw99NmrEAtNi3BFOnAM383sekGQNA7aL2mQDoPLA0HDU9AGbNGADns/PxvuD2oXOKHUCbNb0A6vUn2VY7MfznMeCeJ/Vh/Zg1PQAa1h4By4NhzftrnOZba3oAdOLaHQz/yLbTZcALJ0Brza4Aunk4nDN7CDjjNN9Jsy2ADjkyuidn9mp2AbDdYd6l2QZA0+UFYGXO7I1sat0G/O4IIM2Lhcm1laYVQJdb+jjl39d14i6H+SiaVgCdcaeELOv3QeByx6wPwqJoWgG0wLTj3AGOZxe9b5zmFR5F0woQwW8aiR4gTV7tqn0F7LlK82ZfgTR5tasOfQX+Aop/nDHvspovAAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>

                                </div>
                                <div class="">
                                    <p>{{ slide.remarks }}
                                    </p>
                                </div>

                            </div>
                        </swiper-slide>
                        <template v-slot:container-start>
                            <div class=" flex gap-4 z-50 top-10 left-0 right-[30%] -mt-5 mb-4">
                                <Previous class="  "></Previous>
                                <Next class=""></Next>
                            </div>
                        </template>

                    </swiper>
                </div>
            </div>

        </div>
    </div>

</template>


<style scoped>
.my-swiper {
    padding: 20px;
}
</style>
