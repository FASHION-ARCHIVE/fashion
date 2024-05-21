<template>
    <div class = "background">
        <div class = "showinfo-container">

        </div>
    </div>
</template>


<script>

    // import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    // import Footer from '@/components/Footer.vue';
</script>

<style scoped>

    .background{
        display: flex;
        height: auto;
        /* width: 100%; */
        background-image: url('@/assets/images/background_img.jpg'); 
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        justify-content: center;
        margin-top: 100px;
    }

    .showinfo-container{
        margin-top:30px;
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin-bottom: 100px;
    }
</style>