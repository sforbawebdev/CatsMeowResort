<script>
export default {
    setup(props, context) {
        function sendEvent() {
            context.emit('clickTab');
        }

        return {
            sendEvent
        }
    }
}
</script>
<template>
    <button @click="sendEvent" class="NavigationTab">
        <svg width="27" height="36" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8668 23.5068C15.8528 25.969 18.2692 27.9788 21.264 27.9959C24.2589 28.0129 26.6981 26.0308 26.7121 23.5686C26.7261 21.1065 24.3097 19.0967 21.3148 19.0796C18.32 19.0625 15.8808 21.0447 15.8668 23.5068ZM21.5048 16.5458C18.5145 16.7105 15.9805 14.8511 15.8451 12.3926C15.7096 9.93411 18.024 7.80757 21.0144 7.64282C24.0047 7.47808 26.5387 9.33751 26.6741 11.796C26.8096 14.2545 24.4952 16.381 21.5048 16.5458ZM12.5461 9.17333C9.70391 9.60187 7.10287 7.97926 6.73646 5.54914C6.37005 3.11902 8.37702 0.801616 11.2192 0.373081C14.0613 -0.0554538 16.6623 1.56715 17.0287 3.99728C17.3952 6.4274 15.3882 8.7448 12.5461 9.17333ZM9.64054 23.5185L9.64059 23.5185C11.3392 22.9083 14.9492 21.6116 14.9492 17.788C14.9492 13.9161 11.0996 12.5613 9.51529 12.0038C9.25825 11.9133 9.06084 11.8438 8.94916 11.788C8.65431 11.6405 8.1421 11.1019 7.48944 10.4155C5.92863 8.77411 3.56459 6.28798 1.44916 6.28798C-1.55084 6.28798 -4.55084 9.78798 -4.55084 11.788C-4.55084 13.388 -3.55084 16.4546 -3.05084 17.788C-3.55084 19.1213 -4.55084 22.188 -4.55084 23.788C-4.55084 25.788 -2.55084 29.288 1.44916 29.288C4.33539 29.288 6.44066 26.6847 7.76495 25.0472C8.27598 24.4153 8.67072 23.9272 8.94916 23.788C9.09941 23.7129 9.33994 23.6264 9.64025 23.5186L9.64035 23.5185L9.64054 23.5185ZM6.73646 30.1881C7.10287 27.758 9.70391 26.1354 12.546 26.5639C15.3882 26.9924 17.3952 29.3098 17.0287 31.74C16.6623 34.1701 14.0613 35.7927 11.2192 35.3642C8.37702 34.9356 6.37005 32.6182 6.73646 30.1881Z" fill="black"/>
        </svg>
    </button>
</template>

<style  lang="scss" scoped>
    button {
        border: 0;
        background: #BA692E;
        position: fixed;
        width: 41px;
        height: 70px;
        left: -1px;
        transform: translateX(0vw);
        top: 24px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        cursor: pointer;
        z-index: 1;
        transition: all ease-in-out 250ms;

        @media screen and (min-width: 1280px) {
            top: 71px;
        }

        &.open {
            transform: translateX(86vw);

            @media screen and (min-width: 1280px) {
                transform: translateX(50vw);
            }

        }
    }
</style>