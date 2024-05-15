<template>
  <head>
    <meta name="viewport" content="width=device-width, init-scale=1" />
  </head>

<mainHeader/>
  <div class = "profile-background">
    <div class = "profile-container">
      <div class = "profile-info-container">
        <div class = "profile-img">
          <img src="@/assets/images/bugreport/profile/PROFILE_PHOTO_1_1_BUGREPORT_LEEJUYOUNG.jpg"/>
        </div>

        <div class = "profile-detail">
          <h3 class = "profile-name">이주영 / LEE JUYOUNG</h3>
          <h3 class = "project-name">EXCRETION!</h3>
          <h5></h5>

          <p class = "introduce">
            보여주고, 내뱉고, 배설하고자 하는 욕구.
            <br><br>아주 어린 시절부터 반항적이었습니다. 누군가에겐 공격적으로 보였을 수도 있습니다. 규칙이라면 질색했습니다. 지금도 여전합니다. 갈망하던 무언가를 배설하고 노출시키고싶은 욕구를 외부, 내부 영역 구분 없이 투명하게 비춰 모든 것을 보여주는 ‘동물표본’으로부터 영감을 받아 표현했습니다. 내장을 드러내고 흘러내며 제 목소리도 마침내 뱉어진 것 같습니다.
            <br><br>뱉어내고 개워내지만 찬란하도록!
          </p>

          <div class = "contact-container">
            <h3 class = "contact-text">Contact</h3>
            <h5 class = "contact-list">
              <div class="mail-link">
                <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                juyoung2556@naver.com
              </div>
            <a class = "sns-link" href="https://www.instagram.com/leejuhamster/" target="_blank">
                <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                @leejuhamster
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
            <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BORICHURE_PHOTO_BUGREPORT_LEEJUYOUNG-1.jpg"/></swiper-slide>
            <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BOROCHURE_PHOTO_BUGREPORT_LEEJUYOUNG-2.jpg"/></swiper-slide>
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