<script setup>
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper()
</script>

<template>
    <div @click="swiper.slideNext()" class="z-30">
        <svg class=" cursor-pointer hover:translate-y-1 transform" width="46" height="46" viewBox="0 0 56 56"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="54.1621" height="55" rx="7.5" stroke="#171313" />
            <path d="M15.2681 28H39.894M39.894 28L28.8123 16.75M39.894 28L28.8123 39.25" stroke="#171313"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    </div>
</template>