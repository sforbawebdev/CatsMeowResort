<script setup>
    import { ref } from 'vue';
    const props = defineProps(['data']);
    const {title, copy} = props.data;

    let open = ref(false);
    function toggleAccordion() {
        open.value = !open.value;
    }
</script>

<template>
    <div class="AccordionItem__panel" @click="toggleAccordion" :class="{open: open}">
        <div class="AccordionItem__tab">
            <span>
                {{ title }}        
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7813 6.5835e-07C8.19551 0.000543537 8.53085 0.33677 8.53031 0.750983L8.51196 14.751C8.51142 15.1652 8.17519 15.5005 7.76098 15.5C7.34677 15.4995 7.01142 15.1632 7.01196 14.749L7.03031 0.749017C7.03086 0.334804 7.36708 -0.00054228 7.7813 6.5835e-07Z" fill="#0B5841"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.75C0 7.33579 0.335786 7 0.75 7H14.75C15.1642 7 15.5 7.33579 15.5 7.75C15.5 8.16421 15.1642 8.5 14.75 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75Z" fill="#0B5841"/>
            </svg>
        </div>
        <div class="AccordionItem__content">
            <p>
                {{ copy }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
    .AccordionItem {
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
            cursor: pointer;
            transition:  all ease-in-out 250ms;
            padding: 19px;

            &:not(.open):hover {
                background-color:#0B5841;
                color: white;

                svg {
                        path {
                            fill: white !important;
                        }
                    }
            }
    
            @media screen and (min-width: 992px) {
                padding: 20px 36px;
            }

            &.open {
                background-color:#0B5841;
                color: white;

                .AccordionItem__content {
                    height: auto;
                    overflow: visible;
                    padding-top: 28px;
                }

                .AccordionItem__tab {
                    svg {
                        path {
                            fill: white !important;
                            
                            &:first-of-type {
                                transform: rotateX(90deg);
                            }
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
            font-size: 18px;
            line-height: 21px;
        }

        &__content {
            height: 0;
            overflow: hidden;
        }

    }
</style>