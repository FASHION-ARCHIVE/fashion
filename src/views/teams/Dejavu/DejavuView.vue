<template>
    <mainHeader/>
    <div class = "team-background">
        <div class ="group-container">
            <div class="team-poster-container" data-aos="fade-up" data-aos-once="true">
                <img class="team-poster" alt="poster" src="@/assets/images/dejavu/poster/Dejavu_TEAMPOSTER.jpg" />
                <div class ="team-info-container">
                    <div class="team-title">
                        <div class="team-name">Déjà vu</div>
                        <!-- <div class="br-info1">JOURNEY TO PERFECT</div> -->
                    </div>
                    <div class="team-context">기억의 속삭임과 현실의 경계를 넘나들며, 순수함과 죄책감, 탄생과 소멸 등 반복되는 삶의 순환 속 인간의 본능을 Déjà vu로 풀어내었다. 이것은 명확히 인식되기도, 때로는 우리의 심연 속에서 잊혀지기도 한다.
                        <br><br>모순성의 상장인 ‘친절한 금자씨’를 뮤즈로 ‘순수의 원형’, ‘마녀의 탈을 쓴 천사’, ‘타락과 복수'라는 세 단계를 구현하였다. 후반부로 갈수록 고조되는 감정에 따라 깊어지는 색채와 소재를 사용하였으며 본능에서 비롯된 원초적이고 솔직한 감정을 재해석하였다.
                    <br><br>이를 통해 우리 자신과 인간 내면의 복합적인 세계에 대해 더 깊이 생각해 보는 계기를 마련하고자 한다.
                    </div>
                    <div class="team-keyword">
                        <div class="team-info3">KEY WORD</div>
                        <div class="team-info4">#CIRCULATION #ODD #REINCARNATION</div>
                    </div>
                </div>
            </div>

            <div class = "video-container">
                <iframe src = "https://www.youtube.com/embed/V0TAZCDeWpA" frameborder = "0" allowfullscreen =""></iframe>
            </div>
            <!-- <p style = "margin-left: 10px;">file by  -->
                <!-- <a class = "sns-link" href="https://www.instagram.com/jeonjueum/" target="_blank">@jeonjueum</a>, <a class = "sns-link" href="https://www.instagram.com/yes.eor_no/" target="_blank">@yes.eor_no</a></p> -->
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
            <div class = "members-info-container">
                <div class="members" data-aos="fade-up" data-aos-once="true">TEAM MEMBERS</div>
            </div>

            <div class="team-members-list" data-aos="fade-up" data-aos-once="true">
                <div class="team-image-item">
                    <router-link to = "/Dejavu/leesujin"><img alt="member" src="@/assets/images/dejavu/1/PROFILE PHOTO 3_4_DEJAVU_LEESUJIN.jpg" /></router-link>
                    <div class="caption">TEAM LEADER<br>이수진</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Dejavu/chosoojin"><img alt="member" src="@/assets/images/dejavu/2/PROFILE PHOTO 3_4_DEJAVU_CHOSOOJIN.jpeg" /></router-link>
                    <div class="caption">SUB LEADER<br>조수진</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Dejavu/leeokyin"><img alt="member" src="@/assets/images/dejavu/3/PROFILE PHOTO 3_4_ Deja vu_ LEE LOKYIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>이낙연</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Dejavu/inoue-rin"><img alt="member" src="@/assets/images/dejavu/4/PROFILE PHOTO 3_4_Deja vu_INOUE RIN.jpg"/></router-link>
                    <div class="caption">TEAM MEMBER<br>이노우에린</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Dejavu/yimsoyoon"><img alt="member" src="@/assets/images/dejavu/5/PROFILE PHOTO 3_4_ Deja vu_ YIMSOYOON.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>임소윤</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Dejavu/leechaeon"><img alt="member" src="@/assets/images/dejavu/6/PROFILE PHOTO 3_4_ Deja vu_ LEE CHAEYEON.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>이채연</div>
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
    .sns-link{
        color: #000;
    }

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

    .team-background{
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

    .group-container{
        margin-top:30px;
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin-bottom: 100px;
    }

    .team-poster-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:40px;
    }

    .team-poster{
        max-width: 400px;
        object-fit: contain;
        /* width: auto; */
        /* height: auto; */
    }

    .team-info-container{
        width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        padding-left: 50px;
        margin-top: 30px;
    }

    .team-name{
        /* line-height: 0.7; */
        font-size:55px;
        font-weight: 700;
    }

    .team-info1{
        font-size: 25px;
    }

    .team-context{
        font-size:18px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .team-keyword{
        margin-bottom: 40px;
    }

    .team-info3{
        margin-top: 0px;
        font-size:26px;
        font-weight: 700;
    }

    .team-info4{
        font-size:18px;
    }

    .team-youtube-container{
        display: flex;
        margin-top: 100px;
        flex-direction: column;
        justify-content: center;
    }

    .team-youtube{
        display: flex;
        justify-content: center;
    }

    .team-youtube-info-container{
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: center;
        width: 960px;
    }

    .team-youtube-info{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .team-yt-info1{
        font-size:30px;
    }

    .team-yt-info2{
        font-size:20px;
    }

    .members{   
        font-size:28px;
    }

    .team-members-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        flex-direction: row;
    }

    .members-info-container{
        margin-top: 100px;
        display: flex;
        flex-direction: row;
    }
    .team-image-item img {
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
    .team-name{
        /* line-height: 0.7; */
        font-size:48px;
        font-weight: 700;
    }

    .team-poster-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .team-members-list{
        align-items: center;
    }

    .team-poster{
        width: 90vw;
        margin: 0;
    }

    .team-info-container{
        width: 90vw;
        margin: 0;
        padding: 0;
    }
    .video-container{
        margin-left: 20px;
        margin-right: 20px;
    }

    .members{   
        margin-left: 10px
    }

    .team-context{
        background-color: rgba(255, 255, 255, 0.7);
        padding: 10px;
        border-radius: 10px;
    }
}

@media screen and (max-width: 768px) {
    .team-members-list{
        flex-direction: column;
    }
}
</style>