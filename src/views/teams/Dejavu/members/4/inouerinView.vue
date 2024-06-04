<template>
    <head>
      <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>
  
  <mainHeader/>
    <div class = "profile-background">
      <div class = "profile-container">
        <div class = "profile-info-container">
          <div class = "profile-img">
            <img src="@/assets/images/dejavu/4/PROFILE PHOTO 1_1_Deja vu_INOUE RIN.jpg"/>
          </div>
  
          <div class = "profile-detail">
            <h3 class = "profile-name">이노우에린 / INOUE RIN</h3>
            <h3 class = "project-name">偽善</h3>
            <h5></h5>
  
            <p class = "introduce">
              원형을 모티브로 순환, 그리고 무한성을 구체화하였고 반복적인 환생을 통한 트라우마, 이를 통한 데자뷰를 기묘한 세계관을 통해 표현하는 동시에 인간의 위선적인 본능을 의상으로 드러낸다.
              <br><br>&nbsp;친절한 금자씨”의 복수 계획을 달성하기 위해 친절한 척 하는 금자를 컨셉으로, 순진한 미소 뒤에 숨겨진 악의와 치밀한 복수를 계산하는 그녀의 모습을 보여주고자 하였다. 죄수복의 컬러인 레몬 옐로우를 포인트로 사용해 몸을 감싸는 것으로 위선적인 모순성을 표현하였고, 점차 쌓여가는 복수심을 연상시키는 디테일을 도입함으로써 금자의 양면성을 나타내었다.
              
            </p>
  
            <div class = "contact-container">
              <h3 class = "contact-text">Contact</h3>
              <h5 class = "contact-list">
                <div class="mail-link">
                  <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                  rin2.200088@gmail.com
                </div>
                <a class = "sns-link" href="https://www.instagram.com/rin_0808_/" target="_blank">
                  <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                  @rin_0808_
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
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/dejavu/4/BROCHURE PHOTO_Deja vu_INOUE RIN_1.jpg"/></swiper-slide>
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/dejavu/4/BROCHURE PHOTO_Deja vu_INOUE RIN_2.jpg"/></swiper-slide>
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
              <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0103.webp"/></swiper-slide>
              <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0104.webp"/></swiper-slide>
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