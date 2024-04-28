<template>
    <mainHeader/>



    <div class = "black-bg" v-if = " 모달창열림 == true">
        <div class = "white-bg">
            <button class="close-button" @click = "모달창닫기" style=""></button>
            <p>정제영</p>
            <div class = "modal-swiper">
                <swiper
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test1.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test2.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test3.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test4.jpeg"/></swiper-slide>
                </swiper>
            </div>
        </div>
    </div>

    <div class = "runway-background">


    

        <div class = "remote">
             <ui style="display: block;">
                 <li style="display: block;"><button class = "show-button" @click="click1()"></button></li>
                 <li style="display: block;"><button class = "show-button" @click="click2()"></button></li>
                 <li style="display: block;"><button class = "show-button" @click="click3()"></button></li>
             </ui>
        </div>


    <div class = "runway-container">


        <div class="runway-youtube-container" ref = "stage1">
            <div class="runway-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/E-8pyVBvCPQ`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1"> BEHIND FILM</div>
            </div>
        </div>

 
        <div class="runway-youtube-container" ref = "stage2">
            <div class="runway-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1"> BROCHURE BEHIND FILM</div>
            </div>
        </div>

        <div class = "image-slide-container" ref = "stage3">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test0.png" @click = "모달창열기"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test1.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test2.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test3.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test4.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test5.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/behind/bh_test0.png"/></swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <swiper-slide>Slide 11</swiper-slide>
            <swiper-slide>Slide 12</swiper-slide>
            <swiper-slide>Slide 13</swiper-slide>
            <swiper-slide>Slide 14</swiper-slide>
            <swiper-slide>Slide 15</swiper-slide>
            <swiper-slide>Slide 16</swiper-slide>

            </swiper>
        </div>

    </div>
 </div>
 
 
 </template>
 
 <script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue';
    import {Swiper, SwiperSlide} from 'swiper/vue';

    import 'swiper/css';

    import 'swiper/css/grid';
    // import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    import { Grid, Navigation } from 'swiper/modules';

    export default defineComponent({
    components: {
        mainHeader, Swiper, SwiperSlide
    },
    data() {
        return {
            모달창열림: false,
        };
    },
    methods:{
    click1(){
    this.$refs.stage1.scrollIntoView({ behavior:"smooth",block: "start" ,inline: "nearest"});
    },
    click2(){
    this.$refs.stage2.scrollIntoView({ behavior:"smooth"});
    },
    click3(){
    this.$refs.stage3.scrollIntoView({ behavior:"smooth"});
    },

    모달창열기(){
        this.모달창열림 = true;
    },
    모달창닫기(){
        this.모달창열림 = false;
    },
},    
    setup() {
         
         const state = reactive({
             videoId: 'UTH1VNHLjng',
             width: '1130',
             height: '662',
         });
 
         function resizeVideo() {
             const maxWidth = 1130; // 최대 너비
             const aspectRatio = 662 / 1130; // 비디오의 가로세로 비율
 
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
             state, modules: [Grid, Navigation],
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
    .modal-swiper{
        height: 80%;
    }


    .black-bg{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        padding: 20px;
        z-index: 100;
    }

    .white-bg{
        width: 50%;
        height: 70%;
        background: white;
        border-radius: 8px;
        padding: 20px;

        margin: auto;
        margin-top: 3%;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;

        display: flex;
        flex-direction: column;
    }

    .close-button{
        cursor: pointer;
        border: none;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/bt_black.png) 0% 0% / 100% 100% no-repeat;
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
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .runway-background{
    /* 배경 이미지 적용 */
    display: flex;
    height: auto;
    background-image: url('@/assets/images/background_img.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    margin-top: 144px;
    }
    
    .runway-container{
    width: 1130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Custom';
}

    .runway-youtube-container{
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 144px;
    margin-bottom: 100px;
    }

    .runway-youtube{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    }

    .runway-youtube-info-container{
        display: flex;
        margin-top: 5px;
        flex-direction: row;
        justify-content: center;
    }

    .runway-yt-info1{
        font-size:30px;
    }
 

    .image-slide-container{
        width: 1130px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 100px;
    }

    .swiper {
    width: 100%;
    height: 100%;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #808080;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    }
 </style>