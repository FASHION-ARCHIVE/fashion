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
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_01.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_02.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_03.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_04.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_05.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_06.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_07.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_08.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_09.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_29.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_48.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_49.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_50.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_51.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/6팀_페이지_52.jpg"
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
  