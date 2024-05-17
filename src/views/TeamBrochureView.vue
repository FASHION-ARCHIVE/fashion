
<template>
    <mainHeader/>
    <div class ="team-brochure-background">
        <div class="team-brochure-container">
            <!-- <div class="team-brochure-text">TEAM BROCHURE</div> -->
            <div class="team-brochure-image-container">
                <div class="image-item" data-aos="zoom-out" data-aos-duration="1000">
                  <router-link to = "/protophobia/lookbook"><img src="https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종1.jpg" /></router-link>
                  <div class="caption">protophobia</div>
                </div>
                <div class="image-item" data-aos="zoom-out" data-aos-duration="1000">
                  <router-link to = "/coming-soon"><img src="@/assets/images/yy.jpeg" /></router-link>
                  <div class="caption">OAK</div>
                </div>
                <div class="image-item" data-aos="zoom-out" data-aos-duration="1000">
                  <router-link to = "/coming-soon"><img src="@/assets/images/yy.jpeg" /></router-link>
                  <div class="caption">ANACHRONIA</div>
                </div>
                <div class="image-item" data-aos="zoom-out" data-aos-duration="1000">
                  <router-link to = "/bugreport/lookbook"><img src="https://d2d7g45pzqvt7g.cloudfront.net/bugreport/000%E1%84%87%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3-%E1%84%91%E1%85%AD%E1%84%8C%E1%85%B5000.jpg" /></router-link>
                  <div class="caption">BUG REPORT</div>
                </div>
                <div class="image-item" data-aos="zoom-out" data-aos-duration="1000">
                  <router-link to = "/Loft/lookbook"><img src="https://d2d7g45pzqvt7g.cloudfront.net/Loft/3팀_최종.jpg" /></router-link>
                  <div class="caption">Loft 1.0</div>
                </div>
                <div class="image-item" data-aos="zoom-out" data-aos-duration="1000">
                  <router-link to = "/coming-soon"><img src="@/assets/images/yy.jpeg" /></router-link>
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
         name: 'team-brochuer',
         components: {
           mainHeader, 
           mainFooter
         }
       }
  </script>
  
  <style scoped>
  .image-item img{
    object-fit: contain;
  }

  .team-brochure-background{
    /* 배경 이미지 적용 */
    display: flex;
    height: auto;
    background-image: url('@/assets/images/background_img.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    margin-top: 100px; /* 헤더 높이 맞춰서 마진 */
    padding-bottom: 100px; /* 푸터 사이 간격 */
  }
  
  .team-brochure-container{
    width: 1130px;
    display: flex;
    flex-direction: column;
  }
  .team-brochure-text {
    display: flex;
    font-size: 28px;
    font-family: 'Custom'; /* 필요한 경우 폰트 스타일 지정 */
    margin-top: 30px;
  }
  
  .team-brochure-image-container {
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
  }
  
  
  .caption{
    color: black;
    margin-top: 10px;
    font-family: 'Custom'; /* 필요한 경우 폰트 스타일 지정 */
  }
  </style>