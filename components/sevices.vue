<script setup>
const data = [
    {
        "title": "Discounted Price",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/1.png'
    },
    {
        "title": "Discounted Price",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/2.png'
    },
    {
        "title": "Discounted Price",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/3.png'
    },
    {
        "title": "E-Visa Processing",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/4.png',
    },
    {
        "title": "Legalization",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/5.png'
    },
    {
        "title": "Hotel Reservation",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/6.png'
    },
    {
        "title": "Supportive Courses",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/7.png'
    },
    {
        "title": "Tour Packages",
        "description": "Lorem ipsum dolor sit amet, consetetur.",
        'image': '/8.png'
    }
]

</script>

<template>
    <div class="text-center flex justify-center items-center gap-8 md:p-8 flex-col p-4  lg:p-16">
        <div class="gap-2 flex flex-col justify-center items-center w-full  max-w-[446px]">
            <h1 class="header">Services</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore.</p>
        </div>
        <div class="max-w-[1140px] grid lg:grid-cols-4  lg:gap-x-16 gap-y-4 md:grid-col-2  place-items-center ">
            <div class="w-[270px] flex flex-col gap-2 text-start h-[305px]  border-slate-100  border-2 p-4 hover:shadow-2xl  hover:translate-y-2 transition-transform rounded "
                v-for="i in data">
                <div class="rounded-xl bg-[#eef6ff] p-3 w-[90px] h-[90px]">
                    <NuxtImg width="70" height="70" :src="i.image"></NuxtImg>
                </div>
                <h1 class="header2 font-bold flex-1">{{ i.title }}</h1>
                <p class="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quae voluptatum
                    placeat
                    recusandae deleniti neque minus molestiae asperiores inventore commodi, eaque laboriosam iusto
                    corporis tempora.</p>

            </div>

        </div>

    </div>
</template>