<template>
    <main class="container">
        <slot />
    </main>
</template>

<style lang="scss" scoped>
    .container {
        font-family: Chivo;
        padding: 50px 24px;
        margin: 0 auto;
        max-width: 98vw;

        @media screen and (min-width: 767px) {
            max-width: 92vw;
        }

        @media screen and (min-width: 992px) {
            padding: 50px 36px;
            max-width: 1440px;
        }
    }
</style>