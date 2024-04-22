<template>
    <mainHeader/>
    <div class = "bugreport-background">
        <div class ="br-container">
            <div class="br-poster-container" data-aos="fade-up">
                <img class="br-poster" alt="poster" src="@/assets/images/bugreport/poster.jpeg" />
                <div class ="br-info-container">
                    <div class="br-title">
                        <div class="br-name">BUG REPORT</div>
                        <div class="br-info1">JOURNEY TO PERFECT</div>
                    </div>
                    <div class="br-context">버그 리포트는 사용자나 테스터가 발견한 소프트웨어의 버그를 개발 팀에 알리기 위한 문서입니다. 이 문서는 버그의 상세한 설명, 재현 방법, 그리고 발생한 환경을 포함해야 합니다. 이러한 개념을 확장하여, 우리의 세계에서 발견되는 다양한 버그', 즉 불완전성이나 오류들을 발견하고 이를 세상에 알리는 행위를 '버그 리포트'라 칭할 수 있습니다. 이는 더 나은, 발전된 세계를 향한 시행 착오의 과정이자, 현재의 세계에 대한 깊은 성찰을 의미합니다.</div>
                    <div class="br-keyword">
                        <div class="br-info3">KEY WORD</div>
                        <div class="br-info4">#사랑 #평화 #자유 #소망</div>
                    </div>
                </div>
            </div>
            <div class="br-youtube-container" data-aos="fade-up">
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
            <div class="br-team-members" data-aos="fade-up">TEAM MEMBERS</div>
            <div class="br-members">
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member1" data-aos="fade-up" alt="member 1" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM LEADER<br>변상윤</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member2" data-aos="fade-up" alt="member 2" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">SUB LEADER<br>강소원</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member3" data-aos="fade-up" alt="member 3" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>오승민</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member4" data-aos="fade-up" alt="member 4" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>김상은</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member5" data-aos="fade-up" alt="member 5" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>유하영</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member6" data-aos="fade-up" alt="member 6" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>이주영</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member7" data-aos="fade-up" alt="member 7" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>이지현</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member8" data-aos="fade-up" alt="member 8" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>최지영</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member9" data-aos="fade-up" alt="member 9" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>유지민</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/coming-soon"><img class="br-member10" data-aos="fade-up" alt="member 10" src="@/assets/images/yy.jpeg" /></router-link>
                    <div class="caption" data-aos="fade-up">TEAM MEMBER<br>하나경</div>
                </div>
            </div>
        </div>
    </div>
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
            videoId: '11cta61wi0g',
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
    .bugreport-background{
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

    .br-container{
        margin-top:60px;
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        z-index: 0;
    }

    .br-poster-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:40px;
    }

    .br-poster{
        width: 450px;
    }

    .br-info-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
    }

    .br-name{
        line-height: 0.7;
        font-size:48px;
    }

    .br-info1{
        font-size: 25px;
    }

    .br-context{
        font-size:20px;
    }

    .br-info3{
        margin-top: 60px;
        font-size:25px;
    }

    .br-info4{
        font-size:20px;
    }

    .br-youtube-container{
        display: flex;
        margin-top: 100px;
        flex-direction: column;
        justify-content: center;
    }

    .br-youtube-info-container{
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        justify-content: space-between;
    }

    .br-yt-info1{
        font-size:30px;
    }

    .br-yt-info2{
        font-size:20px;
    }

    .br-team-members{
        margin-top: 100px;
        font-size:28px;
    }

    .br-members{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .br-image-item img {
        margin-top: 30px;
        display: block;
        width: 300px;
        height: 400px;
        object-fit: cover;   
    }

    .caption{
        color: black;
        margin-top: 10px;
        text-align: start;
    }

</style>