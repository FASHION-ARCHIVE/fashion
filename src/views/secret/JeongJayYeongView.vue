<template>
    <mainHeader/>
      <div class = "profile-background">
        <div class = "profile-container">
          <div class = "profile-info-container">
            <div class = "profile-img">
              <img src="@/assets/images/secret/jeong_profile.jpeg"/>
            </div>
    
            <div class = "profile-detail">
              <h3 class = "profile-name">정제영 / JEONG JAYYEONG</h3>
              <h3 class = "project-name">No Blueberries</h3>
              <h5></h5>
    
              <p class = "introduce">
                i like no blueberries in my ice-cream cake
                <br><br>롤토체스 잘해요 거품적당히눈덮인#KR1
                <br><br>kuad 화이팅
              </p>
    
              <div class = "contact-container">
                <h3 class = "contact-text">Contact</h3>
                <h5 class = "contact-list">
                  <div class="mail-link">
                    <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                    aia1235@naver.com
                  </div>
                <a class = "sns-link" href="https://www.instagram.com/jaboog_ah/" target="_blank">
                    <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                    @jaboog_ah
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
                class = "pg-slide"
              >
                <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_BYUN SANGYOON_1.jpg"/></swiper-slide>
                <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_BYUN SANGYOON_2.jpg"/></swiper-slide>
              </swiper>
              <div class = "project-info">LOOKBOOK</div>
            </div>
            <div class = "project-slide-container">
              <swiper
                :navigation = "true"
                :modules = "modules"
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
    
    </style>