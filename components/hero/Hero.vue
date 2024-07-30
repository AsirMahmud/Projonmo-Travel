<script setup>

</script>

<template>
    <div class="bg-primaryb flex flex-col ">
        <div class="w-[400px] absolute  -z-10 h-[400px] blur-3xl"
            style=" background: linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%); background-blend-mode: multiply, overlay, lighten, darken, luminosity, color-dodge; filter: blur(200px);">

        </div>
        <div style=" p-4 ">

            <div class="w-full flex gap-8 lg:h-[732px] flex-col justify-center items-center">

                <div
                    class=" lg:w-[1200px] md:w-[800px] p-4 w-[390px] gap-2 lg:mt-0 mt-16  flex lg:flex-row  flex-col-reverse  ">
                    <div class="lg:w-[50%] w-full flex gap-4 lg:p-0 p-4 flex-col">
                        <p class=" lg:leading-[6]"> <span
                                class=" lg:text-5xl text-2xl  uppercase text-primary font-bold">Projonmo</span>
                            <span class=" lg:text-5xl text-2xl  uppercase text-secondary font-bold"> TOURS AND TRAVEL
                            </span>
                            <span class=" lg:text-[88.4px] text-2xl  uppercase text-primary font-bold"> AGENCY
                            </span>
                        </p>
                        <p class=" lg:pr-24 text-lg text-primary/60 ">Welcome to Projonmo Tours and Travel Agency,
                            your
                            one-stop
                            destination for all
                            travel and
                            visa-related needs. We specialize in providing a wide range of services to ensure your
                            travel
                            experience is smooth, enjoyable, and hassle-free.</p>
                        <NuxtLink :to="{ hash: '#contactUs' }"><button type="button"
                                class="text-white w-36 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-lg px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contact
                                us</button></NuxtLink>
                    </div>
                    <div class=" lg:w-[50%] w-full">
                        <img src="public/hero.png
                "></img>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>