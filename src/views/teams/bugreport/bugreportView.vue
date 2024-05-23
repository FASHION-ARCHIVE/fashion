<template>
    <mainHeader/>
    <div class = "bugreport-background">
        <div class ="br-container">
            <div class="br-poster-container" data-aos="fade-up" data-aos-once="true">
                <img class="br-poster" alt="poster" src="https://d2d7g45pzqvt7g.cloudfront.net/bugreport/000버그리포트-표지000.jpg" />
                <div class ="br-info-container">
                    <div class="br-title">
                        <div class="br-name">BUG REPORT</div>
                        <!-- <div class="br-info1">JOURNEY TO PERFECT</div> -->
                    </div>
                    <div class="br-context">버그 리포트는 사용자나 테스터가 발견한 소프트웨어의 오류를 개발 팀에<br>알리는 문서입니다. 
                    <br><br>이 문서는 오류의 상세한 설명, 재현 방법, 발생 환경을 포함해야 합니다.<br>이 개념을 넓혀, 우리 세계에서 발견되는 다양한 '버그', 즉 불완전성이나<br>오류들을 발견하고 이를 세상에 알리는 행위 역시 '버그 리포트'라고 할 수<br>있습니다. 
                    <br><br>이는 더 나은 세계로 나아가기 위한 시행착오의 과정이며, 현재 세계에 대한<br>심도 있는 성찰을 의미합니다.
</div>
                    <div class="br-keyword">
                        <div class="br-info3">KEY WORD</div>
                        <div class="br-info4">#Error #Collision #Distortion #Dreamlike</div>
                    </div>
                </div>
            </div>

            <div class = "video-container">
                <iframe src = "https://www.youtube.com/embed/3e67GFEVTdU" frameborder = "0" allowfullscreen =""></iframe>
            </div>
            <!-- <div class="br-youtube-container" data-aos="fade-up" data-aos-once="true">
                <div class = "br-youtube">
                    <iframe
                    :style="{ width: state.width, height: state.height }"
                    :src ="`https://www.youtube.com/embed/${state.videoId}`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen/>
                </div>
                <div class="br-youtube-info-container">
                    <div class = "br-youtube-info">
                        <div class="br-yt-info1">BUG REPORT</div>
                        <div class="br-yt-info2">film by 한우림</div>
                    </div>
                </div>
            </div> -->
            <div class = "team-container">
                <div class="br-team-members" data-aos="fade-up" data-aos-once="true">TEAM MEMBERS</div>
                <!-- <div style="font-size: 14px; margin-left:10px; margin-top: 15px;" data-aos="fade-up" data-aos-once="true">photo by 이동권</div> -->
            </div>

            <div class="br-members" data-aos="fade-up" data-aos-once="true">
                <div class="br-image-item">
                    <router-link to = "/bugreport/byun-sangyoon"><img class="br-member1" alt="member 1" src="@/assets/images/bugreport/profile/PROFILE_PHOTO_3_4_BUGREPORT_BYUN SANGYOON.jpg" /></router-link>
                    <div class="caption">TEAM LEADER<br>변상윤</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/kang-sowon"><img class="br-member2" alt="member 2" src="@/assets/images/bugreport/profile/PROFILE_PHOTO_3_4_BUGREPORT_KANG SOWON.jpg" /></router-link>
                    <div class="caption">SUB LEADER<br>강소원</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/oh-seungmin"><img class="br-member3" alt="member 3" src="@/assets/images/bugreport/profile/PROFILE-PHOTO-3_4_BUG-REPORT_OH-SEUNGMIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>오승민</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/kim-sangeun"><img class="br-member4" alt="member 4" src="@/assets/images/bugreport/profile/PROFILE-PHOTO-3-4_BUG-REPORT_KIM-SANGEUN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>김상은</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/yoo-hayoung"><img class="br-member5" alt="member 5" src="@/assets/images/bugreport/profile/PROFILE PHOTO 3_4_BUG REPORT_YOO HAYOUNG.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>유하영</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/lee-juyoung"><img class="br-member6" alt="member 6" src="@/assets/images/bugreport/profile/PROFILE_PHOTO_3_4_BUGREPORT_LEEJUYOUNG.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>이주영</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/lee-jihyun"><img class="br-member7" alt="member 7" src="@/assets/images/bugreport/profile/PROFILE-PHOTO-3_4_BUG-REPORT_JIHYUN LEE.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>이지현</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/choi-jeeyoung"><img class="br-member8" alt="member 8" src="@/assets/images/bugreport/profile/PROFILE-PHOTO-3-4_BUG-REPORT__CHOI-JEEYOUNG.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>최지영</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/yu-jimin"><img class="br-member9" alt="member 9" src="@/assets/images/bugreport/profile/PROFILE_PHOTO_3_4_BUGREPORT_YU JIMIN_2.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>유지민</div>
                </div>
                <div class="br-image-item">
                    <router-link to = "/bugreport/ha-nagyeong"><img class="br-member10" alt="member 10" src="@/assets/images/bugreport/profile/PROFILE_PHOTO_3_4_BUGREPORT_HANAGYEONG.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>하나경</div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>


