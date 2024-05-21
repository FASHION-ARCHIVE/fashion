<template>
    <div class = "showinfo-background">
        
    <vue-scroll-snap :fullscreen="true">
   
    <div class="item" ref = "stage1">
        <div class = "theme-container">
            <div class="theme-poster-container">
                <div data-aos = "zoom-out" data-aos-duration="1000" data-aos-once="true">
                    <img class = "theme-poster" alt = "poster" src="@/assets/images/showinfo/mainTheme_poster.jpg" @click = "click1_1()"/>
                </div>
            </div>
        </div>
    </div>
    
    <div class="item" ref = "stage1_1"> 
        <div class ="theme-info-container">
                    <div class="theme-name">PROTOTYPE</div>
                    <div class="theme-info1">: The first impression as a <br>designer in society</div>
                    <div class="theme-info2" @click = "click2">프로토타입은 단순한 기본형을 넘어 모든 창조의 본질적 출발점입니다. 
                        <br><br>이는 우리 디자이너들이 사회에 첫 선을 보이는 작품이자, 자신을 대표하는 첫 인상이라 할 수 있습니다. 
                        '프로'는 지지, '투'는 대상에 대하여, '타입'은 형태를 의미합니다. 이를 통해 우리는 모든 형태를 지지한다는 의미를 담고 있습니다. 
                        2024년 졸업 전시를 통해, 우리는 다양한 분야의 프로토타입을 발견하고, 이를 독특한 주제로 발전시켜 나갈 것입니다. 
                        <br><br>이 과정에서 각 팀은 자신들의 아이디어와 창의력으로 새로운 시작을 제시할 것입니다.</div>
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
        <div class = map-container>
            <img src = "@/assets/images/showinfo/약도.jpg">
            <div class = map-info-container>
                <b>[LAYER41]</b>
                <br>41, Achasan-ro 9-gil, Seongdong-gu, Seoul
                <br>서울 성동구 성수동2가 277-4 (아차산로9길 41)

                <br><br><b>[유료주차장]</b>
                <br>KT 성수분국 노상공영주차장 (252m) : 서울 성동구 성수동 2가 280-50 / 평일 9-19시 운영 / 토요일 9-15시 운영 / 공휴일 무료 개방
                <br>성수에이팩센터 (422m) : 서울 성동구 성수동2가 289-5 / 24시간 운영
                <br>아이에스 biz타워(419m) : 서울 성동구 성수동2가 289-319 / 24시간 운영
            </div>
        </div>
    </div>

    <div class="item" ref = "stage4">
        <div class = credit-container>
            <h2>CREDIT</h2>
            <div class="section">
                <p class="title">졸업패션쇼준비위원회</p>
                <p class="items">위원장 정경모</p>
                <p class="items">기획 윤소혜 강소원</p>
                <p class="items">연출 오승민 정숭귤</p>
                <p class="items">브로셔 유하영 박혜빈</p>
                <p class="items">전시 곽도훈 최준우</p>
                <p class="items">홍보 윤도희 김지인</p>
                <p class="items">회계 장예진</p>
                <p class="items">서기 이은지</p>
            </div>
            <div class="section">
                <p class="title">지도교수</p>
                <p class="items">이소영 최선영</p>
            </div>
            <div class="section">
                <p class="title">포스터 그래픽</p>
                <p class="items">김연우 @yeonnuv</p>
            </div>
        </div>
    </div>

    </vue-scroll-snap>
    <mainFooter/>
    </div>
</template>

<script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainFooter from '@/components/Footer.vue';
    import VueScrollSnap from "vue-scroll-snap";

   
    export default defineComponent({
        
    components: {VueScrollSnap,
         mainFooter // 컴포넌트 등록
    },

    methods:{
    click1(){
      this.$refs.stage1.scrollIntoView({ behavior:"smooth"});
    },
    click1_1(){
      this.$refs.stage1_1.scrollIntoView({ behavior:"smooth"});
    },
    click2(){
      this.$refs.stage2.scrollIntoView({ behavior:"smooth"});
    },
    click3(){
      this.$refs.stage3.scrollIntoView({ behavior:"smooth"});
    },
    click4(){
      this.$refs.stage4.scrollIntoView({ behavior:"smooth"});
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

    ::-webkit-scrollbar{
        display:none;
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
        /* background-position-y: -144px; */    
    }

    .showinfo-background{
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

   ::-webkit-scrollbar{
        /* display:none; */
    }
    
    .map-info-container{
        font-size: 12px;
        width: 90vw;
    }

    .theme-container{     
        /* padding-top:10%; */
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin-top: 100px;     
    }

    .theme-poster-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:40px;
    }

    .theme-poster{
        width: 90vw;
        height: 80vh;
        object-fit: contain;
    }

    .theme-info-container{
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin-top: 100px;
        /* align-items: center; */
        justify-content: center;
    }

    .theme-name{
        /* line-height: 1; */
        font-size:64px;
        font-weight: bold;
        display: grid;
        place-items: center;
        width: auto;
    }

    .theme-info1{
        font-size: 28px;
        line-height: 1;
        display: grid;
        place-items: center;
    }
    
    .theme-info2{
        margin-top: 50px;
        font-size: 14px;
        font-weight: 400;
        background-color: rgba(255, 255, 255, 0.7);
        padding: 10px;
        border-radius: 8px;
    }

    .theme-youtube-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5%;
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

    .map-container{
        margin-top: 100px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .map-container img{
        margin-top: 100% - 100px;
        width: 100vw;
        height: 40vh;
        object-fit: contain;
        
    }

    .credit-container{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .credit-container h2{
        text-align: center;
    }

    .credit-list {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
}

.section {
    margin-bottom: 20px;
}

.title {
    font-size: 1.5em;
    margin-bottom: 10px;
    font-weight: bold;
}

.items {
    font-size: 1.2em;
    margin: 5px 0;
}
</style>