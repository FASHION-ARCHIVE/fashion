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
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종29.jpg",
          

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/2팀_수정_최종48.jpg"
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
  