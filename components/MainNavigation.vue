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
        left: 0;
        height: 100%;
        width: 86vw;
        background-color: #BA692E;

        @media screen and (min-width: 1440px) {
            width: 50vw;
        }

        &__list {
            padding: 60px;
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

            @media screen and (min-width: 768px) {
                font-size: 80px;
                line-height: 100px;
            }
        }
    }
</style>