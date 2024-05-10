<template>
    <mainHeader/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />


    <div class = "black-bg" v-if = "modalOpened == true">
        <div v-click-outside = "onClickOutside" class = "white-bg">
            <!-- <span class="material-symbols-outlined" @click = "onClickOutside">close</span>  -->
            <img size = 100vw alt = "behind-img" src="@/assets/images/test_123.jpeg"/>
            <div class = "designer-info">
                <div class = "designer-name"><router-link to = "/team-list">정제영</router-link></div>
            </div>
            
        </div>
    </div>

    <div class = "runway-background">


    

        <div class = "remote">
             <ui style="display: block;">
                 <li style="display: block;"><div data-title = "전체 영상" class = "remote-info"><button class = "show-button" @click="click1()"></button></div></li>
                 <li style="display: block;"><div data-title = "protophobia" class = "remote-info"><button class = "show-button" @click="click2()"></button></div></li>
                 <li style="display: block;"><div data-title = "oak" class = "remote-info"><button class = "show-button" @click="click3()"></button></div></li>
                 <li style="display: block;"><div data-title = "ANACHRONIA" class = "remote-info"><button class = "show-button" @click="click4()"></button></div></li>
                 <li style="display: block;"><div data-title = "BUG REPORT" class = "remote-info"><button class = "show-button" @click="click5()"></button></div></li>
                 <li style="display: block;"><div data-title = "Loft 1.0" class = "remote-info"><button class = "show-button" @click="click6()"></button></div></li>
                 <li style="display: block;"><div data-title = "Deja vu" class = "remote-info"><button class = "show-button" @click="click7()"></button></div></li>
             </ui>
        </div>


    <div class = "runway-container">


        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage1">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/E-8pyVBvCPQ`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">전체 영상</div>
            </div>
        </div>

 
        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage2">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">protophobia</div>
            </div>
        </div>
            <div class = "image-slide-container">
                <swiper
                    :slidesPerView = "4"
                    :grid="{
                        rows: 2, 
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >

                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg" @click = "모달창열기"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
                <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage3">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">oak</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg" @click = "모달창열기"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage4">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">ANACHRONIA</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg" @click = "모달창열기"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage5">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">BUG REPORT</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg" @click = "모달창열기"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage6">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">Loft 1.0</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg" @click = "모달창열기"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage7">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">Deja vu</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg" @click = "모달창열기"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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
 
 <mainFooter/>
 </template>
 
 <script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue';
    import mainFooter from '@/components/Footer.vue';
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import vClickOutside from 'click-outside-vue3';

    import 'swiper/css';

    import 'swiper/css/grid';
    // import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    import { Grid, Navigation, History } from 'swiper/modules';

    export default defineComponent({
    directives: {
        clickOutside: vClickOutside.directive
    },
    components: {
        mainHeader, 
        Swiper, SwiperSlide, 
        mainFooter,
    },
    data() {
        return {
            modalOpened: false,
        };
    },
    methods:{
    click1(){
    this.$refs.stage1.scrollIntoView({ behavior:"smooth", block: "end"});
    },
    click2(){
    this.$refs.stage2.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click3(){
    this.$refs.stage3.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click4(){
    this.$refs.stage4.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click5(){
    this.$refs.stage5.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click6(){
    this.$refs.stage6.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click7(){
    this.$refs.stage7.scrollIntoView({ behavior:"smooth", block: "center"});
    },

    모달창열기(){
        this.modalOpened = true;
    },
    onClickOutside(){
        this.modalOpened = false;
    },
},    
    setup() {

         const state = reactive({
             videoId: 'UTH1VNHLjng',
             width: '960',
             height: '540',
         });
 
         function resizeVideo() {
             const maxWidth = 960; // 최대 너비
             const aspectRatio = 540 / 960; // 비디오의 가로세로 비율 1130, 662
 
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
            state, modules: [Grid, Navigation, History],
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

    .button-info{
        display: none;
        position: relative;
    }

    .button-info::after{
        position: relative;
        display: block;
    }

    .show-button:hover .button-info{
        display: block; 
    }

    .material-symbols-outlined{
        cursor: pointer;
        border: none;
        margin-left: auto;
        margin-top: 10px;
    }

    .designer-info{
        display: flex;
        flex-direction: column;
    }

    .designer-name{
        margin-left: auto;
        padding-right: 30px;
    }

    .designer-name a{
        color: black;
    }

     .modal-swiper{
        height: 85%;
        margin-bottom: 10px;
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
        width: 30%;
        height: 80%;
        /* background: white; */
        /* border-radius: 4px; */
        padding: 0px 10px 0px 10px;

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

        background: url(@/assets/images/icon/bt_black.png) 0% 0% / 100% 100% no-repeat;
    }

    .show-button{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
        background: url(@/assets/images/icon/bt_gray.png) 0% 0% / 100% 100% no-repeat;
    }

    .show-button:hover{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
        background: url(@/assets/images/icon/bt_white.png) 0% 0% / 100% 100% no-repeat;
    }    

    .remote{
        position: fixed;
        margin-left: 1200px;
        margin-top: 14%;
        z-index: 1;
        display: flex;
        flex-direction: column;
    }

    .runway-background{
    /* 배경 이미지 적용 */
    display: flex;
    height: auto;
    background-image: url('@/assets/images/background_img.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-color: #e1e1e1; */
    justify-content: center;
    margin-top: 50px; /* 헤더 높이 맞춰서 마진 */
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
    
    margin-bottom: 100px;

    }

    .runway-youtube{
    padding-top: 100px;
    display: flex;
    justify-content: center;
    }

    .runway-youtube-info-container{
        display: flex;
        margin-top: 5px;
        flex-direction: row;
        justify-content: left;
        width: 960px;
        margin-left: 85px;
    }

    .runway-yt-info1{
        font-size:30px;
        justify-content: left;
    }
 

    .image-slide-container{
        width: 880px;
        height: 660px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        margin: auto;
        margin-bottom: 100px;
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
    overflow: hidden;
    }

    .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* transition-duration: 0.5s; */
    transition: all 0.2s linear;
    }

    .image-slide-container:hover img{
        
        transition-duration: 0.3s;
        filter: brightness(0.6);

    }

    .image-slide-container img:hover{
        filter: brightness(1);
        transition-duration:0.1s;
        transform: scale(1.1, 1.1);
    }
 </style>