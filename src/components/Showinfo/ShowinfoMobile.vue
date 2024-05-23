<template>
    <div class="showinfo-background">

        <vue-scroll-snap :fullscreen="true">

            <div class="item" ref="stage1">
                <div class="theme-container">
                    <div class="theme-poster-container">
                        <div data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
                            <img class="theme-poster" alt="poster" src="@/assets/images/showinfo/mainTheme_poster.jpg"
                                @click="click1_1()" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="item" ref="stage1_1">
                <div class="theme-info-container">
                    <div class="theme-name">PROTOTYPE</div>
                    <div class="theme-info1">: The first impression as a <br>designer in society</div>
                    <div class="theme-info2" @click="click2">프로토타입은 단순한 기본형을 넘어 모든 창조의 본질적 출발점입니다.
                        <br><br>이는 우리 디자이너들이 사회에 첫 선을 보이는 작품이자, 자신을 대표하는 첫 인상이라 할 수 있습니다.
                        '프로'는 지지, '투'는 대상에 대하여, '타입'은 형태를 의미합니다. 이를 통해 우리는 모든 형태를 지지한다는 의미를 담고 있습니다.
                        2024년 졸업 전시를 통해, 우리는 다양한 분야의 프로토타입을 발견하고, 이를 독특한 주제로 발전시켜 나갈 것입니다.
                        <br><br>이 과정에서 각 팀은 자신들의 아이디어와 창의력으로 새로운 시작을 제시할 것입니다.
                    </div>
                </div>
            </div>

            <div class="item" ref="stage2">
                <div class="theme-youtube-container">
                    <div class="theme-youtube">
                        <iframe :style="{ width: state.width, height: state.height }"
                            :src="`https://www.youtube.com/embed/E-8pyVBvCPQ`" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </div>
                    <div class="theme-youtube-info-container">
                        <div class="theme-yt-info1"> PROTOTYPE: TEASER FILM</div>
                    </div>
                </div>
            </div>

            <div class="item" ref="stage3">
                <div class=map-container>
                    <img src="@/assets/images/showinfo/약도.jpg">
                    <div class=map-info-container>
                        <b>[LAYER41]</b>
                        <br>41, Achasan-ro 9-gil, Seongdong-gu, Seoul
                        <br>서울 성동구 성수동2가 277-4 (아차산로9길 41)

                        <br><br><b>[유료주차장]</b>
                        <br>KT 성수분국 노상공영주차장 (252m) : 서울 성동구 성수동 2가 280-50 / 평일 9-19시 운영 / 토요일 9-15시 운영 / 공휴일 무료 개방
                        <br>성수에이팩센터 (422m) : 서울 성동구 성수동2가 289-5 / 24시간 운영
                        <br>아이에스 biz타워(419m) : 서울 성동구 성수동2가 289-319 / 24시간 운영
                    </div>
                </div>
            </div>

            <div class="item" ref="stage4">
                <div class=credit-container>
                    <h1>CREDIT</h1>
                    <div class="section">
                        <p class="title"><b>졸업패션쇼준비위원회</b></p>
                        <p class="items"><b>위원장</b>&nbsp;&nbsp;&nbsp;정경모</p>
                        <p class="items"><b>기획</b>&nbsp;&nbsp;&nbsp;윤소혜&nbsp;&nbsp;&nbsp;강소원</p>
                        <p class="items"><b>연출</b>&nbsp;&nbsp;&nbsp;오승민&nbsp;&nbsp;&nbsp;정솜귤</p>
                        <p class="items"><b>브로셔</b>&nbsp;&nbsp;&nbsp;유하영&nbsp;&nbsp;&nbsp;박혜빈</p>
                        <p class="items"><b>전시</b>&nbsp;&nbsp;&nbsp;곽도훈&nbsp;&nbsp;&nbsp;최준우</p>
                        <p class="items"><b>홍보</b>&nbsp;&nbsp;&nbsp;윤도희&nbsp;&nbsp;&nbsp;김지인</p>
                        <p class="items"><b>회계</b>&nbsp;&nbsp;&nbsp;장예진</p>
                        <p class="items"><b>서기</b>&nbsp;&nbsp;&nbsp;이은지</p>
                    </div>
                    <div class="section">
                        <p class="title">지도교수</p>
                        <p class="items">이소영 최선영</p>
                    </div>
                    <div class="section">
                        <p class="title">포스터 그래픽</p>
                        <p class="items">김연우 @yeonnuv</p>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class=credit-container>
                    <div class="section">
                        <p class="title"><b>웹사이트 개발</b></p>
                        <p class="items">변상윤&nbsp;&nbsp;&nbsp;<a class="sns-link"
                                href="https://www.instagram.com/135yoon/" target="_blank">@135yoon</a></p>
                        <p class="items">정제영&nbsp;&nbsp;&nbsp;<a class="sns-link"
                                href="https://www.instagram.com/jaboog_ah/" target="_blank">@jaboog_ah</a></p>
                        <p class="items">박지원&nbsp;&nbsp;&nbsp;<a class="sns-link"
                                href="https://www.instagram.com/gwon_055/" target="_blank">@gwon_055</a></p>
                    </div>
                    <div class="section">
                        <p class="title">PROTOTYPE main teaser</p>
                        <p class="items">전효성 김인열</p>
                        <p class="items"><a class="sns-link" href="https://www.instagram.com/studio_dwork/"
                                target="_blank">@studio_dwork</a></p>
                    </div>
                    <div class="section">
                        <p class="title">USB 브로셔 프로그래밍</p>
                        <p class="items">전성철&nbsp;&nbsp;&nbsp;<a class="sns-link"
                                href="https://www.instagram.com/jeonnn98/" target="_blank">@jeonnn98</a></p>
                        <p class="items">최준우&nbsp;&nbsp;&nbsp;<a class="sns-link"
                                href="https://www.instagram.com/coomunfioy/" target="_blank">@coomunfioy</a></p>
                        <p class="items">곽도훈&nbsp;&nbsp;&nbsp;<a class="sns-link"
                                href="https://www.instagram.com/kwkdohoon/" target="_blank">@kwkdohoon</a></p>
                    </div>
                    <div class="section">
                        <p class="title">SHOW Directing</p>
                        <p class="items">MOTIF COMPANY 쇼 준비 대행사</p>
                        <p class="items">APRO 쇼 연출사</p>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class=credit-container>
                    <div class="section">
                        <p class="title"><b>SHOW MODEL</b></p>
                        <p class="items"><b>yg k+</b></p>
                        <p class="items">김다솔 / 시오 / 홍주영 / 한지영 / 이예은 / 길성은</p>
                        <p class="items">김가영 / 심규리 / 홍채현 / 장민서 / 심현정 / 이다인</p>
                        <p class="items">이성민 / 이준하 / 배수현 / 최유미 / 김세영</p>
                        <p class="items">신용국 / 오병직 / 김준성 / 박홍 / 우찬 / 천종민</p>
                        <p class="items">윤여민 / 오혜성 / 구자성 / 김승비 / 김태윤</p>
                        <p class="items"><b>별도 섭외</b></p>
                        <p class="items">오승민 / 션 / 박희주</p>
                    </div>
                    <div class="section">
                        <p class="title"><b>BROCHURE MODEL</b></p>
                        <p class="items">김은서 / 박다은 / 김혜민 / 이민서</p>
                        <p class="items">이성민 / 이준하 / 이한선 / 조혜영</p>
                        <p class="items">박희주 / 김승비 / 김준 / 박상현</p>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class=credit-container>
                    <div class="section">
                        <p class="title"><b>BROCHURE</b></p>
                        <p class="items"><b>촬영</b> 박청운 <a class="sns-link" href="https://www.instagram.com/lets_pcw/"
                                target="_blank">@lets_pcw</a></p>
                        <p class="items">헤어 / 메이크업</p>
                        <p class="items"><b>메이킹필름</b> 허세빈 <a class="sns-link"
                                href="https://www.instagram.com/binbin_hoh/" target="_blank">@binbin_hoh</a></p>
                    </div>
                    <div class="section">
                        <p class="title"><b>BACKSTAGE PHOTO</b></p>
                        <p class="items">김수민 <a class="sns-link" href="https://www.instagram.com/soogimi/"
                                target="_blank">@soogimi</a></p>
                    </div>
                    <div class="section">
                        <p class="title"><b>BROCHURE PHOTO</b></p>
                        <p class="items">박청운 <a class="sns-link" href="https://www.instagram.com/lets_pcw/"
                                target="_blank">@lets_pcw</a></p>
                    </div>
                    <div class="section">
                        <p class="title"><b>VIP 제품 협찬</b></p>
                        <p class="items">피카커피 <a class="sns-link" href="https://www.instagram.com/fika.workshop/"
                                target="_blank">@fika.workshop</a></p>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class=credit-container>
                    <div class="section">
                        <p class="title"><b>protophobia</b></p>
                        <p class="items"><b>concept video</b></p>
                        <p class="items">권해선 <a class="sns-link" href="https://www.instagram.com/kwonhaesun/"
                                target="_blank">@kwonhaesun</a></p>
                        <p class="items">남우석 <a class="sns-link" href="https://www.instagram.com/ren.isobe/"
                                target="_blank">@ren.isobe</a></p>
                        <p class="items"><b>show music</b></p>
                        <p class="items">김정한 <a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@imrealmadein</a></p>
                        <p class="items">윤소혜 <a class="sns-link" href="https://www.instagram.com/tony.tony____/"
                                target="_blank">@tony.tony____</a></p>
                        <p class="items"><b>brochure</b></p>
                        <p class="items">양찬주</p>
                    </div>
                    <div class="section">
                        <p class="title"><b>OAK</b></p>
                        <p class="items"><b>concept video</b></p>
                        <p class="items">김준기 <a class="sns-link" href="https://www.instagram.com/jungiwork/"
                                target="_blank">@jungiwork</a></p>
                        <p class="items"><b>show music</b></p>
                        <p class="items">이정현 <a class="sns-link" href="https://www.instagram.com/l2_producer/"
                                target="_blank">@l2_producer</a></p>
                        <p class="items"><b>brochure</b></p>
                        <p class="items">김연우 <a class="sns-link" href="https://www.instagram.com/yeonnuv/"
                                target="_blank">@yeonnuv</a></p>
                        <p class="items">양찬주</p>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class=credit-container>
                    <div class="section">
                        <p class="title"><b>Anachronia</b></p>
                        <p class="items"><b>concept video / team poster</b></p>
                        <p class="items">이찬희 <a class="sns-link" href="https://www.instagram.com/2164_2/"
                                target="_blank">@2164_2</a></p>
                        <p class="items"><b>show music</b></p>
                        <p class="items">김정한 <a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@imrealmadein</a></p>
                        <p class="items"><b>brochure</b></p>
                        <p class="items">양찬주</p>
                    </div>
                    <div class="section">
                        <p class="title"><b>Bug report</b></p>
                        <p class="items"><b>concept video</b></p>
                        <p class="items">이찬희 <a class="sns-link" href="https://www.instagram.com/2164_2/"
                                target="_blank">@2164_2</a></p>
                        <p class="items"><b>show music</b></p>
                        <p class="items">이정현 <a class="sns-link" href="https://www.instagram.com/l2_producer/"
                                target="_blank">@l2_producer</a></p>
                        <p class="items"><b>brochure</b></p>
                        <p class="items">송인우 <a class="sns-link" href="https://www.instagram.com/oin__5/"
                                target="_blank">@oin__5</a></p>
                        <p class="items"><b>team poster</b></p>
                        <p class="items">구기태 <a class="sns-link" href="https://www.instagram.com/gitae9u/"
                                target="_blank">@gitae9u</a></p>
                        <p class="items"><b>profile photo</b></p>
                        <p class="items">이동권 <a class="sns-link" href="https://www.instagram.com/isdcyss/"
                                target="_blank">@isdcyss</a></p>
                    </div>
                </div>
            </div>

            <div class="item">
                <div class=credit-container>
                    <div class="section">
                        <p class="title"><b>Loft 1.0</b></p>
                        <p class="items"><b>concept video</b></p>
                        <p class="items">양지영 <a class="sns-link" href="https://www.instagram.com/yz_0.0_zy/"
                                target="_blank">@yz_0.0_zy</a></p>
                        <p class="items"><b>concept video actor</b></p>
                        <p class="items">류가연</p>
                        <p class="items"><b>show music</b></p>
                        <p class="items">장의하</p>
                        <p class="items"><b>brochure</b></p>
                        <p class="items">양찬주</p>
                        <p class="items"><b>profile photo</b></p>
                        <p class="items">정다은 <a class="sns-link" href="https://www.instagram.com/plentycamile/"
                                target="_blank">@plentycamile</a></p>
                    </div>
                    <div class="section">
                        <p class="title"><b>Deja vu</b></p>
                        <p class="items"><b>concept video</b></p>
                        <p class="items">김예서 <a class="sns-link" href="https://www.instagram.com/yes.eor_no/"
                                target="_blank">@yes.eor_no</a></p>
                        <p class="items"><b>brochure 메이킹촬영</b></p>
                        <p class="items">사이트 아카네 <a class="sns-link" href="https://www.instagram.com/jeonjueum/"
                                target="_blank">@jeonjueum</a></p>
                        <p class="items"><b>show music</b></p>
                        <p class="items">김정한 <a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@imrealmadein</a></p>
                        <p class="items"><b>team poster</b></p>
                        <p class="items">이수진 <a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@treasured_treasure</a></p>
                        <p class="items"><b>brochure</b></p>
                        <p class="items">양찬주</p>
                    </div>
                </div>
            </div>

        </vue-scroll-snap>
        <mainFooter />
    </div>
