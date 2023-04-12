<script setup>
    const props = defineProps(['data']);
    const {navigation, social_list, footer_logo } = props.data;
</script>
<template>
    <footer class="footer">
        <div class="footer__decor" />
        <div  class="footer__container">
            <div class="footer__block-left">
                <div>
                   <img  class="footer__logo" :src="footer_logo" />
                </div>
                <div class="footer__social">
                    <ul class="footer__social-list">
                        <li v-for="social in social_list" class="footer__social-item">
                            <a :href="social.url">
                                <img :src="social.icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__block-right">
                <div class="footer__navigation">
                    <div v-for="nav_block in navigation" class="footer__navigation-block">
                        <h4 class="footer__navigation-title">
                            {{ nav_block.title }}
                        </h4>
                        <ul class="footer__navigation-list" v-for="nav_item in nav_block.data">
                            <li class="footer__navigation-item">
                                <a :href="nav_item.url">
                                    {{ nav_item.label }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        background-color: #F2ECE2;

        &__decor {
            background: #0B5841;
            width: 100%;
            display: block;
            border-top-right-radius: 30px;
            border-top-left-radius: 30px;
            height: 20px;

            @media screen and (min-width: 768px) {
                height: 45px;
            }
        }

        &__container {
            background: #0B5841;
            display: flex;
            justify-content: space-between;
            padding: 25px 36px;
            flex-direction: column;

            @media screen and (min-width: 768px) {
                flex-direction: row;
            }
        }

        &__logo {
            padding-bottom: 36px;
            max-width: 240px;

            @media screen and (min-width: 768px) {
                padding-bottom: 42px;
                max-width: none;
            }
        }

        &__social {
            &-list {
                display: flex;
                flex-direction: row;
                padding-bottom: 60px;

                @media screen and (min-width: 768px) {
                    padding-bottom: 0;
                }
            }

            &-item {
                max-width: 24px;
                max-height: 24px;
                padding-left: 18px;
                padding-right: 18px;

                &:first-of-type {
                    padding-left: 0;
                }

                &:last-of-type {
                    padding-right: 0;
                }
            }
        }

        &__navigation {
            display: flex;
            flex-direction: row;

            &-title {
                font-family: 'Chivo';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: -0.02em;
                color: white;
                padding-bottom: 12px;
            }

            &-item {
                font-family: 'Chivo';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 30px;

                a {
                    color: white;
                    text-decoration: none;
                    transition: all ease-in 250ms;

                    &:hover {
                        font-weight: bold;
                    }
                }
            }

            &-block {
                width: 196px;
            }
        }
    }
</style>