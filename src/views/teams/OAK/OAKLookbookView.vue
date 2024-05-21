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
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/0.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/29.jpg",
          
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/39.jpg",
          
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/48.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/49.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/50.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/51.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/52.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/53.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/54.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/55.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/56.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/57.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/58.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/59.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/60.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/61.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/62.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/63.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/64.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/65.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/66.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/67.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/68.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/69.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/70.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/71.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/72.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/73.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/74.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/75.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/76.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/77.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/78.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/79.jpg",
          
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/80.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/OAK/81.jpg",
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
  