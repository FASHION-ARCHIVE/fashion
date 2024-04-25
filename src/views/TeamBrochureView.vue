
<template>
    <mainHeader/>
    <div class ="team-brochure-background">
        <div class="team-brochure-container">
            <div class="team-brochure-text">TEAM BROCHURE</div>
            <div class="team-brochure-image-container">
                <div class="image-item">
                    <router-link to = "/bugreport/lookbook"><img class="team 1" alt="team 1" src="@/assets/images/yy.jpeg" /></router-link>
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
         name: 'team-brochuer',
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

  .team-brochure-background{
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
  }
  </style>