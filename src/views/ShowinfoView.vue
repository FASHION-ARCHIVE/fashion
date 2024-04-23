<template>
    <mainHeader/>
    
    <!-- <div class = box>프로토타입은 어떠한 한가지의 색을 강하게 띄지 않는 모든 것들의 기본이자 원형입니다. 또 프로토타입은 최초의 인상이라는 뜻을 가지고 있습니다. 저는 이 프로토타입이라는 단어가 가진 최초의 인상이라는 의미를 2024 졸업 쇼에 참여한 우리 모두의 디자이너로서 처음 사회에 내어보이는 첫 인상이라 풀어내보았습니다 또한 이 단어를 쪼개어 각각에 의미를 부여해 본다면 프로. 어떠한 것에 찬성 또는 지지하는 투. 무엇무엇에 대하여 타입. 형태 혹은 유형</div> -->
    <!-- <div class = proto>PROTOTYPE : The first impression as a designer in society</div> -->
    

    

    <div class = "showinfo-background">
        <div class = "remote">
        <button @click="click1()">1</button>
        <br>
        <button @click="click2()">2</button>
        <br>
        <button @click="click3()">3</button>
        </div>
    <vue-scroll-snap :fullscreen="true">
   
    <div class="item" ref = "stage1">
        <div class = "theme-container">
            <div class="theme-poster-container">
                <div data-aos = "zoom-out">
                    <img class = "theme-poster" alt = "poster" src="@/assets/images/showinfo/tmp_poster.png"/>
                </div>
                <div class ="theme-info-container">
                    <div class="theme-name" data-aos="fade-left" data-aos-delay = 1000>PROTOTYPE</div>
                    <div class="theme-info1" data-aos="fade-left" data-aos-delay = 2000>: The first impression as a <br>designer in society</div>
                    <div class="theme-info2"  data-aos="fade-left" data-aos-delay = 3000>프로토타입은 단순한 기본형을 넘어 모든 창조의 본질적 출발점입니다. 
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
                :src ="`https://www.youtube.com/embed/${state.videoId}`"
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
</div>

<!-- 
    <div class = "youtube-container">
        <iframe width="1130" height="662"
        src="https://www.youtube.com/embed/E-8pyVBvCPQ?si=pCrxocg2l-zlwYsR">
        </iframe>
    </div> -->

</template>

<script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue'; // mainHeader 컴포넌트를 정확한 경로에서 import
    import VueScrollSnap from "vue-scroll-snap";
   
    export default defineComponent({
        
    components: {VueScrollSnap,
         mainHeader // 컴포넌트 등록
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
    .remote{
        position: fixed;
        margin-right: 1200px;
        margin-top: 200px;
        z-index: 300;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .item{
    height: 100%;
    background-image: url('@/assets/images/01_KUAD_background.png'); 
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    }

  .scroll-snap-container {
    height: 50%;
    width: 100%;
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
    display:none;
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
        width: 400px;

}
.theme-info-container{
    display: flex;
    flex-direction: column;  
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