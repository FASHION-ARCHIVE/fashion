<template>
  <head>
    <meta name="viewport" content="width=device-width, init-scale=1" />
  </head>
    <mainHeader/>
      <div class = "profile-background">
        <div class = "profile-container">
          <div class = "profile-info-container">
            <div class = "profile-img">
              <img src="@/assets/images/bugreport/profile/PROFILE-PHOTO-1_1_BUG-REPORT_JIHYUN LEE.jpg"/>
            </div>
    
            <div class = "profile-detail">
              <h3 class = "profile-name">이지현 / LEE JIHYUN</h3>
              <h3 class = "project-name">GET ON THE WHEEL, GET OFF THE WHEEL</h3>
              <h5></h5>
    
              <p class = "introduce">
                톱니 바퀴의 부품이 되어버린 나와 이로부터의 탈출의지.
                <br><br>도시의 획일성과 반복되는 일상을 거부한다. 
                <br>이빨 빠진 톱니바퀴에 올라타 나는 자유를 갈망한다.

                <br><br>반물질주의적 생활방식을 지지하던 Beatnik과 오토바이,
                <br>모로코의 모스크 건축양식, 사막에서 영감을 받아 진행한 프로젝트
              </p>
    
              <div class = "contact-container">
                <h3 class = "contact-text">Contact</h3>
                <h5 class = "contact-list">
                  <div class="mail-link">
                    <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                    2z.hn0417@gmail.com
                  </div>
                <a class = "sns-link" href="https://www.instagram.com/2z.hn/" target="_blank">
                    <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                    @2z.hn
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
                <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_JIHYUN LEE_1.jpg"/></swiper-slide>
                <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_JIHYUN LEE_2.jpg"/></swiper-slide>
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
    
      /* margin-top: 100px; */
    
      /* background-color: rgba(133, 155, 160, 0.4); */
    
      /* margin-bottom: 100px; */
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