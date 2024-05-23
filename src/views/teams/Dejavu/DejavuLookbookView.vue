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
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu29.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu48.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu49.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu50.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu51.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/dejavu/dejavu52.jpg"
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
  .flipbook {
    width: 100vw;
    height: 80vh;
  }
}
  </style>
  