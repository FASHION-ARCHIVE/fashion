<template>
  
  <div class="home-background" data-aos="fade-right">
    <div class="text-group">
      <div class="element-KUAD-GRADUATION" data-aos="fade-right" data-aos-delay="500">
        2024 KUAD
        <br />
        GRADUATION FASHION SHOW
      </div>
      <div class="home-category">
        <router-link to = "/team-list"><div class="menulist" data-aos="fade-right" data-aos-delay="1000">PROJECTS</div></router-link>
        <router-link to = "/team-brochuer"><div class="menulist" data-aos="fade-right" data-aos-delay="1300">LOOKBOOK</div></router-link>
        <router-link to = "/runway"><div class="menulist" data-aos="fade-right" data-aos-delay="1500">RUNWAY</div></router-link>
        <router-link to = "/showinfo"><div class="menulist" data-aos="fade-right" data-aos-delay="1700">SHOW INFO</div></router-link>
        <router-link to = "/behind"><div class="menulist" data-aos="fade-right" data-aos-delay="2000">BEHIND</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
@font-face {
  font-family:'Custom';
  src: url('../assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: 400;
}

.home-background {
  background-color: #ffffff;
  display: flex; /* 또는 position: relative; 배경 이미지를 추가하기 위해 변경 */
  flex-direction: column;
  width: 100%;
  height: 100vh; /* 화면의 전체 높이를 차지하도록 설정 */
  background-image: linear-gradient(to right, #ffffff 30%, transparent 30%),url('@/assets/images/home.png'); /* 배경 이미지 추가 */
  background-position: right center; /* 이미지를 오른쪽 중앙에 배치 */
  background-size: cover; /* 이미지가 컨테이너를 완전히 채우도록 확장 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  background-attachment: fixed; /* 스크롤 시 이미지 고정 */
}


.text-group {
  display: flex;
  flex-direction: column;
  width: 100%;
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

</style>