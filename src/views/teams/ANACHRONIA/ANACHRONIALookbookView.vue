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
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종1.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종2.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종3.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종4.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종5.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종6.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종7.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종8.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종9.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종10.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종11.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종12.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종13.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종14.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종15.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종16.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종17.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종18.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종19.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종20.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종21.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종22.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종23.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종24.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종25.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종26.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종27.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종28.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종29.jpg",
          

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종30.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종31.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종32.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종33.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종34.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종35.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종36.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종37.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종38.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종39.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종40.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종41.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종42.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종43.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종44.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종45.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종46.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종47.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종48.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종49.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종50.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종51.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종52.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종53.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종54.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종55.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종56.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종57.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종58.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종59.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종60.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종61.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종62.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종63.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종64.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종65.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종66.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종67.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종68.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종69.jpg",

          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종70.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종71.jpg",
          "https://d2d7g45pzqvt7g.cloudfront.net/ANACHRONIA/1팀-Anachroina_최종72.jpg"
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
  