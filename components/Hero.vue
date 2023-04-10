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
        max-height: 820px;
        object-fit: cover;
    }
}
</style>