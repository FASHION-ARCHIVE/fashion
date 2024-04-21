

<template>
  <mainHeader/>
  <div class = "team-background">
    <div class="team-list-container">
      <div class="team-list-text">TEAM LIST</div>
      <div class ="image-grid">
        <div class="image-item">
          <router-link to = "/bugreport"><img class="team 1" alt="team 1" src="@/assets/images/yy.jpeg" /></router-link>
          <div class="caption">BUG REPORT</div>
        </div>
        <div class="image-item">
          <router-link to = "/coming-soon"><img class="team 2" alt="team 2" src="@/assets/images/yy.jpeg" /></router-link>
          <div class="caption">ANACHRONIA</div>
        </div>
        <div class="image-item">
          <router-link to = "/coming-soon"><img class="team 3" alt="team 3" src="@/assets/images/yy.jpeg" /></router-link>
          <div class="caption">PROTOPHOBIA</div>
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
  </div> 
</template>

<script>
    import mainHeader from '@/components/TopCategory.vue';
    export default {
       name: 'TeamList',
       components: {
         mainHeader
       }
     }
</script>

<style>
@font-face {
  font-family:'Custom';
  src: url('../assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
  font-weight: 400;
}
.team-background{
  /* 배경 이미지 적용 */
  display: flex;
  height: auto;
  background-image: url('@/assets/images/01_KUAD_background.png'); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin-top: 144px;
}

.team-list-container{
  width: 1130px;
  display: flex;
  flex-direction: column;
}
.team-list-text {
  display: flex;
  font-size: 28px;
  font-family: 'Custom'; /* 필요한 경우 폰트 스타일 지정 */
  margin-top: 30px;
}

.image-grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image-item img {
  margin-top: 30px;
  display: block;
  width: 300px; /* 이미지의 너비 */
  height: 400px; /* 이미지의 높이 */
  object-fit: cover;
  border: 4px solid whitesmoke;
}


.caption{
  color: black;
  margin-top: 10px;
  text-align: center;
}
</style>