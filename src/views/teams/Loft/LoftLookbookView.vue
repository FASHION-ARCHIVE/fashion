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
        "https://kuad-archive.com/2024/Loft/LOFT1.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT2.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT3.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT4.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT5.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT6.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT7.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT8.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT9.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT10.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT11.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT12.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT13.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT14.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT15.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT16.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT17.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT18.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT19.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT20.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT21.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT22.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT23.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT24.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT25.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT26.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT27.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT28.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT29.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT30.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT31.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT32.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT33.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT34.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT35.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT36.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT37.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT38.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT39.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT40.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT41.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT42.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT43.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT44.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT45.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT46.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT47.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT48.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT49.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT50.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT51.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT52.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT53.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT54.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT55.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT56.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT57.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT58.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT59.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT60.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT61.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT62.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT63.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT64.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT65.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT66.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT67.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT68.jpg",
        "https://kuad-archive.com/2024/Loft/LOFT69.jpg",

        "https://kuad-archive.com/2024/Loft/LOFT70.jpg",
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
