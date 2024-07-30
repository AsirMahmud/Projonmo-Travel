<script setup>
const data = [
    { name: 'Home', link: '#' },
    { name: 'Services', link: '#sevices' },
    { name: 'About', link: '#about' },
    { name: 'Contact Us', link: '#contactUs' }
]

</script>

<template>
    <nav class="w-full ">
        <div class="max-w-[1200px]  mx-auto w-full flex justify-between items-center p-4">
            <div>
                <NuxtLink to="/"> <img src="/logo.png" alt="Logo" class="h-10"></NuxtLink>
            </div>
            <div class=" md:block hidden">
                <div class="flex items-center gap-8">
                    <div class="flex gap-8">
                        <NuxtLink v-for="i in data" :key="i.link" :to="{ hash: i.link }"
                            class="hover:text-blue-500 text-sm text-primary ">{{
                                i.name
                            }}
                        </NuxtLink>
                    </div>
                    <NuxtLink to="/book"> <button type="button"
                            class="text-white bg-secondary hover:bg-secondary/80 focus:ring-4 focus:ring-custom-secondary/70 font-medium text-sm rounded px-5 py-2.5 me-2 mb-2 dark:bg-custom-secondary-dark dark:hover:bg-custom-secondary-dark-hover focus:outline-none dark:focus:ring-custom-secondary-dark-focus">
                            Book A ticket
                        </button></NuxtLink>
                </div>
            </div>
            <div class=" md:hidden ">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 11.9233H33.75M6.25 20.6733H33.75M6.25 29.4233H33.75" stroke="white"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.998 12.7739C22.7722 12.7739 25.5463 12.7697 28.3204 12.7769C29.0167 12.7787 29.5367 13.1117 29.8298 13.7417C30.1235 14.373 30.0313 14.9803 29.5879 15.5157C29.2471 15.9272 28.792 16.1054 28.257 16.105C23.9485 16.1025 19.6399 16.1036 15.3314 16.1036C14.1004 16.1035 12.8691 16.1169 11.6384 16.0979C10.9439 16.0872 10.4323 15.7381 10.1528 15.0996C9.87739 14.4704 9.97936 13.8744 10.4176 13.3509C10.7543 12.9487 11.2033 12.7726 11.7277 12.7729C14.4844 12.7749 17.2412 12.7739 19.998 12.7739Z"
                        fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.9875 22.763C17.2134 22.7629 14.4392 22.7684 11.6652 22.759C10.97 22.7567 10.4528 22.4168 10.164 21.7833C9.87461 21.1484 9.97341 20.5438 10.419 20.0113C10.7556 19.6091 11.2045 19.4316 11.7286 19.4319C14.5287 19.4333 17.3288 19.4325 20.1289 19.4325C22.8596 19.4326 25.5903 19.4306 28.3211 19.434C29.1639 19.435 29.8495 20.037 29.9769 20.8703C30.0957 21.6472 29.6118 22.4309 28.8441 22.6728C28.6498 22.734 28.4364 22.7591 28.2317 22.7595C25.4836 22.765 22.7355 22.7632 19.9875 22.763Z"
                        fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.9919 29.4227C17.2179 29.4227 14.4437 29.4254 11.6697 29.421C10.8359 29.4197 10.1642 28.8314 10.0252 28.0039C9.89532 27.2321 10.3717 26.4424 11.1365 26.1882C11.3141 26.1292 11.5092 26.0971 11.6962 26.0969C17.227 26.0921 22.7579 26.092 28.2887 26.094C29.2501 26.0943 29.9878 26.8232 29.9878 27.7582C29.9878 28.6919 29.2486 29.4209 28.2882 29.4218C25.5228 29.4245 22.7574 29.4227 19.9919 29.4227Z"
                        fill="black" />
                </svg>


            </div>
        </div>
    </nav>

</template>