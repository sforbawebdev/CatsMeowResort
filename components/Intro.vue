<script setup>
    const props = defineProps(['data']);
    const {headline_1, headline_2, copy, image_src, cta} = props.data;
</script>
<template>
    <div class="Intro">
        <div class="Intro__title">
            {{ headline_1 }}
        </div>
        <div  class="Intro__container">
            <div class="Intro__image">
                <img :src="image_src" />
            </div>
            <div class="Intro__content">
                <h2  class="Intro__content-title">
                    {{ headline_2 }}
                </h2>
                <h2 class="Intro__content-title mobile">
                    {{ headline_1 }} {{ headline_2 }}
                </h2>
                <p class="Intro__copy">
                    {{ copy }}
                </p>
                <div class="Intro__cta-row">
                    <a class="Intro__cta" href="#">
                        Book Meow
                    </a>
                </div>
            </div>            
        </div>
    </div>
</template>

<style lang="scss">
    .Intro {
        padding: 50px 0;
        font-style: normal;

        &__title {
                color: #0B5841;
                font-family: 'Asul';
                font-weight: 400;
                text-align: center;
                margin-left: 58px;
                display: none;
                font-size: 42px;
                line-height: 50px;
            
                @media screen and (min-width: 992px) {
                   display: block;
                   font-size: 80px;
                    line-height: 97px;
                }
        }

        &__container {
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media screen and (min-width: 768px) {
                flex-direction: row;
            }
        }

        &__image {
            display: flex;
            align-items: center;
            width: 100%;

            @media screen and (min-width: 1440px) {
                width: auto;
            }

            @media screen and (min-width: 1440px) {
                align-items: flex-end;
            }

            img {
                width: 100%;
                border-radius: 30px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            color: #0B5841;
            padding-left: 0;

            @media screen and (min-width: 767px) {
                padding-left: 25px;
                max-width: 50%;
            }

            @media screen and (min-width: 1280px) {
                padding-left: 153px;
                max-width: 550px;
            }          
  
            &-title {
                font-family: 'Asul';
                font-weight: 400;
                font-size: 42px;
                line-height: 50px;
                padding-bottom: 30px;
                display: none;

                @media screen and (min-width: 992px) {
                    padding-top: 0;
                    display: block;
                    font-size: 80px;
                    line-height: 97px;
                    padding-bottom: 40px;
                }

                &.mobile {
                    display: block;
                    padding: 30px;

                    @media screen and (min-width: 768px) {
                        padding: 0;
                    }

                    @media screen and (min-width: 992px) {
                        display: none;
                    }
                }
            }
        }

        &__copy {
            font-family: 'Chivo';
            font-weight: 400;
            padding-bottom: 40px;
            font-size: 14px;
            line-height: 22px;

            @media screen and (min-width: 992px) {
                font-size: 20px;
                line-height: 30px;
            } 
        }

        &__cta-row {
            padding-bottom: 0;

            @media screen and (min-width: 768px) {
                padding-bottom: 40px;
            }
        }

        &__cta {
            background: #0B5841;
            border-radius: 30px;
            color: white;

            font-family: 'Chivo';
            max-height: 60px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            display: block;
            width: fit-content;
            letter-spacing: -0.02em;
            text-decoration: none;
            border: 1px solid transparent;
            transition:  all ease-in-out 250ms;
            padding: 14px 37px;
    
            @media screen and (min-width: 992px) {
                font-size: 20px;
                line-height: 30px;
                padding: 20px 55px;
            } 

            &:hover {
                color: #0B5841;
                background-color: white;
                border: 1px solid #0B5841;
            }
        }
    }
</style>