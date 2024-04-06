import './assets/css/main.css'

<template>
  <div class="macbook-air">
    <div class="overlap-wrapper">
      <div class="overlap">
        <div class="overlap-group">
          <img class="rectangle" alt="Rectangle" src="/images/home.png" />
        </div>
        <div class="team-list">TEAM LIST</div>
        <div class="show-info">SHOW INFO</div>
        <div class="look-book">LOOK BOOK</div>
        <div class="runway">RUNWAY</div>
        <div class="behind-story">BEHIND STORY</div>
        <div class="element-KUAD-GRADUATION">
          2024 KUAD
          <br />
          GRADUATION FASHION SHOW
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MacbookAir",
};
</script>

<style>
@font-face {
  font-family:'Custom';
  src: url('assets/fonts/Orbitron-VariableFont_wght.ttf') format('truetype');
  font-weight: 400;
}


.macbook-air {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.macbook-air .overlap-wrapper {
  background-color: #ffffff;
  height: 832px;
  width: 1280px;
}

.macbook-air .overlap {
  height: 832px;
  left: 23px;
  position: relative;
  width: 1257px;
}

.macbook-air .overlap-group {
  height: 832px;
  left: 26px;
  position: absolute;
  top: 0;
  width: 1231px;
}

.macbook-air .rectangle {
  height: 832px;
  left: 330px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 80%;
  opacity: 0.8;
}

.macbook-air .behind-story {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  height: 61px;
  left: 0.5%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 566px;
}

.macbook-air .team-list {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  height: 61px;
  left: 0.5%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 202px;
}

.macbook-air .show-info {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  height: 61px;
  left: 0.5%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 293px;
}

.macbook-air .runway {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  height: 61px;
  left: 0.5%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 384px;
}

.macbook-air .look-book {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  height: 61px;
  left: 0.5%;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 475px;
}

.macbook-air .element-KUAD-GRADUATION {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 40px;
}
</style>
