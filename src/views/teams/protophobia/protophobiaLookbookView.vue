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
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA29.jpg",
          

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/protophobia/PROTOPHOBIA48.jpg"
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
  