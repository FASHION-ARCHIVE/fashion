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
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT29.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT48.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT49.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT50.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT51.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT52.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT53.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT54.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT55.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT56.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT57.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT58.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT59.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT60.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT61.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT62.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT63.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT64.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT65.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT66.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT67.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT68.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT69.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/Loft/LOFT70.jpg",



          
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
  