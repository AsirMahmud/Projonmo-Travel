<script setup>
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper()
</script>

<template>
    <div @click="swiper.slidePrev()" class="-mt-0 z-30">
        <svg class=" cursor-pointer hover:translate-y-1 transform" height="46" width="46" viewBox="0 0 56 56"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.816406" y="0.5" width="54.1621" height="55" rx="7.5" stroke="#171313" />
            <path d="M40.2104 28L15.5844 28M15.5844 28L26.6661 39.25M15.5844 28L26.6661 16.75" stroke="#171313"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
</template>