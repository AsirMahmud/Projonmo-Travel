<script setup>
import { ref } from 'vue';
import Flipbook from 'flipbook-vue';

const pages = ref([
    "p1.jpg",
    "p2.jpg",
    "p3.jpg",
    "p4.jpg",
    "p5.jpg",
    "p6.jpg",
    "p7.jpg",
    "p8.jpg"
]);
</script>

<template>
    <div class="bg-primaryb w-full flex justify-center items-center py-16">
        <div class="max-w-[800px] mx-auto  items-center p-16 flex flex-col gap-8">
            <div class="flex flex-col gap-4 text-center">
                <h1 class="text-2xl font-bold">Our Profile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem autem error laborum quisquam ad
                    esse saepe tempore cum molestias minus modi, mollitia fugit assumenda aut similique fuga sit illo.
                </p>
            </div>
            <div class="flipbook-container  ">
                <Flipbook class="flipbook" :pages="pages"></Flipbook>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-primaryb {
    background-color: #f0f4f8;
    /* Adjust background color to your preference */
}

.flipbook-container {
    width: 80vw;
    /* Adjust width to make the flipbook larger */
    height: calc(100vh - 200px);
    /* Adjust height to make the flipbook larger */
    display: flex;
    justify-content: center;
    align-items: center;
}

.flipbook {
    width: 100%;
    height: 100%;
    @apply shadow-lg
}
</style>
