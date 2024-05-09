<template>
<mainHeader/>
  <div class = "profile-background">
    <div class = "profile-container">
      <div class = "profile-info-container">
        <div class = "profile-img">
          <img src="@/assets/images/profile/profile_1_1_1.jpeg"/>
        </div>

        <div class = "profile-detail">
          <h3>변상윤</h3>
          <h4>BYUN SANGYOON</h4>
          <h5></h5>

          <p class = "introduce">
            안녕하세요, 마이메이트 서비스의 기획 및 디자인을 맡은 예입니다.
            <br><br>
            장기적인 프로젝트를 기간동안, 각자의 자리에서 늘 최선을 다하는 멋진 팀원들을 만나 의미있는 성취와 배움을 느꼈습니다. 함께 고민하며 밤을 새운 커넥트 팀원들과 곁에서 더 좋은 방향으로 지도해주신 교수님들께 감사의 인사를 전합니다.
            <br><br>
            앞으로 나아갈 디지털미디어학과의 모든 학우 분들을 응원하겠습니다!
          </p>

          <div class = "contact-container">
            <h2 style="font-weight: bold;">Contact</h2>
            <h4>
              <div style="display: flex; flex-direction: row;">
                <img style = "width: 20px; height: 20px;" src = "@/assets/images/icon/mail_icon_bw.png">&nbsp;
                BSY991204@naver.com
              </div>
              <a class = "sns-link" href="https://www.instagram.com/135yoon/" target="_blank">
                <img src = "@/assets/images/icon/insta_icon_bw.png">&nbsp;
                @135yoon
              </a>
            </h4>
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
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
          </swiper>
          <div class = "project-info">Piece 1</div>
        </div>
        <div class = "project-slide-container">
          <swiper
            :navigation = "true"
            :modules = "modules"
            class = "pg-slide"
          >
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
            <swiper-slide><img alt = "behind-img" src="@/assets/images/test_123.jpeg"/></swiper-slide>
          </swiper>
          <p class = "project-info">Piece 2</p>
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

.sns-link{
  color: #000;
  display: flex;
  flex-direction: row;
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
  font-size: 24px;
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