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
}
.left-icon{
  margin-left: 50px;
  width: 30px;
}
.right-icon{
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
}
  </style>
  