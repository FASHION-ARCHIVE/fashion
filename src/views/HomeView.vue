<template>
  <div class="home-background">
    
    <div class="text-group">
      <div class="element-KUAD-GRADUATION">
        2024 KUAD
        <br />
        GRADUATION FASHION SHOW
      </div>
      <div class="home-category">
        <router-link to = "/team-list"><div class="project">PROJECTS</div></router-link>
        <router-link to = "/team-brochuer"><div class="look-book">LOOKBOOK</div></router-link>
        <router-link to = "/coming-soon"><div class="runway">RUNWAY</div></router-link>
        <router-link to = "/coming-soon"><div class="show-info">SHOW INFO</div></router-link>
        <router-link to = "/coming-soon"><div class="behind">BEHIND</div></router-link>
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
  src: url('../assets/fonts/Orbitron-VariableFont_wght.ttf') format('truetype');
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

.home-background .project {
  color: #000000;
  font-size: 50px;
}

.home-background .look-book {
  color: #000000;
  font-size: 50px;
}

.home-background .show-info {
  color: #000000;
  font-size: 50px;
}

.home-background .runway {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
}

.home-background .behind {
  color: #000000;
  font-size: 50px;
}





.home-background .project:hover{
  text-decoration: underline;
}
.home-background .show-info:hover{
  text-decoration: underline;
}
.home-background .runway:hover{
  text-decoration: underline;
}
.home-background .look-book:hover{
  text-decoration: underline;
}
.home-background .behind:hover{
  text-decoration: underline;
}
</style>