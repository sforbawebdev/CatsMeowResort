
<template>
    <aside class="MainNavigation">
        <div class="MainNavigation__container">
            <ul class="MainNavigation__list">
                <li  class="MainNavigation__item">
                    <a href="#" class="MainNavigation__link">
                        Home
                    </a>
                </li>
                <li class="MainNavigation__item">
                    <a href="#" class="MainNavigation__link">
                        About Us
                    </a>
                </li>
                <li class="MainNavigation__item">
                    <a href="#" class="MainNavigation__link">
                        Stay
                    </a>
                </li>
                <li class="MainNavigation__item">
                    <a href="#" class="MainNavigation__link">
                        Grooming
                    </a>
                </li>
                <li class="MainNavigation__item">
                    <a href="#" class="MainNavigation__link">
                        Party
                    </a>
                </li>
            </ul>
        </div>
        <NavigationTab />
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

        @media screen and (min-width: 1440px) {
            width: 50vw;
            transform: translateX(-50vw);
        }

        &__list {
            padding: 60px 24px;

            @media screen and (min-width: 1440px) {
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