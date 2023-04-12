<script setup>
    const props = defineProps(['data']);
    const {accordion_items, headline_1, headline_2, image_src} = props.data;
</script>
<template>
    <div class="Accordion">
        <div class="Accordion__container">
            <div class="Accordion__block">
                <h2  class="Accordion__title">
                    <span>
                        {{ headline_1 }}
                    </span>
                    <span>
                        {{ headline_2 }}
                    </span>
                </h2>
                <h2  class="Accordion__title mobile">
                    {{ headline_1 }}  {{ headline_2 }}
                </h2>
                <div  class="Accordion__wrap">
                    <ul class="Accordion__list">
                        <li v-for="item in accordion_items" class="Accordion__item">
                            <AccordionItem :data="item"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="Accordion__block">
                <img :src="image_src" class="Accordion__image" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.Accordion {
    padding: 50px 0px;

    &__container {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 768px) {
            flex-direction: row;
        }
    }

    &__title {
        font-family: 'Chivo';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        
        color: #0B5841;
        width: 100%;
        display: none;
        padding-bottom: 30px;
        padding-top: 0;
        word-wrap: break-word;

        @media screen and (min-width: 768px) {
            font-size: 35px;
        }

        @media screen and (min-width: 992px) {
            display: block;
            font-size: 40px;
            padding-bottom: 50px;
            padding-top: 45px;
            letter-spacing: -0.02em;
        }

        &.mobile {
            display: block;

            @media screen and (min-width: 992px) {
                display: none;
            }
        }

        span {
            display: block;
            width: 100%;
            padding: 10px 0px;

            &:first-of-type {
                text-align: left;
            }

            &:last-of-type {
                text-align: right;
                word-wrap: break-word;
            }
        }

    }

    &__block {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;

        @media screen and (min-width: 768px) {
            width: 50%;
            padding: 0px 12px;
        }

        @media screen and (min-width: 992px) {
            padding: 0px 18px;
        }
    }

    &__list {
        padding-bottom: 60px;

        @media screen and (min-width: 768px) {
            padding-bottom: 0;
        }
    }

    &__image {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
        border-radius: 30px;
    }

    &__content {
        height: 0;
        overflow: hidden;
    }

    &__item {
        margin-bottom: 12px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>