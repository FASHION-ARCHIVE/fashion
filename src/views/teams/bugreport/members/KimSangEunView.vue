<template>
  <head>
    <meta name="viewport" content="width=device-width, init-scale=1" />
  </head>

<mainHeader/>
  <div class = "profile-background">
    <div class = "profile-container">
      <div class = "profile-info-container">
        <div class = "profile-img">
          <img src="@/assets/images/bugreport/profile/PROFILE-PHOTO-1-1_BUG-REPORT_KIM-SANGEUN.jpg"/>
        </div>

        <div class = "profile-detail">
          <h3 class = "profile-name">김상은 / KIM SANGEUN</h3>
          <h3 class = "project-name">Mingle-r</h3>
          <h5></h5>

          <p class = "introduce">
            min·gle[ ˈmɪŋɡl ]
            <br>섞이다, 어우러지다; 섞다, 어우르다
            <br><br>우리는 살아가면서 예측 불가능하며 통제할 수 없는 낯섦에 끊임 없이 마주합니다. 그 안에서 ‘나’의 자리를 지키는 동시에 각자의 개성을 지닌 수많은 사람들과 공존해야 합니다. 세상은 결코 혼자 살아갈 수 없는 화합의 장이기 때문입니다. 이에 따라, 우리 모두가 조화를 이루는 주체 ‘mingle-r’가 되길 기대합니다. 
            <br><br>이러한 기대를 서로 어우러지고 섞이며 형태를 이루는 털실 소재를 활용하여 표현해보았습니다.
          </p>

          <div class = "contact-container">
            <h3 class = "contact-text">Contact</h3>
            <h5 class = "contact-list">
              <div class="mail-link">
                <img src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                s0x92e@gmail.com
              </div>
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
            <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_KIMSANGEUN_1.jpg"/></swiper-slide>
            <swiper-slide><img alt = "lookbook-img" src="@/assets/images/bugreport/brochure/BROCHURE-PHOTO_BUG-REPORT_KIMSANGEUN_2.jpg"/></swiper-slide>
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
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0069.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0070.webp"/></swiper-slide>
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