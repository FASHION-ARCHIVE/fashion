<template>
    <head>
      <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>
  
  <mainHeader/>
    <div class = "profile-background">
      <div class = "profile-container">
        <div class = "profile-info-container">
          <div class = "profile-img">
            <img src="@/assets/images/protophobia/3/PROFILE PHOTO 1_1_protophobia_YUN SOHYE.jpg"/>
          </div>
  
          <div class = "profile-detail">
            <h3 class = "profile-name">윤소혜 / YUN SOHYE</h3>
            <h3 class = "project-name">LOVE DEFICIENCY</h3>
            <h5></h5>
  
            <p class = "introduce">
              우리는 모두 완벽하지 못하면 사랑받지 못합니다.
              <br><br>완벽에 대한 두려움은 곧 애정결핍에서 비롯됩니다.
              <br>도피하려 발버둥 쳐도, 사랑받고 싶은 과도한 인정 욕구의 내재는 언제나 나를 옭아맸죠.
              <br>어떠한 형태로든 완벽해지지 못하면, 애정을 끝내 차지할 수 없게 됩니다.
              <br>존재가치는 0으로 귀결,
              <br>내 안에 박힌 유리 조각들이 역으로 세상에 날카롭게 형태를 드러내어 비추고 있습니다.
              <br><br><br>타인으로부터 관심받기 위한 끊임없는 결핍의 삶.
              <br>깨진 유린 조각들로부터 시작된 애정결핍.
              <br><br>제발 날 더 사랑해 줘!
            </p>
  
            <div class = "contact-container">
              <h3 class = "contact-text">Contact</h3>
              <h5 class = "contact-list">
                <div class="mail-link">
                  <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                  roeserence@naver.com
                </div>
              <a class = "sns-link" href="https://www.instagram.com/tony.tony____/" target="_blank">
                  <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                  @tony.tony____
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
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/protophobia/3/BROCHURE PHOTO_protophobia_YUN SOHYE_1.jpg"/></swiper-slide>
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/protophobia/3/BROCHURE PHOTO_protophobia_YUN SOHYE_2.jpg"/></swiper-slide>
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