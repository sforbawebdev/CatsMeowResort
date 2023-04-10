<template>
    <footer class="footer">
        <div class="footer__decor"/>
        <div  class="footer__container">
            <div class="footer__block-left">
                <div>
                   <img  class="footer__logo" src="/logo.svg" />
                </div>
                <div class="footer__social">
                    <ul class="footer__social-list">
                        <li class="footer__social-item">
                            <a href="">
                                <img src="/insta.svg" />
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="">
                                <img src="/facebook.svg" />
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="">
                                <img src="/twitter.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__block-right">
                <div class="footer__navigation">
                    <div class="footer__navigation-block">
                    <h4 class="footer__navigation-title">
                        Company
                    </h4>
                    <ul class="footer__navigation-list">
                        <li class="footer__navigation-item">
                            <a href="#">
                                About Us
                            </a>
                        </li>
                        <li class="footer__navigation-item">
                            <a href="#">
                                Stay
                            </a>
                        </li>
                        <li  class="footer__navigation-item">
                            <a href="#">
                                Grooming
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__navigation-block">
                    <h4 class="footer__navigation-title">
                    Support
                    </h4>
                    <ul class="footer__navigation-list">
                        <li class="footer__navigation-item">
                            <a href="#">
                                FAQ
                            </a>
                        </li>
                        <li class="footer__navigation-item">
                            <a href="#">
                                Privacy
                            </a>
                        </li>
                        <li  class="footer__navigation-item">
                            <a href="#">
                                Terms & Policy
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
            height: 45px;
            width: 100%;
            display: block;
            border-top-right-radius: 30px;
            border-top-left-radius: 30px;
        }

        &__container {
            background: #0B5841;
            display: flex;
            justify-content: space-between;
            padding: 25px 36px;
        }

        &__logo {
            padding-bottom: 42px;
        }

        &__social {
            &-list {
                display: flex;
                flex-direction: row;
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

            &-list {

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
                }
            }

            &-block {
                width: 196px;
            }
        }
    }
</style>