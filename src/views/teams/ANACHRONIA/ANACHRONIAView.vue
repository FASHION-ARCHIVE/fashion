<template>
    <mainHeader/>
    <div class = "team-background">
        <div class ="group-container">
            <div class="team-poster-container" data-aos="fade-up" data-aos-once="true">
                <img class="team-poster" alt="poster" src="@/assets/images/anachronia/poster/Anachronia_TEAMPOSTER.jpg" />
                <div class ="team-info-container">
                    <div class="team-title">
                        <div class="team-name">ANACHRONIA</div>
                        <!-- <div class="br-info1">JOURNEY TO PERFECT</div> -->
                    </div>
                    <div class="team-context">Anachronism: 그 시대의 일반적인 조류에 역행하고 있는 것
                        <br>우리는 "화석"을 통해 지구 생물의 근원(Prototype)을 이해하고 발전합니다.<br>저희는 이 개념에서 착안해 화석 속 각 생명체 고유의 아름다움에서 영감을 받은 컬렉션을 전개합니다. 과학 기술의 발달로 화석으로만 남아 있던 생명체를<br>복원하여 새로운 생태계를 설계하고자 시간 여행을 하며 자연을 탐구하는<br>미래의 고고학자의 모습을 상상했습니다.<br><br>화석과 미래적 요소를 결합한 디자인으로 자연과 인간의 공존을 제시하며<br>그 여정을 담은 &lt;Anachronia&gt;로 초대합니다.
                    </div>
                    <div class="team-keyword">
                        <div class="team-info3">KEY WORD</div>
                        <div class="team-info4">#Time Travel #Fossils; The Future Relics #Coexistence of Nature and Humanity #Mysterious</div>
                    </div>
                </div>
            </div>

            <div class = "video-container">
                <iframe src = "https://www.youtube.com/embed/UzacT0HZT8A" frameborder = "0" allowfullscreen =""></iframe>
            </div>
            <!-- <p style = "margin-left: 10px;">file by 
                <a class = "sns-link" href="https://www.instagram.com/2164_2/" target="_blank">@2164_2</a></p> -->
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
                <div class="members" data-aos="fade-up" data-aos-once="true" data-aos-offset="-300">TEAM MEMBERS</div>
            </div>

            <div class="team-members-list" data-aos="fade-up" data-aos-once="true" data-aos-offset="-300">
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/kimgyubin"><img alt="member" src="@/assets/images/anachronia/1/PROFILE PHOTO 3_4_ANACHRONIA_GYUBIN KIM.jpg" /></router-link>
                    <div class="caption">TEAM LEADER<br>김규빈</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/kwonnawon"><img alt="member" src="@/assets/images/anachronia/2/PROFILE PHOTO 3_4_ANACHRONIA_NAWON KWON.jpg" /></router-link>
                    <div class="caption">SUB LEADER<br>권나원</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/parkhyevin"><img alt="member" src="@/assets/images/anachronia/3/PROFILE-PHOTO-3-4_Anachronia_hyevinpark.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>박혜빈</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/elina"><img alt="member" src="@/assets/images/anachronia/4/PROFILE PHOTO 3_4 _ ANACHRONIA _ ELINA.png"/></router-link>
                    <div class="caption">TEAM MEMBER<br>엘리나</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/jinsonghanyi"><img alt="member" src="@/assets/images/anachronia/5/Profile-photo--3：4---Anachronia--JIN-SO...jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>김송함이</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/liuhaihong"><img alt="member" src="@/assets/images/anachronia/6/PROFILE PHOTO 3-4_Anachronia-LIUHAIHONG.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>유해홍</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/ningyiyi"><img alt="member" src="@/assets/images/anachronia/7/PROFILE PHOTO 3_4_Anachronia-NING YIYI.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>닝이이</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/nilin"><img alt="member" src="@/assets/images/anachronia/8/PROFILE-PHOTO-3-4_ANACHRONIA_NI-LIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>예임</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/ANACHRONIA/zhangxueying"><img alt="member" src="@/assets/images/anachronia/9/PROFILE PHOTO 3_4_ANACHRONIA_ZHANG XUEYING.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>장설영</div>
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