<template>
  <mainHeader/>
  <div class="lookbook-background">
    <div class="lookbook-container"> 
        <img class = "left-icon" @click="flipLeft" src="@/assets/images/icon/left-swipe.png" >
        <Flipbook class="flipbook" 
        :pages = "pages" 
        :zooms = [1] 

        ref="flipbook">
        </Flipbook>
        <img class = "right-icon" @click="flipRight" src="@/assets/images/icon/right-swipe.png" >
      
    </div>
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
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia1.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia2.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia3.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia4.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia5.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia6.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia7.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia8.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia9.webp",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia10.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia11.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia12.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia13.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia14.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia15.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia16.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia17.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia18.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia19.webp",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia20.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia21.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia22.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia23.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia24.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia25.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia26.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia27.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia28.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia29.webp",
          

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia30.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia31.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia32.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia33.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia34.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia35.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia36.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia37.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia38.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia39.webp",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia40.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia41.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia42.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia43.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia44.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia45.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia46.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia47.webp",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/protophobia48.webp"
        ]
      };
    },
  methods: {
    flipRight() {
      this.$refs.flipbook.flipRight();
    },
    flipLeft() {
      this.$refs.flipbook.flipLeft();
    }
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
  .lookbook-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.left-icon{
  cursor: pointer;
  margin-left: 50px;
  width: 30px;
}
.right-icon{
  cursor: pointer;
  margin-right: 50px;
  width: 30px;
}
.flipbook {
  width: 80vw;
  height: 80vh;
}
  
  .flipbook .bounding-box {
    box-shadow: 0 0 20px #000;
  }

  @media screen and (max-width: 768px) {
  .left-icon{
    display: none;
  }

  .right-icon{
    display: none;
  }
  .flipbook {
    width: 100vw;
    height: 80vh;
  }
}
  </style>
  