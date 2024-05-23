<template>
    <mainHeader/>
    <div class = "team-background">
        <div class ="group-container">
            <div class="team-poster-container" data-aos="fade-up" data-aos-once="true">
                <img class="team-poster" alt="poster" src="@/assets/images/protophobia/poster/protophobia_TEAMPOSTER.jpg" />
                <div class ="team-info-container">
                    <div class="team-title">
                        <div class="team-name">protophobia</div>
                        <!-- <div class="br-info1">JOURNEY TO PERFECT</div> -->
                    </div>
                    <div class="team-context">사람들에겐 내재된 ‘완벽을 좇는 세포’가 있다.
                    <br><br>이는 우리의 발전을 이끌었지만 동시에 맹목적으로 완벽만을 바라게 만들었다. 이러한 상황 속 각자의 세포는 변이를 일으켜 새로운 질병으로 발현되었고 다양한 형태의 질병으로 전개되었다. 이를 ‘Protophobia’로 명명하였다.
                    <br><br>우리 9명은 컬렉션을 통해 ‘Protophobia’가 발병한 사람들의 9가지 모습을 보이려 한다. [Tittle:Protophobia]는 각자의 시각으로 바라본 질병 ‘Protophobia’의 발현을 각자의 경험과 생각을 녹여 시각적인 형태로 표현하고자 한다.
                    </div>
                    <div class="team-keyword">
                        <div class="team-info3">KEY WORD</div>
                        <div class="team-info4">#Cell #Manifestation #Disease #Perfection</div>
                    </div>
                </div>
            </div>

            <div class = "video-container">
                <iframe src = "https://www.youtube.com/embed/G-BcIjiYHV4" frameborder = "0" allowfullscreen =""></iframe>
            </div>
            <!-- <p style = "margin-left: 10px;">file by <a class = "sns-link" href="https://www.instagram.com/kwonhaesun/" target="_blank">@kwonhaesun</a>,
                <a class = "sns-link" href="https://www.instagram.com/imrealmadein/" target="_blank">@imrealmadein</a>,
                <a class = "sns-link" href="https://www.instagram.com/l2_producer/" target="_blank">@l2_producer</a>,
                <a class = "sns-link" href="https://www.instagram.com/tony.tony____/" target="_blank">@tony.tony____</a></p> -->
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
                    <router-link to = "/protophobia/choi-junwoo"><img alt="member" src="@/assets/images/protophobia/1/PROFILE PHOTO 3_4_protophobia_CHOI JUN WOO.jpg" /></router-link>
                    <div class="caption">TEAM LEADER<br>최준우</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kwak-dohoon"><img alt="member" src="@/assets/images/protophobia/2/PROFILE PHOTO 3_4_protophobia_KWAKDOHOON.jpg" /></router-link>
                    <div class="caption">SUB LEADER<br>곽도훈</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/yun-sohye"><img alt="member" src="@/assets/images/protophobia/3/PROFILE PHOTO 3_4_protophobia_YUN SOHYE.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>윤소혜</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/jeong-gyeongmo"><img alt="member" src="@/assets/images/protophobia/4/PROFILE PHOTO 3_4_protophobia_JEONG GYEONG MO.jpg"/></router-link>
                    <div class="caption">TEAM MEMBER<br>정경모</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kim-minseo"><img alt="member" src="@/assets/images/protophobia/5/PROFILE PHOTO 3_4 protophobia_김민서.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>김민서</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kim-heeyoung"><img alt="member" src="@/assets/images/protophobia/6/PROFILE PHOTO 3_4_protophobia_HeeyoungKim.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>김희영</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/kim-jiin"><img alt="member" src="@/assets/images/protophobia/7/PROFILE PHOTO 3_4_protophobia_KIM JIIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>김지인</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/lee-eunji"><img alt="member" src="@/assets/images/protophobia/8/PROFILE PHOTO 3_4_protophobia_이은지.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>이은지</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/protophobia/youn-dohee"><img alt="member" src="@/assets/images/protophobia/9/PROFILE-PHOTO-3_4_protophobia_DoheeYoun.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>윤도희</div>
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
        width: auto;
        height: auto;
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