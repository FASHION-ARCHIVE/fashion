<template>
    <div class = "remote-container">
        <div class = "remote">
            <ui style="display: block;">
                <li style="display: block;"><button class = "show-button" data-title = "ABOUT" @click="click1()"></button></li>
                <li style="display: block;"><button class = "show-button" data-title = "TEASER FILM" @click="click2()"></button></li>
                <li style="display: block;"><button class = "show-button" data-title = "MAP" @click="click3()"></button></li>
                <li style="display: block;"><button class = "show-button" data-title = "CREDIT" @click="click4()"></button></li>
            </ui>
        </div>
    </div>

    <div class = "showinfo-background">
        
    <vue-scroll-snap :fullscreen="true">
   
    <div class="item" ref = "stage1">
        <div class = "theme-container">
            <div class="theme-poster-container" data-aos = "zoom-out" data-aos-duration="1500" data-aos-once="true">
                <div>
                    <img class = "theme-poster" alt = "poster" src="@/assets/images/showinfo/prototype_poster.jpeg"/>
                </div>
                <div class ="theme-info-container">
                    <div class="theme-name" >PROTOTYPE</div>
                    <div class="theme-info1">: The first impression as a designer in society</div>
                    <div class="theme-info2">프로토타입은 단순한 기본형을 넘어 모든 창조의 본질적 출발점입니다. 
                        <br><br>이는 우리 디자이너들이 사회에 첫 선을 보이는 작품이자, 자신을 대표하는 첫 인상이라 할 수 있습니다. 
                        '프로'는 지지, '투'는 대상에 대하여, '타입'은 형태를 의미합니다. 이를 통해 우리는 모든 형태를 지지한다는 의미를 담고 있습니다. 
                        2024년 졸업 전시를 통해, 우리는 다양한 분야의 프로토타입을 발견하고, 이를 독특한 주제로 발전시켜 나갈 것입니다. 
                        <br><br>이 과정에서 각 팀은 자신들의 아이디어와 창의력으로 새로운 시작을 제시할 것입니다.</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="item" ref = "stage2">
        <div class="theme-youtube-container">
            <div class="theme-youtube">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/Hhx5h4xPrMA`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <div class="theme-youtube-info-container">
                <div class="theme-yt-info1"> PROTOTYPE: TEASER FILM</div>
            </div>
        </div>
    </div>

    <div class="item" ref = "stage3">
        <div class = map-container>
            <img src = "@/assets/images/showinfo/약도.jpg">
            <div class = map-info-container>
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

    <div class="item" ref = "stage4">
        <div class = credit-container>
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
                <p class="items">이소영&nbsp;&nbsp;&nbsp;최선영</p>
            </div>
            <div class="section">
                <p class="title">포스터&nbsp;그래픽</p>
                <p class="items">김연우&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/yeonnuv/"
                                target="_blank">@yeonnuv</a></p>
            </div>
        </div>
    </div>

    <div class = "item">
        <div class = credit2-container>
            <div class="credit2-section">
                <div class="section">
                    <p class="title">웹사이트&nbsp;개발</p>
                    <p class="items">변상윤&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/135yoon/"
                                target="_blank">@135yoon</a></p>
                    <p class="items">정제영&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/jaboog_ah/"
                                target="_blank">@jaboog_ah</a></p>
                    <p class="items">박지원&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/gwon_55/"
                                target="_blank">@gwon_55</a></p>
                </div>
                <div class="section">
                    <p class="title">PROTOTYPE&nbsp;main&nbsp;teaser</p>
                    <p class="items">전효성&nbsp;&nbsp;&nbsp;김인열</p>
                    <p class="items"><a class="sns-link" href="https://www.instagram.com/studio_dwork/"
                                target="_blank">@studio_dwork</a></p>
                </div>
                <div class="section">
                    <p class="title">USB&nbsp;브로셔&nbsp;프로그래밍</p>
                    <p class="items">전성철&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/jeonnn98/"
                                target="_blank">@jeonnn98</a></p>
                    <p class="items">최준우&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/coomunfioy/"
                                target="_blank">@coomunfioy</a></p>
                    <p class="items">곽도훈&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/kwkdohoon/"
                                target="_blank">@kwkdohoon</a></p>
                </div>
                <div class="section">
                    <p class="title">SHOW&nbsp;Directing</p>
                    <p class="items">MOTIF&nbsp;COMPANY&nbsp;쇼&nbsp;준비&nbsp;대행사</p>
                    <p class="items">APRO&nbsp;쇼&nbsp;연출사</p>
                </div>
            </div>
            <div class="credit2-section">
                <div class="section">
                    <p class="title">SHOW&nbsp;MODEL</p>
                    <p class="items">yg&nbsp;k+</p>
                    <p class="items2">김다솔&nbsp;/&nbsp;시오&nbsp;/&nbsp;홍주영&nbsp;/&nbsp;한지영&nbsp;/&nbsp;이예은&nbsp;/&nbsp;길성은</p>
                    <p class="items2">김가영&nbsp;/&nbsp;심규리&nbsp;/&nbsp;홍채현&nbsp;/&nbsp;장민서&nbsp;/&nbsp;심현정&nbsp;/&nbsp;이다인</p>
                    <p class="items2">이성민&nbsp;/&nbsp;이준하&nbsp;/&nbsp;배수현&nbsp;/&nbsp;최유미&nbsp;/&nbsp;김세영</p>
                    <p class="items2">신용국&nbsp;/&nbsp;오병직&nbsp;/&nbsp;김준성&nbsp;/&nbsp;박홍&nbsp;/&nbsp;우찬&nbsp;/&nbsp;천종민</p>
                    <p class="items2">윤여민&nbsp;/&nbsp;오혜성&nbsp;/&nbsp;구자성&nbsp;/&nbsp;김승비&nbsp;/&nbsp;김태윤</p>
                    <p class="items"><b>별도&nbsp;섭외</b></p>
                    <p class="items2">오승민&nbsp;/&nbsp;션&nbsp;/&nbsp;박희주</p>
                </div>

                <div class="section">
                    <p class="title">BROCHURE&nbsp;MODEL</p>
                    <p class="items2">김은서&nbsp;/&nbsp;박다은&nbsp;/&nbsp;김혜민&nbsp;/&nbsp;이민서</p>
                    <p class="items2">이성민&nbsp;/&nbsp;이준하&nbsp;/&nbsp;이한선&nbsp;/&nbsp;조혜영</p>
                    <p class="items2">박희주&nbsp;/&nbsp;김승비&nbsp;/&nbsp;김준&nbsp;/&nbsp;박상현</p>
                </div>
            </div>
            <div class="credit2-section">
                <div class ="section">
                    <p class="title">BROCHURE</p>
                    <p class="items"><b>촬영</b>&nbsp;박청운&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/lets_pcw/"
                                target="_blank">@lets_pcw</a></p>
                    <p class="items"><b>헤어&nbsp;/&nbsp;메이크업</b></p>
                    <p class="items">이새온&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/saeonjima/"
                                target="_blank">@saeonjima</a></p>
                    <p class="items">김호민&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/hmhm_makeup_119/"
                                target="_blank">@hmhm_makeup_119</a></p>
                    <p class="items">김민경&nbsp;&nbsp;&nbsp;</p>
                    <p class="items">김민지&nbsp;&nbsp;&nbsp;</p>
                    
                    <p class="items"><b>메이킹필름</b>&nbsp;허세빈&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/binbin_hoh/"
                                target="_blank">@binbin_hoh</a></p>
                </div>
                <div class="section">
                    <p class="title">BACKSTAGE&nbsp;PHOTO</p>
                    <p class="items">김수민&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/soogimi/"
                                target="_blank">@soogimi</a></p>
                </div>
                <div class="section">
                    <p class="title">RUNWAY&nbsp;PHOTO</p>
                    <p class="items">박청운&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/lets_pcw/"
                                target="_blank">@lets_pcw</a></p>
                </div>
                <div class="section">
                    <p class="title">VIP&nbsp;제품&nbsp;협찬</p>
                    <p class="items">피카커피&nbsp;<a class="sns-link" href="https://www.instagram.com/fika.workshop/"
                                target="_blank">@fika.workshop</a></p>
                </div>
            </div>
        </div>
    </div>

    <div class = "item">
        <div class="credit3-container">
            <div class="credit3-section">
                <div class="section2">
                    <p class="title">protophobia</p>
                    <p class="items2"><b>concept&nbsp;video</b></p>
                    <p class="items2">권해선&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/kwonhaesun/"
                                target="_blank">@kwonhaesun</a></p>
                    <p class="items2">남우석&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/ren.isobe/"
                                target="_blank">@ren.isobe</a></p>
                    <p class="items2"><b>show&nbsp;music</b></p>
                    <p class="items2">김정한&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@imrealmadein</a></p>
                    <p class="items2">윤소혜&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/tony.tony____/"
                                target="_blank">@tony.tony____</a></p>
                    <p class="items2"><b>brochure&nbsp;배경그래픽&nbsp;및&nbsp;내지&nbsp;작업</b></p>
                    <p class="items2">양찬주</p>
                </div>
                <div class="section2-1">
                    <p class="title">Bug&nbsp;report</p>
                    <p class="items2"><b>concept&nbsp;video</b></p>
                    <p class="items2">이찬희&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/2164_2/"
                                target="_blank">@2164_2</a></p>
                    <p class="items2"><b>show&nbsp;music</b></p>
                    <p class="items2">이정현&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/l2_producer/"
                                target="_blank">@l2_producer</a></p>
                    <p class="items2"><b>brochure</b></p>
                    <p class="items2">송인우&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/oin__5/"
                                target="_blank">@oin__5</a></p>
                    <p class="items2"><b>team&nbsp;poster</b></p>
                    <p class="items2">구기태&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/gitae9u/"
                                target="_blank">@gitae9u</a></p>
                    <p class="items2"><b>profile&nbsp;photo</b></p>
                    <p class="items2">이동권&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/isdcyss/"
                                target="_blank">@isdcyss</a></p>
                </div>
                
                
            </div>
            <div class="credit3-section">
                <div class="section2">
                    <p class="title">OAK</p>
                    <p class="items2"><b>concept&nbsp;video</b></p>
                    <p class="items2">김준기&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/jungiwork/"
                                target="_blank">@jungiwork</a></p>
                    <p class="items2"><b>show&nbsp;music</b></p>
                    <p class="items2">이정현&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/l2_producer/"
                                target="_blank">@l2_producer</a></p>
                    <p class="items2"><b>team&nbsp;poster</b></p>
                    <p class="items2">김연우&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/yeonnuv/"
                                target="_blank">@yeonnuv</a></p>
                    <p class="items2">양찬주</p>
                </div>
                <div class="section2-2">
                    <p class="title">Loft&nbsp;1.0</p>
                    <p class="items2"><b>concept&nbsp;video</b></p>
                    <p class="items2">양지영&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/yz_0.0_zy/"
                                target="_blank">@yz_0.0_zy</a></p>
                    <p class="items2"><b>concept&nbsp;video&nbsp;actor</b></p>
                    <p class="items2">류가연</p>
                    <p class="items2"><b>show&nbsp;music</b></p>
                    <p class="items2">장의하</p>
                    <p class="items2"><b>brochure</b></p>
                    <p class="items2">양찬주</p>
                    <p class="items2"><b>profile&nbsp;photo</b></p>
                    <p class="items2">정다은&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/plentycamile/"
                                target="_blank">@plentycamile</a></p>
                </div>
                
            </div>
            <div class="credit3-section">
                <div class="section2">
                    <p class="title">Anachronia</p>
                    <p class="items2"><b>concept&nbsp;video&nbsp;/&nbsp;team&nbsp;poster</b></p>
                    <p class="items2">이찬희&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/2164_2/"
                                target="_blank">@2164_2</a></p>
                    <p class="items2"><b>show&nbsp;music</b></p>
                    <p class="items2">김정한&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@imrealmadein</a></p>
                    <p class="items2"><b>brochure</b></p>
                    <p class="items2">양찬주</p>
                </div>
                <div class="section2-3">
                    <p class="title">Deja&nbsp;vu</p>
                    <p class="items2"><b>concept&nbsp;video</b></p>
                    <p class="items2">김예서&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/yes.eor_no/"
                                target="_blank">@yes.eor_no</a></p>
                    <p class="items2"><b>brochure&nbsp;메이킹촬영</b></p>
                    <p class="items2">사이토&nbsp;아카네&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/jeonjueum/"
                                target="_blank">@jeonjueum</a></p>
                    <p class="items2"><b>show&nbsp;music</b></p>
                    <p class="items2">김정한&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/imrealmadein/"
                                target="_blank">@imrealmadein</a></p>
                    <p class="items2"><b>team&nbsp;poster</b></p>
                    <p class="items2">이수진&nbsp;&nbsp;&nbsp;<a class="sns-link" href="https://www.instagram.com/treasured_treasure/"
                                target="_blank">@treasured_treasure</a></p>
                    <p class="items2"><b>brochure</b></p>
                    <p class="items2">양찬주</p>
                </div>
            </div>
            
        </div>
    </div>

    </vue-scroll-snap>
    <mainFooter/>
    </div>
</template>

<script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainFooter from '@/components/Footer.vue';
    import VueScrollSnap from "vue-scroll-snap";

   
    export default defineComponent({
        
    components: {VueScrollSnap,
         mainFooter // 컴포넌트 등록
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
    },
    click4(){
      this.$refs.stage4.scrollIntoView({ behavior:"smooth"});
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
    .remote-container{
        position: fixed;
        display: flex;
        align-items: center;
        z-index: 1000;
        height: 100vh;
        top: 3%;
        right: 10%;
        justify-content: center;
    }

    .remote{
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    .show-button:hover:before {
        opacity: 1;
    }

    .show-button::before {
        content: attr(data-title);
        background: rgb(90, 90, 90);

        /* transform: translate3d(20px, 0, 0); */
        transition: all 0.15s ease-in-out;
       
        
        display: block;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        color: #fff;
        font-size: 14px;
        padding: 5px 10px;
        top: -5px;
        right: 0;
        white-space: nowrap;
        
    }

    ::-webkit-scrollbar{
        display:none;
        }

    .show-button{
        cursor: pointer;
        border: none;
        display: block;
        position: relative;
        margin-top: 24px;
        width: 24px;
        height: 24px;
        background: url(@/assets/images/icon/bt_gray.png) 0% 0% / 100% 100% no-repeat;
        will-change: transform;
    }

    /* .show-button:hover{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/icon/bt_white.png) 0% 0% / 100% 100% no-repeat;
    } */

    /* .show-button:focus{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 24px;
        background: url(@/assets/images/bt_white.png) 0% 0% / 100% 100% no-repeat;
    } */

    

    .item{
        height: 100%;
        /* background-image: url('@/assets/images/01_KUAD_background.png');  */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        justify-content: center;
        display: flex;
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

    .showinfo-background{
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

   ::-webkit-scrollbar{
        /* display:none; */
    }
    

    .theme-container{     
        /* padding-top:10%; */
        width: 1130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Custom';
        margin-top: 100px;     
    }

    .theme-poster-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:40px;
    }

    .theme-poster{
        max-width: 400px;
        width: auto;
        height: auto;
    }

    .theme-info-container{
        display: flex;
        flex-direction: column;
        width: 550px;
        margin-top: 30px;
    }

    .theme-name{
        line-height: 1;
        font-size:64px;
        font-weight: bold;
        color: rgb(96, 96, 96);
    }

    .theme-info1{
        font-size: 28px;
        line-height: 1;
        color: rgb(96, 96, 96);
    }
    
    .theme-info2{
        margin-top: 120px;
        font-size: 20px;
        font-weight: 400;
        color: rgb(64, 64, 64);
    }

    .theme-youtube-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 5%;
        border-bottom: 100px;
    }

    .theme-youtube{
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }

    .theme-youtube-info-container{
            display: flex;
            margin-top: 5px;
            flex-direction: row;
            justify-content: center;
    }

    .theme-yt-info1{
            font-size:30px;
            color: rgb(96, 96, 96);
    }

    .map-container{
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .map-container img{
        width: 100vw;
        height: 60vh;
        object-fit: contain;
    }

    .map-info-container{
        margin-top: 10px;
        font-size: 12px;
        width: 90vw;
        text-align: center;
        color: rgb(64, 64, 64);
    }

    .credit-container{
        margin-top:100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: rgb(96, 96, 96);
    }
    .credit2-container{
        margin-top:100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        color: rgb(96, 96, 96);
        gap:70px;
    }
    .credit3-container{
        margin-top:80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        color: rgb(96, 96, 96);
        gap:100px;
        
    }
    .credit2-section{
        display: flex;
        flex-direction: column;
    }
    .credit3-section{
        display: flex;
        flex-direction: column;

    }
    .credit3-section2{
        display: flex;
        flex-direction: row;
        gap: 150px;
        justify-content: center;
    }

    .credit-container h1{
        text-align: center;
        font-family: 'Pretendard Variable' !important;
        font-weight: 900;
        color: rgb(96, 96, 96);
    }

    .credit-list {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    }

    .section {
        margin-bottom: 20px;
    }
    .section2-2{
        margin-top: 1.8em;
    }
    .section2-3{
        margin-top: 3.6em;
    }


    .title {
        font-size: 1.5em;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .items {
        font-size: 1.1em;
        margin: 5px 0;
    }

    .items2{
        font-size:1.0em;
        margin: 5px 0;
    }

    .sns-link {
        color: rgb(96, 96, 96);
    }

@media screen and (max-width: 1300px){    
    .remote-container{
        display: none;
    }
}

@media screen and (max-width: 1000px){    
    .theme-info-container{
        display: none;
    }
}
</style>