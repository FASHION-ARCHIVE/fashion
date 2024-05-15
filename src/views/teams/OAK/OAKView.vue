<template>
    <mainHeader/>
    <div class = "team-background">
        <div class ="group-container">
            <div class="team-poster-container" data-aos="fade-up" data-aos-once="true">
                <img class="team-poster" alt="poster" src="@/assets/images/OAK/poster/OAK_TEAMPOSTER.jpg" />
                <div class ="team-info-container">
                    <div class="team-title">
                        <div class="team-name">OAK</div>
                        <!-- <div class="br-info1">JOURNEY TO PERFECT</div> -->
                    </div>
                    <div class="team-context">인간은 새로운 ‘PROTOTYPE’을 도입하여 커뮤니케이션을 목적으로 둔 로봇을 제작하게 된다.
                        <br>그들은 인간의 심적 결핍을 충족시켜주며 사회에 자연스럽게 녹아드는 걸 목적으로 제작되었다.이 로봇은 인간과 거의 흡사하게 생겼으며, 각 과정을 거쳐 제작된다 .
                    <br><br>1공정 : 인간의 형태를 민트색 젤리 텍스쳐로 구축
                    <br>2공정 : 겉 패널 및 배터리를 부착
                    <br>3공정 : 피부 패널 도색

                    <br><br>하지만 프로그램 오류로 인해 공정별 불량품이 나오게 된다.
                    <br>이런 폐기물을 하나의 예술작품으로 보는 수집가들을 위해
                    <br><br>프라이빗 “경매” 가 열리게 된다.
                    </div>
                    <div class="team-keyword">
                        <div class="team-info3">KEY WORD</div>
                        <div class="team-info4">#Grotesque #Private #Auction</div>
                    </div>
                </div>
            </div>

            <div class = "video-container">
                <iframe src = "https://www.youtube.com/embed/p7o9C-NtW2M" frameborder = "0" allowfullscreen =""></iframe>
            </div>
            <p style = "margin-left: 10px;">file by 
                <a class = "sns-link" href="https://www.instagram.com/jungiwork/" target="_blank">@jungiwork</a></p>
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
                    <router-link to = "/protophobia/choi-junwoo"><img alt="member" src="@/assets/images/OAK/01/PROFILE-PHOTO-34_OAK_LEEHANSOL.jpg" /></router-link>
                    <div class="caption">TEAM LEADER<br>이한솔</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kwak-dohoon"><img alt="member" src="@/assets/images/OAK/02/PROFILE PHOTO 3_4_OAK_YUN SEON MI.jpg" /></router-link>
                    <div class="caption">SUB LEADER<br>윤선미</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/yun-sohye"><img alt="member" src="@/assets/images/OAK/03/PROFILE PHOTO34_OAK_SASAGI.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>사사기</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/jeong-gyeongmo"><img alt="member" src="@/assets/images/OAK/04/PROFILE PHOTO 34_ OAK_ZHANG HAN.jpg"/></router-link>
                    <div class="caption">TEAM MEMBER<br>장한</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kim-minseo"><img alt="member" src="@/assets/images/OAK/05/PROFILE PHOTO 34_OAK_HUANG ZINUO.jpeg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>황자낙</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kim-heeyoung"><img alt="member" src="@/assets/images/OAK/06/PROFILE-PHOTO-34_OAK_SON-YEA-JIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>손예진</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kim-jiin"><img alt="member" src="@/assets/images/OAK/07/PROFILE PHOTO 3_4_ OAK_JUNG YEON SOO.jpeg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>정연수</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/lee-eunji"><img alt="member" src="@/assets/images/OAK/08/PROFILE PHOTO 34_OAK_LIM DOHA.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>임도하</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/youn-dohee"><img alt="member" src="@/assets/images/OAK/09/PROFILE PHOTO34_OAK_PAN MINGYU(2).jpeg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>반명옥</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/youn-dohee"><img alt="member" src="@/assets/images/OAK/10/PROFILE PHOTO34_OAK_SONG ZHAODI.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>송초제</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/youn-dohee"><img alt="member" src="@/assets/images/OAK/11/PROFILE PHOTO 34_OAK_JI XUEXIN.jpeg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>기설흠</div>
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
        font-size:64px;
        font-weight: 700;
    }

    .team-info1{
        font-size: 25px;
    }

    .team-context{
        font-size:20px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .team-keyword{
        margin-bottom: 40px;
    }

    .team-info3{
        margin-top: 0px;
        font-size:28px;
        font-weight: 700;
    }

    .team-info4{
        font-size:20px;
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