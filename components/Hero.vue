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
        height: auto;
        object-fit: cover;
        max-height: 100vh;

        @media screen and (min-width: 768px) {
            max-height: 437px;
        }

        @media screen and (min-width: 1440px) {
            max-height: 820px;
        }
    }
}
</style>