<script setup>

const data = [
    { name: 'Home', link: '#' },
    { name: 'Services', link: '#sevices' },
    { name: 'About', link: '#about' },
    { name: 'Contact Us', link: '#contactUs' }
]

const { isOpen, toggler } = togglerArea()
console.log(isOpen.value)
</script>

<template>
    <div class="fixed">

        <div v-if="isOpen" @click="toggler" class="h-screen w-full fixed bg-primary/60 z-30   ">

        </div>
        <Transition enter-active-class="transition transform duration-700 "
            leave-active-class="transition transform duration-700" enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
            <div v-if="isOpen"
                class="w-[300px]   bg-white fixed z-40  overflow-hidden h-full transition duration-700 ease-out ">
                <div class="bg-white flex justify-center h-[50px] p-2">
                    <NuxtImg src="./logo.png" class="bg-white"></NuxtImg>

                </div>
                <div class="flex flex-col gap-4  p-8">
                    <NuxtLink :to="{ hash: i.link }" v-for=" i in data"
                        class="text-2xl font-bold text-start text-primary" @click="toggler">{{
                            i.name }}
                    </NuxtLink>

                </div>
            </div>
        </Transition>

    </div>
</template>