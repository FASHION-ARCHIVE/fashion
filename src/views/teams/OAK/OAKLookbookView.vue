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
          "https://kuad-archive.com/2024/OAK/0.jpg",
          "https://kuad-archive.com/2024/OAK/1.jpg",
          "https://kuad-archive.com/2024/OAK/2.jpg",
          "https://kuad-archive.com/2024/OAK/3.jpg",
          "https://kuad-archive.com/2024/OAK/4.jpg",
          "https://kuad-archive.com/2024/OAK/5.jpg",
          "https://kuad-archive.com/2024/OAK/6.jpg",
          "https://kuad-archive.com/2024/OAK/7.jpg",
          "https://kuad-archive.com/2024/OAK/8.jpg",
          "https://kuad-archive.com/2024/OAK/9.jpg",

          "https://kuad-archive.com/2024/OAK/10.jpg",
          "https://kuad-archive.com/2024/OAK/11.jpg",
          "https://kuad-archive.com/2024/OAK/12.jpg",
          "https://kuad-archive.com/2024/OAK/13.jpg",
          "https://kuad-archive.com/2024/OAK/14.jpg",
          "https://kuad-archive.com/2024/OAK/15.jpg",
          "https://kuad-archive.com/2024/OAK/16.jpg",
          "https://kuad-archive.com/2024/OAK/17.jpg",
          "https://kuad-archive.com/2024/OAK/18.jpg",
          "https://kuad-archive.com/2024/OAK/19.jpg",

          "https://kuad-archive.com/2024/OAK/20.jpg",
          "https://kuad-archive.com/2024/OAK/21.jpg",
          "https://kuad-archive.com/2024/OAK/22.jpg",
          "https://kuad-archive.com/2024/OAK/23.jpg",
          "https://kuad-archive.com/2024/OAK/24.jpg",
          "https://kuad-archive.com/2024/OAK/25.jpg",
          "https://kuad-archive.com/2024/OAK/26.jpg",
          "https://kuad-archive.com/2024/OAK/27.jpg",
          "https://kuad-archive.com/2024/OAK/28.jpg",
          "https://kuad-archive.com/2024/OAK/29.jpg",
          
          "https://kuad-archive.com/2024/OAK/30.jpg",
          "https://kuad-archive.com/2024/OAK/31.jpg",
          "https://kuad-archive.com/2024/OAK/32.jpg",
          "https://kuad-archive.com/2024/OAK/33.jpg",
          "https://kuad-archive.com/2024/OAK/34.jpg",
          "https://kuad-archive.com/2024/OAK/35.jpg",
          "https://kuad-archive.com/2024/OAK/36.jpg",
          "https://kuad-archive.com/2024/OAK/37.jpg",
          "https://kuad-archive.com/2024/OAK/38.jpg",
          "https://kuad-archive.com/2024/OAK/39.jpg",
          
          "https://kuad-archive.com/2024/OAK/40.jpg",
          "https://kuad-archive.com/2024/OAK/41.jpg",
          "https://kuad-archive.com/2024/OAK/42.jpg",
          "https://kuad-archive.com/2024/OAK/43.jpg",
          "https://kuad-archive.com/2024/OAK/44.jpg",
          "https://kuad-archive.com/2024/OAK/45.jpg",
          "https://kuad-archive.com/2024/OAK/46.jpg",
          "https://kuad-archive.com/2024/OAK/47.jpg",
          "https://kuad-archive.com/2024/OAK/48.jpg",
          "https://kuad-archive.com/2024/OAK/49.jpg",

          "https://kuad-archive.com/2024/OAK/50.jpg",
          "https://kuad-archive.com/2024/OAK/51.jpg",
          "https://kuad-archive.com/2024/OAK/52.jpg",
          "https://kuad-archive.com/2024/OAK/53.jpg",
          "https://kuad-archive.com/2024/OAK/54.jpg",
          "https://kuad-archive.com/2024/OAK/55.jpg",
          "https://kuad-archive.com/2024/OAK/56.jpg",
          "https://kuad-archive.com/2024/OAK/57.jpg",
          "https://kuad-archive.com/2024/OAK/58.jpg",
          "https://kuad-archive.com/2024/OAK/59.jpg",

          "https://kuad-archive.com/2024/OAK/60.jpg",
          "https://kuad-archive.com/2024/OAK/61.jpg",
          "https://kuad-archive.com/2024/OAK/62.jpg",
          "https://kuad-archive.com/2024/OAK/63.jpg",
          "https://kuad-archive.com/2024/OAK/64.jpg",
          "https://kuad-archive.com/2024/OAK/65.jpg",
          "https://kuad-archive.com/2024/OAK/66.jpg",
          "https://kuad-archive.com/2024/OAK/67.jpg",
          "https://kuad-archive.com/2024/OAK/68.jpg",
          "https://kuad-archive.com/2024/OAK/69.jpg",

          "https://kuad-archive.com/2024/OAK/70.jpg",
          "https://kuad-archive.com/2024/OAK/71.jpg",
          "https://kuad-archive.com/2024/OAK/72.jpg",
          "https://kuad-archive.com/2024/OAK/73.jpg",
          "https://kuad-archive.com/2024/OAK/74.jpg",
          "https://kuad-archive.com/2024/OAK/75.jpg",
          "https://kuad-archive.com/2024/OAK/76.jpg",
          "https://kuad-archive.com/2024/OAK/77.jpg",
          "https://kuad-archive.com/2024/OAK/78.jpg",
          "https://kuad-archive.com/2024/OAK/79.jpg",
          
          "https://kuad-archive.com/2024/OAK/80.jpg",
          "https://kuad-archive.com/2024/OAK/81.jpg",
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
  