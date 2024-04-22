<template>
    <mainHeader/>
    
    <!-- <div class = box>프로토타입은 어떠한 한가지의 색을 강하게 띄지 않는 모든 것들의 기본이자 원형입니다. 또 프로토타입은 최초의 인상이라는 뜻을 가지고 있습니다. 저는 이 프로토타입이라는 단어가 가진 최초의 인상이라는 의미를 2024 졸업 쇼에 참여한 우리 모두의 디자이너로서 처음 사회에 내어보이는 첫 인상이라 풀어내보았습니다 또한 이 단어를 쪼개어 각각에 의미를 부여해 본다면 프로. 어떠한 것에 찬성 또는 지지하는 투. 무엇무엇에 대하여 타입. 형태 혹은 유형</div> -->
    <!-- <div class = proto>PROTOTYPE : The first impression as a designer in society</div> -->
    

    <div class = "showinfo-background">
        <!-- <div class="aside">
        <h3>Menu</h3>
        <h4>1</h4>
        <h4>2</h4>
        <h4>3</h4>
        <h4>4</h4>
        <h4>5</h4>
        <h4>6</h4>
        <h4>7</h4>
        </div> -->

        <div class = "theme-container">
        <div class="theme-poster-container">
            <div  data-aos-delay="750" ><img class = "theme-poster" alt = "poster" src="@/assets/images/home.png"/></div>
            <div class ="theme-info-container">
                    <div class="theme-name">PROTOTYPE</div>
                    <div class="theme-info1">: The first impression as a designer in society</div>
                    <div class="theme-info2">프로토타입은 어떠한 한가지의 색을 강하게 띄지 않는 모든 것들의 기본이자 원형입니다. 또 프로토타입은 최초의 인상이라는 뜻을 가지고 있습니다. 저는 이 프로토타입이라는 단어가 가진 최초의 인상이라는 의미를 2024 졸업 쇼에 참여한 우리 모두의 디자이너로서 처음 사회에 내어보이는 첫 인상이라 풀어내보았습니다 또한 이 단어를 쪼개어 각각에 의미를 부여해 본다면 프로. 어떠한 것에 찬성 또는 지지하는 투. 무엇무엇에 대하여 타입. 형태 혹은 유형</div>
                    <!-- <div class="br-info1">JOURNEY TO PERFECT</div>
                    <div class="br-info2">버그 리포트는 사용자나 테스터가 발견한 소프트웨어의 버그를 개발 팀에 알리기 위한 문서입니다. 이 문서는 버그의 상세한 설명, 재현 방법, 그리고 발생한 환경을 포함해야 합니다. 이러한 개념을 확장하여, 우리의 세계에서 발견되는 다양한 버그', 즉 불완전성이나 오류들을 발견하고 이를 세상에 알리는 행위를 '버그 리포트'라 칭할 수 있습니다. 이는 더 나은, 발전된 세계를 향한 시행 착오의 과정이자, 현재의 세계에 대한 깊은 성찰을 의미합니다.</div>
                    <div class="br-info3">KEY WORD</div>
                    <div class="br-info4">#사랑 #평화 #자유 #소망</div> -->
            </div>
        </div>

        <div class="theme-youtube-container">
                <div id="br-youtube">
                    <iframe
                    :style="{ width: state.width, height: state.height }"
                    :src ="`https://www.youtube.com/embed/${state.videoId}`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen/>
                </div>
                <div class="br-youtube-info-container">
                    <div class="br-yt-info1"> BUG REPORT<br>뉴진스의 하입보이 봐주세요</div>
                    <div class="br-yt-info2">뉴진스 이쁘네요</div>
                </div>
            </div>
        </div>

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

    export default defineComponent({
    components: {
        mainHeader // 컴포넌트 등록
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
            state,
        };
    },
    });
</script>

<style>
@font-face {
  font-family:'Custom';
  src: url('../assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: 400;
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


.theme-container{
    margin-top:20px;
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom'
}

.theme-poster-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:40px;
}
.theme-poster{
        width: 450px;
}
.theme-info-container{
    display: flex;
    flex-direction: column;  
}
.theme-name{
        line-height: 0.7;
        font-size:65px;
}
.theme-info1{
    font-size: 45px;
    line-height: 100%;
    }
.theme-info2{
    margin-top: 170px;
    font-size: 20px;
}

.theme-youtube-container{
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    justify-content: center;
}


.box{
    position: absolute;
    width: 413px;
    height: 451px;
    left: 640px;
    top: 371px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #000000;
}

.proto{
    position: absolute;
    width: 419px;
    height: 231px;
    left: 641px;
    top: 144px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    line-height: 61px;
    display: flex;
    align-items: center;

    color: #000000;
}

.aside {
    position: sticky;
    top: 250px;
    margin-left: 0px;
    margin-right: 30px;
    width:20px;
    height: 350px;
    
    background: wheat;

}

</style>