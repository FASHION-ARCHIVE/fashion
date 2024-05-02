<template>
  <mainHeader/>
  <div class="lookbook-background">
    
    <Flipbook class="flipbook" :pages="pages" ref="flipbook"></Flipbook>
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
        "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ]
    };
  }
};
</script>

<style>

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
  margin-top: 144px;
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
