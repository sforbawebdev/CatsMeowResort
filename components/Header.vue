<script setup>
    const props = defineProps(['data']);
    const {data} = props;
</script>

<template>
    <header class="header">
        <h1 class="header__title">
            {{ data?.title }}
        </h1>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: absolute;
    width: 100%;

    &__title {
        position: relative;
        z-index: 1;
        font-family: 'Asul';
        font-style: normal;
        font-weight: 400;
        text-align: center;
        width: 100%;
        text-align: center;
        letter-spacing: -0.05em;
        line-height: 213px;
        color: #BA692E;
        font-size: 90px;
        line-height: 80px;
        padding-top: 94px;

        @media screen and (min-width: 1440px) {
            font-size: 176px;
            line-height: 213px;
            padding-top: 0;
        }
    }
}
</style>