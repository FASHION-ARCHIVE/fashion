<template>
    <head>
      <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>
  
  <mainHeader/>
    <div class = "profile-background">
      <div class = "profile-container">
        <div class = "profile-info-container">
          <div class = "profile-img">
            <img src="@/assets/images/loft10/4/PROFILE PHOTO_1_1_Loft1.0_PARK YEBIN.jpg"/>
          </div>
  
          <div class = "profile-detail">
            <h3 class = "profile-name">박예빈 / PARK YE BIN</h3>
            <h3 class = "project-name">땋은 머리를 기다리는 소녀</h3>
            <h5></h5>
  
            <p class = "introduce">
              나가기 전, 머리를 정리하는 시간은 내가 가장 좋아하고, 또 그렇기에 긴장하는 순간이었다. 머리를 정리하고 나가는 수많은 나날 중, 특히 기분이 좋은 날은 땋은 머리를 한 날이었다. 그 헤어스타일 자체를 좋아한다기보다는 다른 날들에 비해 길게 앉아서 기다리는 따분함을 이겨낸 그 기분을 좋아했던 것 같다. 손이 많이 가고 시간이 오래 걸리는 땋은 머리는 나에게, 아마 모든 소녀에게 고진감래를 알려주었고, 힘든 기다림의 시간 동안 설렘이 공존할 수 있다는 것도 알게 해주었다.
            </p>
  
            <div class = "contact-container">
              <h3 class = "contact-text">Contact</h3>
              <h5 class = "contact-list">
                <div class="mail-link">
                  <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                  parkyebin1221@gmail.com 
                </div>
                <a class = "sns-link" href="https://www.instagram.com/parkyeebiin/" target="_blank">
                  <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                  @parkyeebiin
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
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/loft10/4/BROCHURE PHOTO_Loft 1.0_PARK YEBIN_1.jpg"/></swiper-slide>
              <swiper-slide><img alt = "lookbook-img" src="@/assets/images/loft10/4/BROCHURE PHOTO_Loft 1.0_PARK YEBIN_2.jpg"/></swiper-slide>
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
              <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0083.webp"/></swiper-slide>
              <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0084.webp"/></swiper-slide>
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