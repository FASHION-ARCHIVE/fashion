<template>
  <mainHeader />
  <div class="team-brochure-background">
    <div class="team-brochure-container">
      <!-- <div class="team-brochure-text">TEAM BROCHURE</div> -->
      <div class="team-brochure-image-container">
        <div
          class="image-item"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="-1000"
        >
          <router-link to="/protophobia/lookbook"
            ><img
              src="https://kuad-archive.com/2024/protophobia/프로토포비아-책표지.jpg"
          /></router-link>
          <div class="caption">protophobia</div>
        </div>
        <div
          class="image-item"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="-1000"
        >
          <router-link to="/OAK/lookbook"
            ><img
              src="https://kuad-archive.com/2024/OAK/옥-책표지.jpg"
          /></router-link>
          <div class="caption">OAK</div>
        </div>
        <div
          class="image-item"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="-1000"
        >
          <router-link to="/ANACHRONIA/lookbook"
            ><img
              src="https://kuad-archive.com/2024/ANACHRONIA/아나크로니아-책표지.jpg"
          /></router-link>
          <div class="caption">ANACHRONIA</div>
        </div>
        <div
          class="image-item"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="-1000"
        >
          <router-link to="/bugreport/lookbook"
            ><img
              src="https://kuad-archive.com/2024/bugreport/버그리포트-책표지.jpg"
          /></router-link>
          <div class="caption">BUG REPORT</div>
        </div>
        <div
          class="image-item"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="-1000"
        >
          <router-link to="/Loft/lookbook"
            ><img
              src="https://kuad-archive.com/2024/Loft/로프트-책표지.jpg"
          /></router-link>
          <div class="caption">Loft 1.0</div>
        </div>
        <div
          class="image-item"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="-1000"
        >
          <router-link to="/Dejavu/lookbook"
            ><img
              src="https://kuad-archive.com/2024/dejavu/데자뷰-책-표지.jpg"
          /></router-link>
          <div class="caption">Deja vu</div>
        </div>
      </div>
    </div>
  </div>
  <mainFooter />
</template>

<script>
import mainHeader from "@/components/TopCategory.vue";
import mainFooter from "@/components/Footer.vue";
export default {
  name: "team-brochuer",
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>

<style scoped>
.image-item img {
  object-fit: contain;
}

.team-brochure-background {
  /* 배경 이미지 적용 */
  display: flex;
  height: auto;
  background-image: url("@/assets/images/background_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  margin-top: 100px; /* 헤더 높이 맞춰서 마진 */
  padding-bottom: 100px; /* 푸터 사이 간격 */
}

.team-brochure-container {
  width: 1130px;
  display: flex;
  flex-direction: column;
}
.team-brochure-text {
  display: flex;
  font-size: 28px;
  font-family: "Custom"; /* 필요한 경우 폰트 스타일 지정 */
  margin-top: 30px;
}

.team-brochure-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-item img {
  margin-top: 30px;
  display: block;
  width: 300px; /* 이미지의 너비 */
  height: 400px; /* 이미지의 높이 */
  object-fit: cover;
}

.caption {
  color: black;
  margin-top: 0px;
  font-weight: bold;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .team-brochure-image-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
