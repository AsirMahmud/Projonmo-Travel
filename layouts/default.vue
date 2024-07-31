<template>
    <div>

        <div class=" flex flex-col scroll-smooth ">
            <Drawer></Drawer>
            <Navbar class="bg-primaryb"></Navbar>
            <slot />
        </div>
        <Footer></Footer>

    </div>
</template>