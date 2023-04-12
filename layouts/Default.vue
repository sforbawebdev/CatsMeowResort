<script setup>
    import { ref } from 'vue';
    import data from '../assets/data/data.json';

    const layoutData = data?.layout;
    let navigationData = data?.navigation.filter(data => data.slug === 'main_navigation');
    navigationData = navigationData && navigationData[0] && navigationData[0]?.data;
    let menu_open = ref(false);

    function toggleMenu() {
        menu_open.value = !menu_open.value;
    }
</script>

<template>
    <div :class="{ scrim: menu_open }">
        <Header :data="layoutData.header" />
        <div class="body" :class="{ scrim: menu_open }">
            <div class="body__nav-wrap">
                <MainNavigation :class="{ open: menu_open }" :data="navigationData" />
                <NavigationTab :class="{ open: menu_open }"  @clickTab="toggleMenu"/>
            </div>
            <slot />
        </div>
        <Footer :data="layoutData.footer" />
    </div>
</template>

<style lang="scss" scoped>
    .body {
        background-color: #F2ECE2;
        transition: opacity ease-in-out 250ms;

        &__nav-wrap {
            position: relative;
        }
    
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