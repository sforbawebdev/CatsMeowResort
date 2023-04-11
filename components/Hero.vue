<template>
    <div class="Hero">
        <img class="Hero__image" src="/hero-desktop.png"/>
    </div>
</template>

<style lang="scss">
.Hero {
    display: flex;

    &__image {
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        object-fit: cover;
        object-position: 10%;

        @media screen and (min-width: 768px) {
            max-height: 437px;
            height: auto;
        }

        @media screen and (min-width: 1440px) {
            max-height: 820px;
        }
    }
}
</style>