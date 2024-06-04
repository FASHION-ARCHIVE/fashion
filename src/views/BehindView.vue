<template>
   <mainHeader/>
    <div class = "behind-background">
        <div class = "remote">
            <ui style="display: block;">
                <li style="display: block;"><div data-title = "BEHIND FILM" class = "remote-info"><button class = "show-button" @click="click1()"></button></div></li>
                <li style="display: block;"><div data-title = "BROCHUE BEHIND FILM" class = "remote-info"><button class = "show-button" @click="click2()"></button></div></li>
                <li style="display: block;"><div data-title = "BEHIND CUT" class = "remote-info"><button class = "show-button" @click="click3()"></button></div></li>
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
                <div class="behind-yt-info1">BEHIND FILM</div>
            </div>
        </div>
    </div>

    <div class="item" ref = "stage2">
        <div class="behind-youtube-container">
            <div class="behind-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/L03z0BlJsQU`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="behind-youtube-info-container">
                <div class="behind-yt-info1">BROCHURE BEHIND FILM</div>
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

            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test1.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test0.png"/></swiper-slide>
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

    .remote-info{
        position: relative;
    }


    .remote-info:hover:before {
    opacity: 1;
    }

    .remote-info::before {
        content: attr(data-title);
        display: block;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        transition: all 0.15s ease-in-out;
        background: rgb(90, 90, 90);
        color: #fff;
        font-size: 15px;
        padding: 5px 10px;
        top: -5px;
        right: 0;
        white-space: nowrap;
    }

    .show-button{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/icon/bt_gray.png) 0% 0% / 100% 100% no-repeat;
        will-change: transform;
    }

    .show-button:hover{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/icon/bt_white.png) 0% 0% / 100% 100% no-repeat;
    }    

    .remote{
        position: fixed;
        margin-left: 1200px;
        margin-top: 18%;
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
    justify-content: center;
    display: flex;
    }

    .scroll-snap-container {
        height: 100%;
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
        margin-top: 100px;
    }

    .behind-youtube-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
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
        color: rgb(96, 96, 96);
    }

    .image-slide-container{
        margin-top: 100px;
        width: 960px;
        height: 540px;
        display: grid;

        place-items: center;
        align-items: center;
        justify-content: center;
        font-family: 'Custom';
        
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }

    .swiper {
    width: 100%;
    height: 100%;
    margin: auto;
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

    @media screen and (max-width: 768px) {
    
    .image-slide-container{
         width: 300px;
         height: 650px;
         margin-top: 50px;
        display: flex;
        /* flex-direction: column; */
        font-family: 'Custom';
        justify-content: center;
    }
}
</style>