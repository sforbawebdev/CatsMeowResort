<script setup>
    const props = defineProps(['data']);
</script>

<template>
    <aside class="MainNavigation">
        <div class="MainNavigation__container">
            <ul class="MainNavigation__list">
                <li v-for="item in props.data" class="MainNavigation__item">
                    <a :href="item.url" class="MainNavigation__link">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<style lang="scss">
    .MainNavigation {
        position: absolute;
        transform: translateX(-86vw);
        height: 100vh;
        width: 86vw;
        z-index: 1;
        background-color: #BA692E;
        transition: all ease-in-out 250ms;

        &.open {
            transform: translateX(0vw);    
        }

        @media screen and (min-width: 1280px) {
            width: 50vw;
            transform: translateX(-50vw);
        }

        &__list {
            padding: 60px 24px;

            @media screen and (min-width: 1280px) {
                padding: 60px;
            }
        }

        &__link {
            font-family: 'Chivo';
            font-style: normal;
            font-weight: 200;
            letter-spacing: -0.02em;
            color: #000000;
            text-decoration: none;
            font-size: 50px;
            line-height: 60px;
            transition: all ease-in 250ms;

            &:hover {
                font-weight: bold;
            }

            @media screen and (min-width: 768px) {
                font-size: 80px;
                line-height: 100px;
            }
        }
    }
</style>