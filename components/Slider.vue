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
        slidesPerView: 4,
        spaceBetween: 40,
    },
});
</script>
<template>
    <div
        class="container bg-[#E6EDF8] overflow-hidden max-w-[380px] lg:max-w-full  w-full border justify-center mx-auto text-center  items-center flex flex-col gap-4 py-10">
        <div class="lg:max-w-[1200px] border flex flex-col gap-8 items-center max-w-[380px]">
            <h2 class="header">Our Access</h2>
            <p class="text-gray-600 mb-8 w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
            </p>
            <swiper :breakpoints="breakpoints" :slides-per-view="1" :space-between="10"
                class="my-swiper lg:max-w-[1200px] border max-w-[300px]">
                <swiper-slide v-for="(slide, index) in slides" :key="index">
                    <div class="bg-white rounded-lg shadow-lg  w-[273px] h-[396px]">
                        <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover rounded-lg mb-4" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>


<style scoped>
.my-swiper {
    padding: 20px;
}
</style>
