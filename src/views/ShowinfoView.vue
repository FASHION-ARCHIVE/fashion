<template>
    <mainHeader/>
    <div class = "showinfo-background">
        <div class = "remote">
            <ui style="display: block;">
                <li style="display: block;"><button class = "show-button" @click="click1()"></button></li>
                <li style="display: block;"><button class = "show-button" @click="click2()"></button></li>
                <li style="display: block;"><button class = "show-button" @click="click3()"></button></li>
            </ui>
        </div>
    <vue-scroll-snap :fullscreen="true">
   
    <div class="item" ref = "stage1">
        <div class = "theme-container">
            <div class="theme-poster-container">
                <div data-aos = "zoom-out" data-aos-once="true">
                    <img class = "theme-poster" alt = "poster" src="@/assets/images/showinfo/tmp_poster.png"/>
                </div>
                <div class ="theme-info-container">
                    <div class="theme-name" data-aos="fade-left" data-aos-delay = 300 data-aos-once="false">PROTOTYPE</div>
                    <div class="theme-info1" data-aos="fade-left" data-aos-delay = 300 data-aos-once="false">: The first impression as a <br>designer in society</div>
                    <div class="theme-info2"  data-aos="fade-left" data-aos-delay = 300 data-aos-once="false">프로토타입은 단순한 기본형을 넘어 모든 창조의 본질적 출발점입니다. 
                        <br><br>이는 우리 디자이너들이 사회에 첫 선을 보이는 작품이자, 자신을 대표하는 첫 인상이라 할 수 있습니다. 
                        '프로'는 지지, '투'는 대상에 대하여, '타입'은 형태를 의미하며, 이를 통해 우리는 모든 형태를 지지한다는 의미를 담고 있습니다. 
                        2024년 졸업 전시를 통해, 우리는 다양한 분야의 프로토타입을 발견하고, 이를 독특한 주제로 발전시켜 나갈 것입니다. 
                        <br><br>이 과정에서 각 팀은 자신들의 아이디어와 창의력으로 새로운 시작을 제시할 것입니다.</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="item" ref = "stage2">
        <div class="theme-youtube-container">
            <div class="theme-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/E-8pyVBvCPQ`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="theme-youtube-info-container">
                <div class="theme-yt-info1"> PROTOTYPE: TEASER FILM</div>
            </div>
        </div>
    </div>

    <div class="item" ref = "stage3">
        <div class="theme-youtube-container">
            <div class="theme-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/E-8pyVBvCPQ`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="theme-youtube-info-container">
                <div class="theme-yt-info1"> 지도</div>
            </div>
        </div>
    </div>

    </vue-scroll-snap>
    <mainFooter/>
    </div>


</template>

<script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue'; // mainHeader 컴포넌트를 정확한 경로에서 import
    import mainFooter from '@/components/Footer.vue';
    import VueScrollSnap from "vue-scroll-snap";
   
    export default defineComponent({
        
    components: {VueScrollSnap,
         mainHeader, mainFooter // 컴포넌트 등록
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
            state,
        };
    },
    });
</script>

<style scoped>
    @font-face {
    font-family:'Custom';
    src: url('../assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
    font-weight: 400;
    }
    
    ::-webkit-scrollbar{
        display:none;
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

    .show-button:focus{
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
        justify-content: center;
    }

    .scroll-snap-container {
        height: 50%;
        width: 100%;
        background-image: url('@/assets/images/background_img.jpg'); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* background-position-y: -144px; */
    }

    .showinfo-background{
        /* 배경 이미지 적용 */
        display: flex;
        width: 100%;
        height: auto;
        background-image: url('@/assets/images/01_KUAD_background.png'); 
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        justify-content: center;
        margin-top: 144px;
    }

   ::-webkit-scrollbar{
        /* display:none; */
    }
    

    .theme-container{     
        padding-top:174px;
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin: 0 auto;     
    }

    .theme-poster-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:40px;
    }

    .theme-poster{
        max-width: 400px;
        width: auto;
        height: auto;
    }

    .theme-info-container{
        display: flex;
        flex-direction: column;
        width: 550px;
    }

    .theme-name{
        line-height: 1;
        font-size:80px;
        font-weight: bold;
    }

    .theme-info1{
        font-size: 40px;
        line-height: 1;
    }
    
    .theme-info2{
        margin-top: 100px;
        font-size: 20px;
    }

    .theme-youtube-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 144px;
        border-bottom: 100px;
    }

    .theme-youtube{
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }

    .theme-youtube-info-container{
            display: flex;
            margin-top: 5px;
            flex-direction: row;
            justify-content: center;
    }

    .theme-yt-info1{
            font-size:30px;
    }

</style>