<template>
    <Header/>
    <div class="body">
        <!-- <MainNavigation /> -->
        <slot />
    </div>
    <Footer/>
</template>

<style lang="scss" scoped>
    .body {
        background-color: #F2ECE2;
    }
</style>