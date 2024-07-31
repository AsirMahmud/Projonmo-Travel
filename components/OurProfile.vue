<script setup>
import { ref } from 'vue';
import Flipbook from 'flipbook-vue';
const pages = ref([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqm2Y0ZT0RTVRWWI6n-52COT9E7BBk0_TxUQ&s",
    "https://img.freepik.com/premium-photo/seashells-seashore-sunny-summer-day-background-beach-sea_240387-41.jpg",
    "https://img.freepik.com/premium-photo/detail-shells-beach-with-blurred-sea-background-selective-focus_462054-1126.jpg3",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdR-kg-TClxM7w6KT7Iw62pEIVF-o0sVW_Jic1aeWwboaGXt3LuRBjPoXvoz8bsp2_xug&usqp=CAU",
    "https://img.freepik.com/premium-photo/seashells-seashore-sunny-summer-day-background-beach-sea_240387-43.jpg",
    "https://img.freepik.com/premium-photo/seashells-seashore-sunny-summer-day-background-beach-sea_240387-48.jpg",
    "https://img.freepik.com/premium-photo/seashells-seashore-sunny-summer-day-background-beach-sea_240387-70.jpg",
    "https://img.freepik.com/premium-photo/seashells-seashore-sunny-summer-day-background-beach-sea_240387-80.jpg",
]);
</script>

<template>
    <div class="bg-primaryb w-full flex justify-center items-center py-16">

        <div class="max-w-[600px] mx-auto justify-center items-center p-16 flex flex-col gap-8">
            <div class="flex flex-col gap-4 text-center">
                <h1 class="text-2xl font-bold">Our Profile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem autem error laborum quisquam ad
                    esse saepe tempore cum molestias minus modi, mollitia fugit assumenda aut similique fuga sit illo.
                </p>
            </div>
            <div class="w-[600px] h-[700px] perspective-[1000px] mr-12">
                <flipbook class="w-full h-full shadow-lg rounded-lg " :pages="pages"></flipbook>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
