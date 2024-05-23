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
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/000%E1%84%87%E1%85%A5%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3-%E1%84%91%E1%85%AD%E1%84%8C%E1%85%B5000.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_1.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/KakaoTalk_Photo_2024-05-17-23-07-24.jpeg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_2.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_3.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_4.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_5.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_6.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_7.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_8.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_9.jpg",

        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_10.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_11.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_12.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_13.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_14.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_15.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_16.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_17.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_18.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_19.jpg",

        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_20.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_21.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_22.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_23.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_24.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_25.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_26.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_27.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_28.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_29.jpg",

        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_30.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_31.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_32.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_33.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_34.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_35.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_36.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_37.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_38.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_39.jpg",

        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_40.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_41.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_42.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_43.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_44.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_45.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_46.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_47.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_48.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_49.jpg",

        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_50.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/1715948100326-a5024fd4-577c-4220-a02c-851a7e4bf603_1.jpg",
        "https://d2d7g45pzqvt7g.cloudfront.net/bugreport/zzzzzzzzzzz뒷표지zzzzz-51.jpg"
        
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
@keyframes blink-effect {
  50% {
    opacity: 0;
  }
}


.lookbook-background{
  display: flex;
  flex-direction: row;
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
  justify-content: center;
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
  .flipbook {
    width: 100vw;
    height: 80vh;
  }
}
</style>
