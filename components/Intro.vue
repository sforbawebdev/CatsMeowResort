<template>
    <div class="Intro">
        <div class="Intro__title">
            Where cats come to 
        </div>
        <div  class="Intro__container">
            <div class="Intro__image">
                <img src="/cat-pair-1.png" />
            </div>
            <div class="Intro__content">
                <h2  class="Intro__content-title">
                    Play and Stay 
                </h2>
                <h2 class="Intro__content-title mobile">
                    Where cats come to Play and Stay
                </h2>
                <p class="Intro__copy">
                    At The Cat's Meow, we understand that your cats are more than just pets - they are family. That's why we provide the highest quality care and attention for our four-legged guests in a safe and luxurious setting. Our resort is uniquely designed to provide enrichment and stimulation in a natural environment, with spacious suites, interactive toys, and plenty of fresh air.
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

        &__title {
                color: #0B5841;
                font-family: 'Asul';
                font-style: normal;
                font-weight: 400;
                font-size: 80px;
                line-height: 97px;
                text-align: center;
                margin-left: 58px;
                display: none;

                @media screen and (min-width: 768px) {
                   display: block;
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
            max-width: 550px;
            padding-left: 0;

            @media screen and (min-width: 768px) {
                padding-left: 25px;
            }

            @media screen and (min-width: 1440px) {
                padding-left: 153px;
            }          
  
            &-title {
                font-family: 'Asul';
                font-style: normal;
                font-weight: 400;
                font-size: 42px;
                line-height: 50px;
                padding-bottom: 30px;
                display: none;
                padding-top: 30px;

                @media screen and (min-width: 768px) {
                    padding-top: 0;
                    display: block;
                    font-size: 80px;
                    line-height: 97px;
                    padding-bottom: 40px;
                }

                &.mobile {
                    display: block;
                    @media screen and (min-width: 768px) {
                        display: none;
                    }
                }
            }
        }

        &__copy {
            font-family: 'Chivo';
            font-style: normal;
            font-weight: 400;
            padding-bottom: 40px;
            font-size: 14px;
            line-height: 22px;

            @media screen and (min-width: 1440px) {
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
            padding: 20px 55px;
            font-family: 'Chivo';
            max-height: 60px;
            font-style: normal;
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

            &:hover {
                color: #0B5841;
                background-color: white;
                border: 1px solid #0B5841;
            }
        }
    }
</style>