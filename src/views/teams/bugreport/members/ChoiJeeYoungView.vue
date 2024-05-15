<template>
  <head>
    <meta name="viewport" content="width=device-width, init-scale=1" />
  </head>
  <mainHeader/>
    <div class = "profile-background">
      <div class = "profile-container">
        <div class = "profile-info-container">
          <div class = "profile-img">
            <img src="@/assets/images/bugreport/profile/PROFILE-PHOTO_1_1_BUGREPORT_CHOI JEEYOUNG.jpg"/>
          </div>
  
          <div class = "profile-detail">
            <h3 class = "profile-name">최지영 / CHOI JEEYOUNG</h3>
            <h3 class = "project-name">Peacemaker</h3>
            <h5></h5>
  
            <p class = "introduce">
              ‘인간의 외관은 누가 정한 것인가?’라는 의문은 '세상은 사실 프로그래밍 된 것이 아닐까?'라는 의심으로 번졌다. 평범함을 추구하는 사람들이 마치 NPC처럼 느껴졌다. 혹시 나는 시스템의 버그가 아닐까? 만약 그렇다면, 외관에 대한 혁명을 일으키고 싶다.
              <br><br>신체적인 힘에 의존해 온 인간은 총기의 발명으로 인해 그 편차가 줄어들었다. 특히, 여성들도 쉽게 사용할 수 있는 'single action army'는 사회적 힘의 구조를 변화시켰다. 나는 'peacemaker'라는 명예로운 별칭을 가진 이 총을 외관의 자유를 상징하는 도구로 제시하고자 한다. 
              <br><br>취향의 평화를 제안하는 이 컬렉션을  ‘fairy tech wear'라는 새로운 장르로 표현했다.
            </p>
  
            <div class = "contact-container">
              <h3 class = "contact-text">Contact</h3>
              <h5 class = "contact-list">
                <div class="mail-link">
                  <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                  jeeyoung0902@naver.com
                </div>
              <a class = "sns-link" href="https://www.instagram.com/2iyoiq/" target="_blank">
                  <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                  @2iyoiq
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
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_CHOI JEEYOUNG_1.jpg"/></swiper-slide>
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_CHOI JEEYOUNG_2.jpg"/></swiper-slide>
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
              <swiper-slide><img alt = "runway-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
              <swiper-slide><img alt = "runway-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
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