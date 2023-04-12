<template>
    <main class="container">
        <slot />
    </main>
</template>

<style lang="scss" scoped>
    .container {
        font-family: Chivo;
        padding: 20px 18px;
        margin: 0 auto;
        max-width: 1440px;

        @media screen and (min-width: 768px) {
            padding: 50px 36px;
        }
    }
</style>