</template>

<script>
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import mainFooter from '@/components/Footer.vue';
import VueScrollSnap from "vue-scroll-snap";


export default defineComponent({

    components: {
        VueScrollSnap,
        mainFooter // 컴포넌트 등록
    },

    methods: {
        click1() {
            this.$refs.stage1.scrollIntoView({ behavior: "smooth" });
        },
        click1_1() {
            this.$refs.stage1_1.scrollIntoView({ behavior: "smooth" });
        },
        click2() {
            this.$refs.stage2.scrollIntoView({ behavior: "smooth" });
        },
        click3() {
            this.$refs.stage3.scrollIntoView({ behavior: "smooth" });
        },
        click4() {
            this.$refs.stage4.scrollIntoView({ behavior: "smooth" });
        },
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
.remote-info {
    position: relative;
}


.remote-info:hover:before {
    opacity: 1;
}

.remote-info::before {
    content: attr(data-title);
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: all 0.15s ease-in-out;
    background: rgb(90, 90, 90);
    color: #fff;
    font-size: 15px;
    padding: 5px 10px;
    top: -5px;
    right: 0;
    white-space: nowrap;
}

::-webkit-scrollbar {
    display: none;
}


.item {
    height: 100%;
    /* background-image: url('@/assets/images/01_KUAD_background.png');  */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    display: flex;
    width: 100vw;
}

.scroll-snap-container {
    height: 100%;
    width: 100%;
    background-image: url('@/assets/images/background_img.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-position-y: -144px; */
}

.showinfo-background {
    /* 배경 이미지 적용 */
    display: flex;
    width: 100%;
    height: auto;
    background-image: url('@/assets/images/background_img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    margin-top: 100px;
}

::-webkit-scrollbar {
    /* display:none; */
}

.map-info-container {
    font-size: 12px;
    width: 90vw;
}

.theme-container {
    /* padding-top:10%; */
    width: 1130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Custom';
    margin-top: 100px;
}

.theme-poster-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
}

.theme-poster {
    width: 90vw;
    height: 80vh;
    object-fit: contain;
}

.theme-info-container {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-top: 100px;
    /* align-items: center; */
    justify-content: center;
}

.theme-name {
    /* line-height: 1; */
    font-size: 60px;
    font-family: 'Pretendard Variable' !important;
    font-weight: 500;
    text-align: center;
    color: rgb(96, 96, 96);
}

.theme-info1 {
    font-size: 28px;
    line-height: 1;
    display: grid;
    place-items: center;
    color: rgb(96, 96, 96);
}

.theme-info2 {
    margin-top: 50px;
    font-size: 14px;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 8px;
}

.theme-youtube-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
    border-bottom: 100px;
}

.theme-youtube {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.theme-youtube-info-container {
    display: flex;
    margin-top: 5px;
    flex-direction: row;
    justify-content: center;
}

.theme-yt-info1 {
    font-size: 26px;
    /* font-weight: bold; */
    color: rgb(96, 96, 96);
}

.map-container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.map-container img {
    margin-top: 100% - 100px;
    width: 95vw;
    height: 40vh;
    object-fit: contain;

}

.credit-container {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: rgb(96, 96, 96);
}

.credit-container h1 {
    text-align: center;
    font-family: 'Pretendard Variable' !important;
    font-weight: 900;
    color: rgb(96, 96, 96);
    margin-bottom: 0px;
}

.credit-list {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
}

.section {
    margin-bottom: 0px;
}

.title {
    font-size: 1.3em;
    margin-top: 12px;
    margin-bottom: 6px;
    font-weight: bold;
}

.items {
    font-size: 0.8em;
    margin: 2px 0;
}

.sns-link {
    color: rgb(96, 96, 96);
}
</style>