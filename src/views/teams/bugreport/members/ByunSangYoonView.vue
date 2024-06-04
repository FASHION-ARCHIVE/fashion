<template>
  <head>
    <meta name="viewport" content="width=device-width, init-scale=1" />
  </head>

<mainHeader/>
  <div class = "profile-background">
    <div class = "profile-container">
      <div class = "profile-info-container">
        <div class = "profile-img">
          <img src="@/assets/images/bugreport/profile/PROFILE_PHOTO_1_1_BUGREPORT_BYUN SANGYOON.jpg"/>
        </div>

        <div class = "profile-detail">
          <h3 class = "profile-name">변상윤 / BYUN SANGYOON</h3>
          <h3 class = "project-name">용화(蛹化)</h3>
          <h5></h5>

          <p class = "introduce">
            애벌레에서 번데기로의 변화는 번데기에서 나비로의 진화보다 더 깊은 숭고함을 갖고 있습니다.
            <br><br>애벌레의 자유로운 움직임과는 달리, 번데기는 행동에 제약을 받으며 몸이 녹아내리고 재구성되는 과정을 겪습니다. 이는 스스로를 가두는 역설이지만, 성장과 발전은 편안한 영역을 벗어나는 것에서 시작됩니다. 저는 애벌레로서의 경험을 바탕으로 번데기로 재탄생하여 더 나아가고자 합니다. 선택과 자유를 벗어나 구속된 상태에서도 성장하는 과정이 필요합니다.
            <br><br>이러한 애벌레에서 번데기로의 탈피과정을 옷으로 표현해봤습니다. 
          </p>

          <div class = "contact-container">
            <h3 class = "contact-text">Contact</h3>
            <h5 class = "contact-list">
              <div class="mail-link">
                <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                BSY991204@naver.com
              </div>
            <a class = "sns-link" href="https://www.instagram.com/135yoon/" target="_blank">
                <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                @135yoon
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
            <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_BYUN SANGYOON_1.jpg"/></swiper-slide>
            <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_BYUN SANGYOON_2.jpg"/></swiper-slide>
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
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0067.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0068.webp"/></swiper-slide>
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