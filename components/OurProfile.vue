<script setup>
import { ref } from 'vue';
import Flipbook from 'flipbook-vue';

const pages = ref([
    "https://via.placeholder.com/600x400?text=Page+1",
    "https://via.placeholder.com/600x400?text=Page+2",
    "https://via.placeholder.com/600x400?text=Page+3",
    "https://via.placeholder.com/600x400?text=Page+4"
]);
</script>

<template>
    <div class="bg-primaryb w-full flex justify-center items-center py-16">

        <div class="max-w-[600px] mx-auto items-center p-16 flex flex-col gap-8">
            <div class="flex flex-col gap-4 text-center">
                <h1 class="text-2xl font-bold">Our Profile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem autem error laborum quisquam ad
                    esse saepe tempore cum molestias minus modi, mollitia fugit assumenda aut similique fuga sit illo.
                </p>
            </div>
            <div class="w-[600px] h-[400px] perspective-[1000px] mr-12">
                <flipbook class="w-full h-full shadow-lg rounded-lg overflow-hidden" :pages="pages"></flipbook>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-primaryb {
    background-color: #f0f4f8;
    /* Adjust background color to your preference */
}
</style>
