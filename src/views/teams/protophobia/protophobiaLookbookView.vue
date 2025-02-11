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
        "https://kuad-archive.com/2024/protophobia/protophobia1.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia2.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia3.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia4.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia5.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia6.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia7.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia8.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia9.webp",

        "https://kuad-archive.com/2024/protophobia/protophobia10.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia11.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia12.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia13.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia14.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia15.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia16.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia17.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia18.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia19.webp",

        "https://kuad-archive.com/2024/protophobia/protophobia20.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia21.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia22.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia23.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia24.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia25.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia26.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia27.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia28.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia29.webp",

        "https://kuad-archive.com/2024/protophobia/protophobia30.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia31.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia32.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia33.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia34.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia35.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia36.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia37.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia38.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia39.webp",

        "https://kuad-archive.com/2024/protophobia/protophobia40.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia41.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia42.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia43.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia44.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia45.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia46.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia47.webp",
        "https://kuad-archive.com/2024/protophobia/protophobia48.webp",
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
