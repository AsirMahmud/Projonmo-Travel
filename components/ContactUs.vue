<script setup>
const data = [{
    title: "Contact",
    subTitle: 'Information service',
    details: 'Contact us to know our services'
},
{
    title: "Choose",
    subTitle: 'Select our service',
    details: 'Select your required services and know the requirements'
},
{
    title: "Prepare",
    subTitle: 'Information service',
    details: 'Plan Ready your documents'
},
{
    title: "Be Patient",
    subTitle: 'Plan Wait for Visa processing',
    details: 'It is a time-consuming process to complete visa processing so, be patient.'
},
{
    title: "Complete",
    subTitle: 'Congratulation',
    details: 'Congratulations, at this stage you finally got your visa processed'
}

]

</script>

<template>
    <div class=" w-full flex flex-col gap-32 justify-center items-center p-16">
        <div class="max-w-[1200px] container   mx-auto  flex flex-col gap-16">
            <div class="flex flex-col gap-4 text-center ">
                <h1 class="header">Contact Us</h1>
                <p>
                    15/12D, Block: F, Hazi Chinu Miah Road, Mohammadpur, Dhaka-1207
                </p>

            </div>
            <main class="flex flex-col-reverse lg:flex-row lg:justify-between  lg:gap-16 gap-8 w-full ">
                <form class=" flex gap-4 flex-col w-full lg:w-[50%]">
                    <div class="w-full flex lg:flex-row flex-col gap-4 ">
                        <div class="w-full">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="fullName">Full Name *</label>
                                <input id="fullName" placeholder="Name" class="bg-[#EEEFF4] h-11 rounded px-2 py-4"
                                    name="fullName">
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="email">Email*</label>
                                <input id="email" name="email" placeholder="Email"
                                    class="bg-[#EEEFF4] h-11 rounded px-2 py-4">
                            </div>
                        </div>

                    </div>

                    <div class="flex flex-col gap-2 w-full">
                        <label for="number">Phone Number</label>
                        <input id="number" placeholder="Number" class="bg-[#EEEFF4] h-11 rounded px-2 py-4"
                            name="number">
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label for="service">Service</label>
                        <input id="service" placeholder="service" class="bg-[#EEEFF4] h-11 rounded px-2 py-4"
                            name="service">
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label for="comment">Comment*</label>
                        <textarea id="comment" placeholder="Comment" class="bg-[#EEEFF4] h-40 rounded px-2 py-4 "
                            name="comment" />
                    </div>
                    <div class="w-full flex justify-end"><Button class="" type="submit" tag="Send"></Button>
                    </div>

                </form>
                <section class="flex flex-col gap-8">
                    <div v-for="i in data" class="flex items-center gap-4">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 14.5C3 12.5 7 11.4 9 11.4C11 11.4 15 12.5 15 14.5V15.5H3M12 6.5C12 7.29565 11.6839 8.05871 11.1213 8.62132C10.5587 9.18393 9.79565 9.5 9 9.5C8.20435 9.5 7.44129 9.18393 6.87868 8.62132C6.31607 8.05871 6 7.29565 6 6.5C6 5.70435 6.31607 4.94129 6.87868 4.37868C7.44129 3.81607 8.20435 3.5 9 3.5C9.79565 3.5 10.5587 3.81607 11.1213 4.37868C11.6839 4.94129 12 5.70435 12 6.5ZM0 2.5V16.5C0 17.0304 0.210714 17.5391 0.585786 17.9142C0.960859 18.2893 1.46957 18.5 2 18.5H16C16.5304 18.5 17.0391 18.2893 17.4142 17.9142C17.7893 17.5391 18 17.0304 18 16.5V2.5C18 1.96957 17.7893 1.46086 17.4142 1.08579C17.0391 0.710714 16.5304 0.5 16 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5Z"
                                fill="#1E429F" />
                        </svg>
                        <div>
                            <p class=" font-bold text-black">{{ i.title }}</p>
                            <p class="text-xs">{{ i.subTitle }}</p>
                            <p>{{ i.details }}</p>

                        </div>
                    </div>


                </section>
            </main>


        </div>


    </div>
</template>