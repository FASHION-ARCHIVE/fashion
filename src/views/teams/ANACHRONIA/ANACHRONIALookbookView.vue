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
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA2.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA3.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA4.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA5.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA6.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA7.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA8.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA9.jpg",

        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA10.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA11.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA12.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA13.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA14.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA15.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA16.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA17.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA18.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA19.jpg",

        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA20.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA21.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA22.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA23.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA24.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA25.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA26.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA27.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA28.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA29.jpg",

        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA30.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA31.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA32.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA33.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA34.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA35.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA36.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA37.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA38.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA39.jpg",

        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA40.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA41.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA42.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA43.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA44.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA45.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA46.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA47.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA48.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA49.jpg",

        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA50.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA51.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA52.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA53.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA54.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA55.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA56.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA57.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA58.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA59.jpg",

        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA60.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA61.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA62.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA63.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA64.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA65.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA66.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA67.jpg",
        "https://d1s42bqib275dv.cloudfront.net/ANACHRONIA/ANACHRONIA68.jpg",
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
