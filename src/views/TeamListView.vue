

<template>
  <mainHeader/>
  <div class = "team-background">
    <div class ="image-grid">
      <div class="image-item">
        <router-link to = "/coming-soon"><img class="team 1" alt="team 1" src="@/assets/images/yy.jpeg" /></router-link>
        <div class="caption">팀 1</div>
      </div>
      <div class="image-item">
        <router-link to = "/coming-soon"><img class="team 2" alt="team 2" src="@/assets/images/yy.jpeg" /></router-link>
        <div class="caption">팀 2</div>
      </div>
      <div class="image-item">
        <router-link to = "/coming-soon"><img class="team 3" alt="team 3" src="@/assets/images/yy.jpeg" /></router-link>
        <div class="caption">팀 3</div>
      </div>
      <div class="image-item">
        <router-link to = "/coming-soon"><img class="team 4" alt="team 4" src="@/assets/images/yy.jpeg" /></router-link>
        <div class="caption">팀 4</div>
      </div>
      <div class="image-item">
        <router-link to = "/coming-soon"><img class="team 5" alt="team 5" src="@/assets/images/yy.jpeg" /></router-link>
        <div class="caption">팀 5</div>
      </div>
      <div class="image-item">
        <router-link to = "/coming-soon"><img class="team 6" alt="team 6" src="@/assets/images/yy.jpeg" /></router-link>
        <div class="caption">팀 6</div>
      </div>
  </div>
  </div> 
</template>

<script>
    import mainHeader from '@/components/TopCategory.vue';
    export default {
      name: 'App',
      components: {
        mainHeader
      }
    }
</script>

<style>
@font-face {
  font-family:'Custom';
  src: url('../assets/fonts/Orbitron-VariableFont_wght.ttf') format('truetype');
  font-weight: 400;
}
.team-background{
  /* 배경 이미지 적용 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/01_KUAD_background.png'); 
  background-size: cover;
  background-position: center;
  flex-direction: row;
  overflow: hidden;
}

.image-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr); /* 3개의 열로 구성 */
  grid-gap: 115px; /* 항목 사이의 간격 */
  padding: 15%; /* 컨테이너 내부 여백 */

}
.image-item img {
  margin: 0 auto;
  display: block;
  width: 300px; /* 이미지의 너비 */
  height: 300px; /* 이미지의 높이 */
  object-fit: cover;
  border: 4px solid whitesmoke;
}

.caption{
  color: black;
  margin-top: 10px;
  text-align: center;
}
</style>