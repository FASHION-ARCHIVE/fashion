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
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia29.jpg",
          

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia48.jpg"
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
  