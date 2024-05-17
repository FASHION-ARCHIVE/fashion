

<template>
  <mainHeader/>
  <div class = "team-background">
    <div class="team-list-container">
      <!-- <div class="team-list-text">TEAM LIST</div> -->
      <div class ="image-grid">
        <div class="image-item" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
          <router-link to = "/protophobia"><img src="@/assets/images/protophobia/poster/protophobia_TEAMPOSTER.jpg" /></router-link>
          <div class="caption">protophobia</div>        
        </div>
        <div class="image-item" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
          <router-link to = "/oak"><img src="@/assets/images/OAK/poster/OAK_TEAMPOSTER.jpg" /></router-link>
          <div class="caption">OAK</div>         
        </div>
        <div class="image-item" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
          <router-link to = "/ANACHRONIA"><img src="@/assets/images/anachronia/poster/Anachronia_TEAMPOSTER.jpg" /></router-link>
          <div class="caption">ANACHRONIA</div>
        </div>
        <div class="image-item" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
          <router-link to = "/bugreport"><img src="@/assets/images/bugreport/poster/tmp_bug.png" /></router-link>
          <div class="caption">BUG REPORT</div>
        </div>
        <div class="image-item" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
          <router-link to = "/Loft"><img src="@/assets/images/loft10/poster/Loft-1.0_TEAMPOSTER.jpg" /></router-link>
          <div class="caption">Loft 1.0</div>
        </div>
        <div class="image-item" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
          <router-link to = "/Dejavu"><img src="@/assets/images/dejavu/poster/Dejavu_TEAMPOSTER.jpg" /></router-link>
          <div class="caption">Deja vu</div>
        </div>
      </div>
    </div>
  </div>
  <mainFooter/>
</template>

<script>
    import mainHeader from '@/components/TopCategory.vue';
    import mainFooter from '@/components/Footer.vue';
    export default {
       name: 'TeamList',
       components: {
         mainHeader,
         mainFooter
       }
     }
</script>

<style scoped>

.team-background{
  /* 배경 이미지 적용 */
  display: flex;
  height: auto;
  background-image: url('@/assets/images/background_img.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin-top: 100px; /* 헤더 높이 맞춰서 마진 */
  padding-bottom: max(100px); /* 푸터 사이 간격 */
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
  object-fit: contain;
}


.caption{
  color: black;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
    .image-grid{
      flex-direction: column;
      align-items: center;
    }
}
</style>