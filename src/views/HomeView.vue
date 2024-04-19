<template>
  <div class="background">
    <img class="rectangle" alt="Rectangle" src="/images/home.png" />
    <div class="text-group">
      <router-link to = "/coming-soon"><div class="team-list">TEAM LIST</div></router-link>
      <router-link to = "/coming-soon"><div class="show-info">SHOW INFO</div></router-link>
      <router-link to = "/coming-soon"><div class="look-book">LOOK BOOK</div></router-link>
      <router-link to = "/coming-soon"><div class="runway">RUNWAY</div></router-link>
      <router-link to = "/coming-soon"><div class="behind-story">BEHIND STORY</div></router-link>
      <div class="element-KUAD-GRADUATION">
        2024 KUAD
        <br />
        GRADUATION FASHION SHOW
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
};
</script>

<style>
@font-face {
  font-family:'Custom';
  src: url('../assets/fonts/Orbitron-VariableFont_wght.ttf') format('truetype');
  font-weight: 400;
}


.background {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.background .rectangle {
  height: 100%;
  right: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 70%;
  opacity: 0.8;
}

.background .text-group {
  left: 5%;
  position: relative;
  width: 100%;
  font-family: "Custom", Helvetica;
}

.background .team-list {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 250px;
}

.background .show-info {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 350px;
}

.background .runway {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 450px;
}

.background .look-book {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 550px;
}

.background .behind-story {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 650px;
}



.background .element-KUAD-GRADUATION {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 24px;
  font-weight: 300;
  height: 58px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
}

.background .team-list:hover{
  text-decoration: underline;
}
.background .show-info:hover{
  text-decoration: underline;
}
.background .runway:hover{
  text-decoration: underline;
}
.background .look-book:hover{
  text-decoration: underline;
}
.background .behind-story:hover{
  text-decoration: underline;
}
</style>