<script>
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import mainHeader from '@/components/TopCategory.vue'; // mainHeader 컴포넌트를 정확한 경로에서 import
import Footer from '@/components/Footer.vue';


export default defineComponent({
    components: {
        mainHeader,
        Footer
    },
    setup() {
        const state = reactive({
            videoId: '11cta61wi0g',
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
    .video-container{
        position: relative;
        height: 0;
        padding-bottom: 56.25%;
        margin-top: 50px;
    }

    .video-container iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .bugreport-background{
        /* 배경 이미지 적용 */
        display: flex;
        height: auto;
        /* width: 100%; */
        background-image: url('@/assets/images/background_img.jpg'); 
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        justify-content: center;
        margin-top: 100px;
    }

    .br-container{
        margin-top:30px;
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin-bottom: 100px;
    }

    .br-poster-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:40px;
    }

    .br-poster{
        max-width: 400px;
        width: auto;
        height: auto;
    }

    .br-info-container{
        width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        padding-left: 50px;
        margin-top: 30px;
    }

    .br-name{
        /* line-height: 0.7; */
        font-size:55px;
        font-weight: 700;
    }

    .br-info1{
        font-size: 25px;
    }

    .br-context{
        font-size:18px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .br-keyword{
        margin-bottom: 40px;
    }

    .br-info3{
        margin-top: 0px;
        font-size:26px;
        font-weight: 700;
    }

    .br-info4{
        font-size:18px;
    }

    .br-youtube-container{
        display: flex;
        margin-top: 100px;
        flex-direction: column;
        justify-content: center;
    }

    .br-youtube{
        display: flex;
        justify-content: center;
    }

    .br-youtube-info-container{
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: center;
        width: 960px;
    }

    .br-youtube-info{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .br-yt-info1{
        font-size:30px;
    }

    .br-yt-info2{
        font-size:20px;
    }

    .br-team-members{   
        font-size:28px;
    }

    .br-members{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        flex-direction: row;
    }

    .team-container{
        margin-top: 100px;
        display: flex;
        flex-direction: row;
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

@media screen and (max-width:1130px) {
    .br-name{
        /* line-height: 0.7; */
        font-size:48px;
        font-weight: 700;
    }

    .br-poster-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .br-members{
        align-items: center;
    }

    .br-poster{
        width: 90vw;
        margin: 0;
    }

    .br-info-container{
        width: 90vw;
        margin: 0;
        padding: 0;
    }
    .video-container{
        margin-left: 20px;
        margin-right: 20px;
    }

    .br-team-members{   
        margin-left: 10px
    }
}

@media screen and (max-width: 768px) {
    .br-members{
        flex-direction: column;
    }
}
</style>