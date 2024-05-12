<template>
  <meta name="viewport" content="width=device-width, init-scale=1">
    <div class="splash-screen">
      <!-- <img src="@/assets/images/웹사이트-이미지-가공본.jpg" alt="로고"> -->
      <p class = "splash-info">PROTOTYPE</p>
      <!-- <img src = "@/assets/images/splash_test2.jpg"> -->
    </div>

  <div class="home-background" data-aos="fade-right" data-aos-once="true">

    <div class="text-group">
      <div class="element-KUAD-GRADUATION" data-aos="fade-right" data-aos-delay="1500" data-aos-once="true">
        2024 KUAD
        <br />
        GRADUATION FASHION SHOW
      </div>
      <div class="home-category">
        <router-link to = "/team-list"><div class="menulist" data-aos="fade-right" data-aos-delay="2000" data-aos-once="true">PROJECTS</div></router-link>
        <router-link to = "/team-brochuer"><div class="menulist" data-aos="fade-right" data-aos-delay="2300" data-aos-once="true">LOOKBOOK</div></router-link>
        <router-link to = "/runway"><div class="menulist" data-aos="fade-right" data-aos-delay="2500" data-aos-once="true">RUNWAY</div></router-link>
        <router-link to = "/showinfo"><div class="menulist" data-aos="fade-right" data-aos-delay="2700" data-aos-once="true">SHOW INFO</div></router-link>
        <router-link to = "/behind"><div class="menulist" data-aos="fade-right" data-aos-delay="2900" data-aos-once="true" data-aos-offset="-1000">BEHIND</div></router-link>
        
        <div class = "icon-list" data-aos="fade-right" data-aos-delay="3000" data-aos-once="true" data-aos-offset="-1400">
          <a href="https://www.instagram.com/kuad_archive/" target="_blank"><img class = "icon" alt = "instagram" src = @/assets/images/icon/insta_icon_bw.png></a>
          <a href="https://www.youtube.com/" target="_blank"><img class = "icon" alt = "youtube" src = @/assets/images/icon/youtube_icon_bw.png></a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import SplashScreen from '@/components/SplashScreenView.vue';


export default {
  name: "HomePage",
  components: {
    },
};
</script>

<style scoped>

.splash-info{
  display: flex;
  font-size: 15vw;
  color: #000;
  margin: auto;
  font-family: "Nanum" !important;
  white-space: nowrap;
}

.splash-screen {
    /* opacity: 0; */
    /* visibility: hidden; */
    position: absolute;
    height: 100%; /* 전체 화면을 채움 */
    width: 100%;
    
    animation: hideSplashScreen 0.5s ;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    z-index: 200;
    background-color: #fff;
    display: flex;
    justify-content: center;
  }

  .splash-screen img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @keyframes hideSplashScreen {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      display: none;
      visibility: hidden;
    }
  }

.home-background {
  background-color: #ffffff;
  display: flex; /* 또는 position: relative; 배경 이미지를 추가하기 위해 변경 */
  flex-direction: column;
  width: 100%;
  height: 100vh; /* 화면의 전체 높이를 차지하도록 설정 */
  background-image: linear-gradient(to right, #ffffff 30%, transparent 30%),url('@/assets/images/home.jpg'); /* 배경 이미지 추가 */
  background-position: right center; /* 이미지를 오른쪽 중앙에 배치 */
  background-size: cover; /* 이미지가 컨테이너를 완전히 채우도록 확장 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  background-attachment: fixed; /* 스크롤 시 이미지 고정 */
}


.text-group {
  display: flex;
  flex-direction: column;
  width: 100% - 50px;
  margin-left: 50px;
  height: 100%;
  font-family: "Custom", Helvetica;
  justify-content: flex-start;
}

.home-category{
  margin-left:30px;
  display:flex;
  flex-direction: column;
  height: 100%;
  gap:20px;
  justify-content: center;
  width: 270px;
}

.home-background .element-KUAD-GRADUATION {
  margin-top: 30px;
  margin-left: 30px;
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 16px;
}

.menulist {
  /* display: inline-flex; */
  color: #000000;
  font-size: 50px;
  position: relative;
  display: inline-flex;
  text-decoration: none;
  width: auto;
}

.menulist:after{
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000;
  content: '';
  opacity: 0;
  -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
  -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
  transition: height 0.3s, opacity 0.3s, transform 0.3s;
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  transform: translateY(-10px);
}

.menulist:hover:after, .menulist:focus:after {
  height: 5px;
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}

.look-book {
  display: inline-flex;
  color: #000000;
  font-size: 50px;
}

.show-info {
  display: inline-flex;
  color: #000000;
  font-size: 50px;
}

.runway {
  display: inline-flex;
  color: #000000;
  font-size: 50px;
}

.behind {
  display: inline-flex;
  color: #000000;
  font-size: 50px;
}

/* .home-background .project:hover{
  text-decoration: underline;
} */

.home-background .look-book:hover{
  text-decoration: underline;
}

.home-background .runway:hover{
  text-decoration: underline;
}

.home-background .show-info:hover{
  text-decoration: underline;
}
.home-background .behind:hover{
  text-decoration: underline;
}

.icon-list{
    display: flex;
    margin-bottom: 20px;
}

.icon-list a{
    padding: 10px 10px;
}
.icon{
    width: 20px;
}
</style>