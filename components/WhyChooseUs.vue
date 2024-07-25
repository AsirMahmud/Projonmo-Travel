<script setup>
const data = [{ title: 'Discounted Price', image: '/wcu1.png', description: '' },
{ title: 'Easy Payment', image: '/wcu2.png', description: '' },
{ title: '24/7 Support', image: '/wcu3.png', description: '' }]

</script>

<template>
    <div class="flex    lg:p-16 md:p-8 p-4 w-full">
        <div class=" max-w-[1200px]  mx-auto  w-full flex justify-center flex-col gap-16">

            <div class="flex  flex-col lg:flex-row   items-center w-full  justify-between">
                <h1 class="header lg:w-1/3">Why Choose Us</h1>
                <p class="lg:w-1/2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti aperiam
                    iusto
                    quam
                    impedit rerum
                    magni omnis distinctio consequuntur libero. Excepturi deleniti adipisci repellat minima mollitia
                    laboriosam
                    vero autem quo!</p>
                <p
                    class="font-bold text-black hover:underline  cursor-pointer flex items-center gap-x-2 lg:text-xl text-lg">
                    <span>Get
                        started</span>
                    <svg width="20" height="17" class="hover:underline" viewBox="0 0 20 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.3791 0.250655C12.0612 -0.0835516 11.5321 -0.0835516 11.2031 0.250655C10.8853 0.573571 10.8853 1.11101 11.2031 1.43317L17.1658 7.49029H0.823224C0.36456 7.49104 0 7.86138 0 8.32731C0 8.79324 0.36456 9.17562 0.823224 9.17562H17.1658L11.2031 15.2214C10.8853 15.5557 10.8853 16.0938 11.2031 16.416C11.5321 16.7502 12.0619 16.7502 12.3791 16.416L19.7533 8.92497C20.0822 8.60205 20.0822 8.06461 19.7533 7.74245L12.3791 0.250655Z"
                            fill="#828282" />
                    </svg>
                </p>

            </div>
            <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 md:place-items-start place-items-center  ">
                <div class="lg:w-[384px] w-full h-[311px]  lg:p-8 p-4 hover:shadow-2xl flex flex-col gap-4"
                    v-for=" i in data">
                    <NuxtImg width="70px" height="70px" :src="i.image"></NuxtImg>
                    <h1 class="font-bold text-xl">{{ i.title }}</h1>
                    <p class="lg:pr-0 pr-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias
                        commodi odio eveniet
                        totam veniam tempore, asperiores ipsam temporibus iure fugit est aspernatur dolore eaque rerum
                        doloremque odit quis rem.</p>

                </div>
            </div>
        </div>
    </div>
</template>