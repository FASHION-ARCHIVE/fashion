<template>
    <mainHeader/>
    <div class = "team-background">
        <div class ="group-container">
            <div class="team-poster-container" data-aos="fade-up" data-aos-once="true">
                <img class="team-poster" alt="poster" src="@/assets/images/loft10/poster/Loft-1.0_TEAMPOSTER.jpg" />
                <div class ="team-info-container">
                    <div class="team-title">
                        <div class="team-name">Loft 1.0</div>
                        <!-- <div class="br-info1">JOURNEY TO PERFECT</div> -->
                    </div>
                    <div class="team-context">“나”의 원형은 어디일까?라는 질문에 우리는 자연스레 유년기를 떠올리게 된다.
                        <br><br>우리 기억의 필름이 유년기의 한 장면으로부터 시작되기 때문일 것이다. 그 기억 속에서 장난감은 늘, 우리 곁에 있었다. 그러나 우리가 자라면서 그들은 점점 창고와 다락방으로 향하며 멀어져 갔다. 졸업 프로젝트를 통해 우리는 어린 시절 추억이 담긴 다락방에 다시 모였다.
                    <br><br> 추억의 먼지를 쓸어내리며, 우리가 진정 사랑하던 것들과 그 기억의 조각들을 모아 재해석하고자 한다.
                    <br><br>First version of me.
                    <br>Loft 1.0
                    </div>
                    <div class="team-keyword">
                        <div class="team-info3">KEY WORD</div>
                        <div class="team-info4">#TOY #LOFT #NOSTALGIA</div>
                    </div>
                </div>
            </div>

            <div class = "video-container">
                <iframe src = "https://www.youtube.com/embed/p7o9C-NtW2M" frameborder = "0" allowfullscreen =""></iframe>
            </div>
            <!-- <p style = "margin-left: 10px;">file by  -->
                <!-- <a class = "sns-link" href="https://www.instagram.com/yz_0.0_zy/" target="_blank">@yz_0.0_zy</a>, @장의하</p> -->
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
                <!-- <div style="font-size: 14px; margin-left:10px; margin-top: 15px;" data-aos="fade-up" data-aos-once="true">photo by <a class = "sns-link" href="https://www.instagram.com/plentycamille/" target="_blank">@plentycamille</a></div> -->
            </div>

            <div class="team-members-list" data-aos="fade-up" data-aos-once="true">
                <div class="team-image-item">
                    <router-link to = "/Loft/wangchewon"><img alt="member" src="@/assets/images/loft10/1/PROFILE PHOTO 3_4__Loft 1.0_WANG CHEWON.jpg" /></router-link>
                    <div class="caption">TEAM LEADER<br>왕채원</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/yoominah"><img alt="member" src="@/assets/images/loft10/2/PROFILE PHOTO 3_4_ Loft 1.0_ YOO MINAH.jpg" /></router-link>
                    <div class="caption">SUB LEADER<br>유민아</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/kimhajin"><img alt="member" src="@/assets/images/loft10/3/PROFILE PHOTO 3_4_LOFT1.0_KIM HAJIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>김하진</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/parkyebin"><img alt="member" src="@/assets/images/loft10/4/PROFILE PHOTO 3_4_Loft 1.0_PARK YEBIN.jpg"/></router-link>
                    <div class="caption">TEAM MEMBER<br>박예빈</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/sunweiwan"><img alt="member" src="@/assets/images/loft10/5/PROFILE PHOTO 3_4_ Loft 1.0_ SUN WEIWAN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>손유완</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/seeyihyun"><img alt="member" src="@/assets/images/loft10/6/PROFILE PHOTO 3_4_ Loft 1.0 _SEE YIHYUN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>시이현</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/yangjieun"><img alt="member" src="@/assets/images/loft10/7/PROFILE PHOTO 3_4_Loft 1.0_YANG JIEUN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>양지은</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/yinlan"><img alt="member" src="@/assets/images/loft10/8/PROFILE PHOTO 3_4_loft 1.0_YIN LAN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>은란</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/jangyeajin"><img alt="member" src="@/assets/images/loft10/9/PROFILE PHOTO 3_4 _ Loft 1.0_JANG YEAJIN.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>장예진</div>
                </div>
                <div class="team-image-item">
                    <router-link to = "/Loft/jungsomgyul"><img alt="member" src="@/assets/images/loft10/10/PROFILE PHOTO 3_4_loft 1.0_JUNG SOMGYUL.jpg" /></router-link>
                    <div class="caption">TEAM MEMBER<br>정솜귤</div>
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