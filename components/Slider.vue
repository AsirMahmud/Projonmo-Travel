<script setup>
import { ref } from 'vue';



const slides = ref([
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Vertical_Flag_of_the_People%27s_Republic_of_China.svg",
        title: "Canada",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_the_United_Arab_Emirates_%28vertical%29.svg/1200px-Flag_of_the_United_Arab_Emirates_%28vertical%29.svg.png",
        title: "China",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ8wT1esYA4ZT94pGhFQetIiKqV_fDWzCDw&s",
        title: "India",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJNJVGSPQKipIQn9lJwIVsbYAw7wDlCOcmg&s",
        title: "Maldives",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Poland_vertical.png/1200px-Flag_of_Poland_vertical.png",
        title: "India",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UMwCqZ7BPZbLIXMmX-v28cyDLzInosf5Xg&s",
        title: "Maldives",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6ZSkoKTlBXKWYi6lgFb3BNHjWuu6_pZHVw&s",
        title: "India",
        description: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_l4tBqpl8KL0LlXj4SdLYfviqLwWq5l_2A&s",
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
                Unlock exclusive benefits and unparalleled access to top destinations and premium travel experiences.
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
