<template>
  <mainHeader />
  <div class="lookbook-background">
    <div class="lookbook-container">
      <img
        class="left-icon"
        @click="flipLeft"
        src="@/assets/images/icon/left-swipe.png"
      />
      <Flipbook class="flipbook" :pages="pages" :zooms="[1]" ref="flipbook">
      </Flipbook>
      <img
        class="right-icon"
        @click="flipRight"
        src="@/assets/images/icon/right-swipe.png"
      />
    </div>
  </div>
</template>

<script>
import Flipbook from "flipbook-vue";
import mainHeader from "@/components/TopCategory.vue";
export default {
  components: {
    Flipbook,
    mainHeader,
  },
  data: () => {
    return {
      singlePage: false,
      pages: [
        null,
        "https://kuad-archive.com/2024/dejavu/dejavu1.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu2.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu3.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu4.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu5.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu6.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu7.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu8.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu9.jpg",

        "https://kuad-archive.com/2024/dejavu/dejavu10.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu11.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu12.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu13.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu14.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu15.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu16.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu17.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu18.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu19.jpg",

        "https://kuad-archive.com/2024/dejavu/dejavu20.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu21.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu22.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu23.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu24.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu25.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu26.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu27.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu28.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu29.jpg",

        "https://kuad-archive.com/2024/dejavu/dejavu30.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu31.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu32.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu33.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu34.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu35.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu36.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu37.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu38.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu39.jpg",

        "https://kuad-archive.com/2024/dejavu/dejavu40.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu41.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu42.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu43.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu44.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu45.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu46.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu47.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu48.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu49.jpg",

        "https://kuad-archive.com/2024/dejavu/dejavu50.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu51.jpg",
        "https://kuad-archive.com/2024/dejavu/dejavu52.jpg",
      ],
    };
  },
  methods: {
    flipRight() {
      this.$refs.flipbook.flipRight();
    },
    flipLeft() {
      this.$refs.flipbook.flipLeft();
    },
  },
};
</script>

<style scoped>
.lookbook-background {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/background_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin-top: 100px;
  overflow: hidden;
}
.lookbook-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.left-icon {
  cursor: pointer;
  margin-left: 50px;
  width: 30px;
}
.right-icon {
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
  .left-icon {
    display: none;
  }

  .right-icon {
    display: none;
  }
  .flipbook {
    width: 100vw;
    height: 80vh;
  }
}
</style>
