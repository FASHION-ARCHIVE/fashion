<template>
   <mainHeader/>
   

<div class = "behind-background">
    <div class = "remote">
        <button @click="click1()">비하인드 필름</button>
        <br>
        <button @click="click2()">브로셔 비하인드 필름</button>
        <br>
        <button @click="click3()">백스테이지 포토</button>
    </div>

    <vue-scroll-snap :fullscreen="true">
        <div class="item" ref = "stage1">
            <div class="behind-youtube-container">
                <div class="behind-youtube">
                    <iframe
                    :style="{ width: state.width, height: state.height }"
                    :src ="`https://www.youtube.com/embed/EgfsXTOn_pI`"
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
                    :src ="`https://www.youtube.com/embed/TcLLpZBWsck`"
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
            <div class="behind-youtube-container">
                <div class="behind-youtube">
                    <iframe
                    :style="{ width: state.width, height: state.height }"
                    :src ="`https://www.youtube.com/embed/SIuF37EWaLU`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen/>
                </div>
                <div class="behind-youtube-info-container">
                    <div class="behind-yt-info1"> 여기무슨 사진들</div>
                </div>
            </div>
        </div>
    </vue-scroll-snap>
</div>


</template>

<script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue';
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
})
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    }

  .scroll-snap-container {
    height: 100%;
    width: 100%;
  }

  ::-webkit-scrollbar{
    display:none;
    }

    .behind-background{
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
        z-index: 0;
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
</style>