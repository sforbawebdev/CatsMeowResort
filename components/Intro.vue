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

        }

        &__container {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        &__image {
            display: flex;
            align-items: end;

            img {
                border-radius: 30px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            color: #0B5841;
            padding-left: 153px;
            max-width: 550px;

            &-title {
                font-family: 'Asul';
                font-style: normal;
                font-weight: 400;
                font-size: 80px;
                line-height: 97px;
                padding-bottom: 40px;
            }
        }

        &__copy {
            font-family: 'Chivo';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            padding-bottom: 40px;
        }

        &__cta-row {
            padding-bottom: 40px;
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
        }
    }
</style>