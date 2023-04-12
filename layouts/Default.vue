<script setup>
    import { ref } from 'vue';

    let menu_open = ref(false);

    function toggleMenu() {
        menu_open.value = !menu_open.value;
        console.log(menu_open.value);
    }
</script>

<template>
    <div :class="{ scrim: menu_open }">
        <Header/>
        <div class="body" :class="{ scrim: menu_open }">
            <div @click="toggleMenu" >
                <MainNavigation :class="{ open: menu_open }"/>
            </div>
            <slot />
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss" scoped>
    .body {
        background-color: #F2ECE2;
        transition: opacity ease-in-out 250ms;

        &::after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                background-color: rgba(0, 0, 0, 0.24);
                visibility: hidden;
                opacity: 0;

        }
    }
    .scrim {
            max-height: 100vh;
            overflow: hidden;
            position: relative;

            &::after {
                opacity: 1;
                visibility: visible;
            }
    }
</style>