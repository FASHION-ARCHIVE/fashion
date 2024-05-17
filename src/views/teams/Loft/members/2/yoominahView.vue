<template>
    <head>
      <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>
  
  <mainHeader/>
    <div class = "profile-background">
      <div class = "profile-container">
        <div class = "profile-info-container">
          <div class = "profile-img">
            <img src="@/assets/images/loft10/2/PROFILE PHOTO 1_1_ Loft 1.0_ YOO MINAH.jpg"/>
          </div>
  
          <div class = "profile-detail">
            <h3 class = "profile-name">유민아 / YOO MINAH</h3>
            <h3 class = "project-name">Dear my sylvanian rabbit</h3>
            <h5></h5>
  
            <p class = "introduce">
              실바니안 패밀리 인형은 내 기억 속 첫 위시리스트였다. 어린 아이 시절 엄마아빠 손을 잡고 가끔 장난감 가게를 가면 늘 실바니안 패밀리 박스 앞에서 한참을 서성였던 기억이 난다. 불현듯 이 기억이 떠올랐고, 실바니안 인형들의 옷에서 아웃핏과 패브릭 패턴의 아이디어 소스를 얻어 디자인 디벨롭을 시작했다.
              <br><br>단순히 어린 시절로의 회귀가 아니라, 그 때의 기억을 바탕으로 한 재해석이 목표였던 만큼 다양한 시도들을 해보고 싶었다. 직접 수십 개의 인형들을 만들었고 옷장 속에 있던 오래된 데님들도 뜯어가며 작업했다.  
              <br><br>그토록 갖고 싶었던 실바니안 하우스는 아직까지도 없지만, 언젠가는 가지게 될 그 날을 기대하며.
            </p>
  
            <div class = "contact-container">
              <h3 class = "contact-text">Contact</h3>
              <h5 class = "contact-list">
                <div class="mail-link">
                  <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                  mingojj@naver.com 
                </div>
                <a class = "sns-link" href="https://www.instagram.com/yoominahhh/" target="_blank">
                  <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                  @yoominahhh
                </a>
              </h5>
            </div>
          </div>
        </div>
        
        <div class = "profile-project">
          <div class = "project-slide-container">
            <swiper
              :navigation = "true"
              :modules = "modules"
              :loop = "true"
              class = "pg-slide"
            >
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/loft10/2/BROCHURE PHOTO_ Loft 1.0_ YOO MINAH 1.jpg"/></swiper-slide>
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/loft10/2/BROCHURE PHOTO_ Loft 1.0_ YOO MINAH 2.jpg"/></swiper-slide>
            </swiper>
            <div class = "project-info">LOOKBOOK</div>
          </div>
          <div class = "project-slide-container">
            <swiper
              :navigation = "true"
              :modules = "modules"
              :loop = "true"
              class = "pg-slide"
            >
              <swiper-slide><img alt = "runway-img" src="@/assets/images/runway_replace.png"/></swiper-slide>
              <swiper-slide><img alt = "runway-img" src="@/assets/images/runway_replace.png"/></swiper-slide>
            </swiper>
            <p class = "project-info">RUNWAY</p>
          </div>
        </div>
      </div>
    </div>
  <mainFooter/>
  </template>
  
  <script>
      import mainHeader from '@/components/TopCategory.vue';
      import mainFooter from '@/components/Footer.vue';
      import {Swiper, SwiperSlide} from 'swiper/vue';
  
      import 'swiper/css';
  
      import 'swiper/css/grid';
  
      import 'swiper/css/navigation';
  
      import {Navigation} from 'swiper/modules';
  
      export default {
         name: 'ByunSangYoon',
         components: {
           mainHeader,
           mainFooter,
           Swiper, SwiperSlide,
         },
  
         setup() {
            return {
                modules: [Navigation],
            };
         },
  
       }
  
  </script>
  
  <style scoped>
  
  .profile-background{
      /* 배경 이미지 적용 */
      display: flex;
      height: auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-color: #fff;
      justify-content: center;
      margin-top: 100px; /* 헤더 높이 맞춰서 마진 */
      }
  
  .profile-container{
    width: 1130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .profile-info-container{
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
  }
  
  .profile-img{
    width: 400px;
    height: 400px;
    margin-right: 50px;
  }
  
  .profile-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .profile-detail{
    width: 500px;
  }
  
  .profile-name{
    margin-top: 0px;
  }
  
  .project-name{
    font-weight: 700; 
    font-size: 24px;
  }
  
  .contact-text{
    font-weight: 700; 
    margin-bottom: 0px;
  }
  
  .contact-list{
    margin-top: 10px;
  }
  
  
  .mail-link{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .mail-link img{
    width: 20px; 
    height:20px;
  }
  
  .sns-link{
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .sns-link img{
    width: 20px;
    height: 20px;
  }
  
  .profile-project{
    margin-top: 100px;
    width: 1130;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 200px;
    margin-bottom: 100px;
  }
  
  .project-slide-container{
    width: 350px;
    display: flex;
    flex-direction: column;
  
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  
  .project-info{
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
  }
  
  .swiper {
  width: 100%;
  height: 100%;
  margin: auto;
  }
  
  .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  .swiper-slide img {
  /* display: block; */
  width: 100%;
  height: 100%;
  object-fit: contain;
  }
  
  @media screen and (max-width: 768px) {
    .profile-info-container{
          display: flex;
          flex-direction: column;
          /* justify-content: center; */
          align-items: center;
          margin: 0;
        }
    
        .profile-project{
          display: flex;
          flex-direction: column;
          align-items: center;
        }    
    
        .profile-img{
          width: 90vw;
          margin: 0;
        }
    
        .profile-detail{
          width: 90vw;
        }
  }
  
  </style>