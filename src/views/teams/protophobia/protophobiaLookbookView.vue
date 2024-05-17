<template>
    <mainHeader/>
    <div class="lookbook-background">
      
      <Flipbook class="flipbook" 
      :pages = "pages" 
      :zooms = [1] 
  
      ref="flipbook"
      
      >
    </Flipbook>
    </div>
  </template>
  
  <script>
  import Flipbook from "flipbook-vue";
  import mainHeader from '@/components/TopCategory.vue';
  export default {
    components: {
      Flipbook,
      mainHeader
    },
    data: () => {
      return {
        singlePage: false,
        pages: [
          null,
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종29.jpg",
          

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀 수정 최종48.jpg"
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  
  .lookbook-background{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/background_img.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    margin-top: 100px;
    overflow: hidden;
  }
  .flipbook {
    width: 100vw;
    height: 80vh;
  }
  
  .flipbook .bounding-box {
    box-shadow: 0 0 20px #000;
  }
  </style>
  