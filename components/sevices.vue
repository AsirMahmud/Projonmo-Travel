<script setup>
const data = [
    {
        "title": "Visa Mangement",
        "description": "We provide comprehensive visa management services for various travel purposes, including tourism, medical visits, business trips, and employment opportunities. Our expert team ensures accurate and timely processing, making your journey hassle-free",
        'image': '/1.png'
    },
    {
        "title": "Ait Ticket Booking",
        "description": "Our air ticket booking service offers convenient and cost-effective solutions for domestic and international travel. We help you find the best routes and fares, ensuring a smooth and comfortable journey to your destination.",
        'image': '/2.png'
    },
    {
        "title": "Work Permit",
        "description": "For individuals seeking employment abroad, we offer specialized services to process visas with work permits. We ensure all legal requirements are met and provide assistance with necessary documentation, making the process seamless and efficient.",
        'image': '/3.png'
    },
    {
        "title": "E-Visa Processing",
        "description": "Our e-visa processing service simplifies the visa application process, allowing you to apply online with ease. We guide you through each step, ensuring your e-visa is processed quickly and efficiently, so you can focus on your travel plans.",
        'image': '/4.png',
    },
    {
        "title": "Legalization",
        "description": "We provide document legalization services to ensure your important documents meet all legal requirements for use abroad. Whether it's for work, study, or travel, we handle the entire process, guaranteeing that your documents are properly authenticated and accepted in your destination country.",
        'image': '/5.png'
    },
    {
        "title": "Hotel Reservation",
        "description": "Our hotel reservation service helps you secure the best accommodations to suit your preferences and budget. We offer a wide range of options, from luxury hotels to budget-friendly stays, ensuring a comfortable and enjoyable experience wherever you go",
        'image': '/6.png'
    },
    {
        "title": "Supportive Courses",
        "description": "We offer a range of supportive courses designed for foreign candidates preparing to work or study abroad. Our tailored programs help you meet the requirements of your destination country and ease your transition, enhancing your prospects and readiness",
        'image': '/7.png'
    },
    {
        "title": "Tour Packages",
        "description": "Explore the world with our diverse tour packages, crafted to suit different interests and budgets. Whether you're seeking adventure, relaxation, or cultural experiences, we have the perfect package to make your travel dreams come true. Enjoy personalized itineraries and unforgettable experiences with Projonmo Tours and Travel Agency.",
        'image': '/8.png'
    }
]
const viewMore = ref(false)
const toggler = (i) => {
    viewMore.value = !viewMore

}

</script>

<template>
    <div class="text-center flex justify-center items-center gap-8 md:p-8 flex-col p-4  lg:p-16">
        <div class="gap-2 flex flex-col justify-center items-center w-full  max-w-[446px]">
            <h1 class="header">Services</h1>
            <p>A comprehensive range of services offered by our US</p>
        </div>
        <div class="max-w-[1140px] grid lg:grid-cols-4  lg:gap-x-16 gap-y-4 md:grid-col-2  place-items-center ">
            <div class="w-[270px] flex flex-col gap-2 text-start h-[366px]  border-slate-100  border-2 p-4 hover:shadow-lg  hover:translate-y-2 transition-transform rounded "
                v-for="i in data">
                <div class="rounded-xl bg-[#eef6ff] p-3 w-[90px] h-[90px]">
                    <NuxtImg width="70" height="70" :src="i.image"></NuxtImg>
                </div>
                <h1 class="header2 font-bold flex-1">{{ i.title }}</h1>
                <p class="text-sm">{{ i.description }}</p>

            </div>

        </div>

    </div>
</template>