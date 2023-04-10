<script>
export default {
  data() {
    return { a: 1 }
  },
  created() {
    console.log(this.a) // 1
    console.log(this.$data) // { a: 1 }
  }
}
</script>
<template>
    <div class="Accordion">
        <div class="Accordion__container">
            <div class="Accordion__block">
                <h2  class="Accordion__title">
                    <span>
                        Pamper your cat to
                    </span>
                    <span>
                        Purrrrrrrrrrrfection
                    </span>
                </h2>
                <div  class="Accordion__wrap">
                    <ul class="Accordion__list">
                        <li class="Accordion__item">
                            <div class="Accordion__panel">
                                <div class="Accordion__tab">
                                    <span>
                                        Grooming and Spa Services
                                    </span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z" fill="#0B5841"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z" fill="#0B5841"/>
                                    </svg>
                                </div>
                                <div class="Accordion__content">
                                    <p>
                                        Grooming services include professional bathing, brush-outs, nail trims, ear cleaning, and even fur styling. The resort also offers spa services such as massages, facials, and aromatherapy treatments to pamper the cats. Grooming and spa services are designed to enhance the cat's physical appearance and overall well-being. Additionally, the resort provides personalized grooming services tailored to the specific needs of each cat, such as specialized shampoos for sensitive skin or hypoallergenic grooming products for cats with allergies. With professional grooming services, cats can look and feel their best during their stay at the luxury cat resort.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="Accordion__item">
                            <div class="Accordion__panel open">
                                <div class="Accordion__tab">
                                    <span>
                                        Dining
                                    </span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z" fill="#0B5841"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z" fill="#0B5841"/>
                                    </svg>
                                </div>
                                <div class="Accordion__content">
                                    <p>
                                        Grooming services include professional bathing, brush-outs, nail trims, ear cleaning, and even fur styling. The resort also offers spa services such as massages, facials, and aromatherapy treatments to pamper the cats. Grooming and spa services are designed to enhance the cat's physical appearance and overall well-being. Additionally, the resort provides personalized grooming services tailored to the specific needs of each cat, such as specialized shampoos for sensitive skin or hypoallergenic grooming products for cats with allergies. With professional grooming services, cats can look and feel their best during their stay at the luxury cat resort.
                                    </p>
                                </div>
                            </div>
                        </li>                        
                    </ul>
                </div>
            </div>
            <div class="Accordion__block">
                <img src="/cat-tongue.png" class="Accordion__image" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.Accordion {
    padding: 50px 0px;

    &__container {
        display: flex;
        flex-direction: row;
    }

    &__title {
        font-family: 'Chivo';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: -0.02em;
        color: #0B5841;
        padding-bottom: 50px;

        span {
            display: block;
            width: 100%;
            padding: 10px 0px;

            &:first-of-type {
                text-align: left;
            }

            &:last-of-type {
                text-align: right;
            }
        }

    }

    &__block {
        width: 50%;
        padding: 0px 18px;
    }

    &__image {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
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

    &__panel {
        font-family: 'Chivo';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.02em;
        color: #0B5841;
        border: 1px solid #0B5841;
        border-radius: 30px;
        padding: 20px 36px;
        cursor: pointer;
        &.open {
            background-color:#0B5841;
            color: white;
            .Accordion__content{
                height: auto;
                overflow: visible;
                padding-top: 28px;
            }

            .Accordion__tab{
                svg {
                    path {
                        fill: white !important;
                    }
                }
            }
        }
    }

    &__tab {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
    }
}
</style>