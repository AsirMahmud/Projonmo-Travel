<script setup>
import { ref } from 'vue';


const slides = ref([
    {
        image: "https://via.placeholder.com/600x400?text=Canada",
        title: "Canada",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=China",
        title: "China",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=India",
        title: "India",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=Maldives",
        title: "Maldives",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=India",
        title: "India",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=Maldives",
        title: "Maldives",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=India",
        title: "India",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://via.placeholder.com/600x400?text=Maldives",
        title: "Maldives",
        description: "Lorem ipsum dolor sit amet, consectetur."
    }
]);

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

            <section class="lg:w-[1200px] relative lg:h-[350px]">
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
                                        <p class="font-bold text-black">Johnson Charles</p>
                                        <p class="">Developer</p>

                                    </div>
                                </div>
                                <div class=" w-full flex gap-4">
                                    <p class="text-black font-bold ">Amazing Website loved it very much.</p>
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
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate magni
                                        officiis
                                        asperiores corrupti nam saepe illum expedita, rerum quidem minima praesentium
                                        accusamus deleniti laudantium temporibus commodi eos eius reprehenderit quia!
                                    </p>
                                </div>

                            </div>
                        </swiper-slide>
                        <template v-slot:container-start>
                            <Previous class=" top-0 absolute left-5 "></Previous>
                            <Next class=" top-0 absolute left-20"></Next>
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
