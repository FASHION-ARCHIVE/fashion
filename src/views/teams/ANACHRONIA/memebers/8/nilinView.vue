<template>
    <head>
      <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>
  
  <mainHeader/>
    <div class = "profile-background">
      <div class = "profile-container">
        <div class = "profile-info-container">
          <div class = "profile-img">
            <img src="@/assets/images/anachronia/8/PROFILE-PHOTO-1-1_ANACHRONIA_NI-LIN.jpg"/>
          </div>
  
          <div class = "profile-detail">
            <h3 class = "profile-name">예임 / NI LIN</h3>
            <h3 class = "project-name">Fish bones And The Mermaid Legend, 물고기 화석</h3>
            <h5></h5>
  
            <p class = "introduce">
              물고기 화석의 형성은 세 단계를 거쳐왔다. 오래 전(수억 년 전) 물고기는 강과 호수에 살았다. 죽은 후 물고기는 바닥으로 가라앉고 퇴적물로 덮였다. 수중 공기가 차단되고 진흙과 모래로 덮여 있기 때문에 물고기의 몸이 썩지 않았다. 수억 년의 변화와 공기로부터의 장기간 고립 이후 고온과 고압의 영향을 받아 몸은 진흙과 모래로 점점 더 두꺼워지고 압력도 증가한다. 몇 년 후, 물고기 위와 아래의 미사는 단단한 퇴적암이 되었고, 이 퇴적암에 잡힌 물고기는 매우 단단한 돌이 되었는데, 이것이 바로 '물고기 화석’이다. 이 단단한 화석은 나를 신비한 심해 탐험으로 데려가 반짝이는 패션 영감을 준다. 이러한 물고기 화석이 가져다주는 우아함과 평온함의 시각적 향연을 펼친다.
            </p>
  
            <div class = "contact-container">
              <h3 class = "contact-text">Contact</h3>
              <h5 class = "contact-list">
                <div class="mail-link">
                  <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                  nilin988@naver.com 
                </div>
              <a class = "sns-link" href="https://www.instagram.com/nilinzo/" target="_blank">
                  <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                  @nilinzo
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
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/anachronia/8/BROCHURE-PHOTO_ANACHRONIA_NI-LIN_1.jpg"/></swiper-slide>
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/anachronia/8/BROCHURE-PHOTO_ANACHRONIA_NI-LIN_2.jpg"/></swiper-slide>
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