<template>
   <mainHeader/>
    <div class = "behind-background">
        <div class = "remote-container">
            <div class = "remote">
                <ui style="display: block;">
                    <li style="display: block;"><div data-title = "BEHIND FILM" class = "remote-info"><button class = "show-button" @click="click1()"></button></div></li>
                    <li style="display: block;"><div data-title = "BROCHUE BEHIND FILM" class = "remote-info"><button class = "show-button" @click="click2()"></button></div></li>
                    <li style="display: block;"><div data-title = "BEHIND CUT" class = "remote-info"><button class = "show-button" @click="click3()"></button></div></li>
                </ui>
            </div>
        </div>

    <vue-scroll-snap :fullscreen="true">


    <div class="item" ref = "stage1">
        <div class="behind-youtube-container">
            <div class="behind-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/mI1HqAhsW-4`"
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

            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000008 4.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000008 5.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000009 2.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000010 5.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000011 4.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000013 4.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000015 4.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000016 4.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000018 4.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000022 2.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000026 2.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000034.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/000040.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3329.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3331.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3340.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3345.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3353.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3360.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3367.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3378.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3390.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3391.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3393.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3397.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3399.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3404.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3408.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3414.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3423.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3434.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3436.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3441.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3445.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3458.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3463.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3481.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3485.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3489.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3492.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3509.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3510.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3511.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3514.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3519.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3560.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3569.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3572.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3580.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3581.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3583.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3584.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3587.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3591.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3592.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3600.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3607.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3611.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3620.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3625.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3634.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3653.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3678.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3679.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3682.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3693.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3698.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3707.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3709.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3790.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3837.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3883.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3909.webp"/></swiper-slide>            
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3916.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3933.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3945.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3983.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3986.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_3990.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4011.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4015.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4030.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4033.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4035.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4037.webp"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/GET_4055.webp"/></swiper-slide>
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
    .remote-container{
        position: fixed;
        display: flex;
        align-items: center;
        z-index: 1000;
        height: 100vh;
        top: 7%;
        right: 10%;
        justify-content: center;
    }

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

        z-index: 2000;
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

    /* .show-button:hover{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/icon/bt_white.png) 0% 0% / 100% 100% no-repeat;
    }     */

    .remote{
        display: flex;
        flex-direction: column;
        text-align: right;
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
        width: 80vw;
        display: flex;

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
        
        width: 80%;
        height: 85%;
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
        width: 95vw;
    }

    .remote-container{
        display: none;
    }
}
</style>