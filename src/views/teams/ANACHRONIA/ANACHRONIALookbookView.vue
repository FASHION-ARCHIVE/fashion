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
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA2.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA3.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA4.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA5.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA6.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA7.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA8.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA9.jpg",

        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA10.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA11.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA12.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA13.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA14.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA15.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA16.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA17.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA18.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA19.jpg",

        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA20.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA21.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA22.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA23.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA24.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA25.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA26.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA27.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA28.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA29.jpg",

        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA30.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA31.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA32.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA33.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA34.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA35.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA36.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA37.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA38.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA39.jpg",

        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA40.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA41.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA42.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA43.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA44.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA45.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA46.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA47.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA48.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA49.jpg",

        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA50.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA51.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA52.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA53.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA54.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA55.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA56.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA57.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA58.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA59.jpg",

        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA60.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA61.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA62.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA63.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA64.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA65.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA66.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA67.jpg",
        "https://kuad-archive.com/2024/ANACHRONIA/ANACHRONIA68.jpg",
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
