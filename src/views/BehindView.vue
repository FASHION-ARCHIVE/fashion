<template>
   <mainHeader/>
    <div class = "behind-background">
        <div class = "remote">
            <ui style="display: block;">
                <li style="display: block;"><button class = "show-button" @click="click1()"></button></li>
                <li style="display: block;"><button class = "show-button" @click="click2()"></button></li>
                <li style="display: block;"><button class = "show-button" @click="click3()"></button></li>
            </ui>
    </div>

    <vue-scroll-snap :fullscreen="true">


    <div class="item" ref = "stage1">
        <div class="behind-youtube-container">
            <div class="behind-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/E-8pyVBvCPQ`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="behind-youtube-info-container">
                <div class="behind-yt-info1"> BEHIND FILM</div>
            </div>
        </div>
    </div>

    <div class="item" ref = "stage2">
        <div class="behind-youtube-container">
            <div class="behind-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="behind-youtube-info-container">
                <div class="behind-yt-info1"> BROCHURE BEHIND FILM</div>
            </div>
        </div>
    </div>

    <div class="item" ref = "stage3">
        <div class = "image-slide-container">
            <swiper
                :pagination="{
                type: 'fraction',
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test0.png"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test1.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test2.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test3.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test4.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test5.jpeg"/></swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            </swiper>
        </div>
    </div>

    </vue-scroll-snap>
</div>


</template>

<script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue';
    import VueScrollSnap from "vue-scroll-snap";
    import {Swiper, SwiperSlide} from 'swiper/vue';

    import 'swiper/css';

    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    import { Pagination, Navigation } from 'swiper/modules';

    export default defineComponent({
    components: {VueScrollSnap,
        mainHeader, Swiper, SwiperSlide, // 컴포넌트 등록
    },

    methods:{
    click1(){
      this.$refs.stage1.scrollIntoView({ behavior:"smooth"});
    },
    click2(){
      this.$refs.stage2.scrollIntoView({ behavior:"smooth"});
    },
    click3(){
      this.$refs.stage3.scrollIntoView({ behavior:"smooth"});
    }
  },    
    setup() {
        
        const state = reactive({
            videoId: 'UTH1VNHLjng',
            width: '960',
            height: '540',
        });

        function resizeVideo() {
            const maxWidth = 960; // 최대 너비
            const aspectRatio = 540 / 960; // 비디오의 가로세로 비율

            const windowWidth = window.innerWidth; // 현재 창의 너비
            if (windowWidth < maxWidth) {
                state.width = `${windowWidth - 30}px`; // 여백 고려
                state.height = `${(windowWidth - 30) * aspectRatio}px`;
            } else {
                state.width = `${maxWidth}px`;
                state.height = `${maxWidth * aspectRatio}px`;
            }
        }

        onMounted(() => {
            resizeVideo(); // 컴포넌트 마운트 시 비디오 크기 조정
            window.addEventListener('resize', resizeVideo); // 창 크기가 변경될 때마다 호출
        });

        onUnmounted(() => {
            window.removeEventListener('resize', resizeVideo); // 컴포넌트 언마운트 시 이벤트 리스너 제거
        });

        return {
            state,  modules: [Pagination, Navigation],
        };

    },
    })
</script>

<style scoped>
    @font-face {
    font-family:'Custom';
    src: url('../assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
    font-weight: 400;
    }

    .show-button{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/bt_gray.png) 0% 0% / 100% 100% no-repeat;
    }

    .show-button:hover{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/bt_white.png) 0% 0% / 100% 100% no-repeat;
    }    

    .remote{
        position: fixed;
        margin-left: 1250px;
        margin-top: 250px;
        z-index: 300;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .item{
    height: 100%;
    /* background-image: url('@/assets/images/01_KUAD_background.png');  */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    }

    .scroll-snap-container {
        height: 50%;
        width: 100%;
        background-image: url('@/assets/images/background_img.jpg'); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    ::-webkit-scrollbar{
        display:none;
        }

    .behind-background{
        /* 배경 이미지 적용 */
        display: flex;
        width: 100%;
        height: auto;
        background-image: url('@/assets/images/background_img.jpg'); 
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        justify-content: center;
        margin-top: 144px;
    }

    .behind-youtube-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 144px;
    border-bottom: 100px;
    }

    .behind-youtube{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    }

    .behind-youtube-info-container{
        display: flex;
        margin-top: 5px;
        flex-direction: row;
        justify-content: center;
    }

    .behind-yt-info1{
        font-size:30px;
    }

    .image-slide-container{
        
        padding-top:174px;

        width: 60%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin: 0 auto;
    }

    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    /* display: block; */
    width: 100%;
    height: 100%;
    object-fit: contain;
    }

    /* .behind-img {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(@/assets/images/yy.jpeg);
        border:1px solid black;
    } */

</style>