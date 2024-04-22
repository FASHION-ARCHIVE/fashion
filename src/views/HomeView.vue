<template>
  <div class="home-background">
    <img class="rectangle" alt="Rectangle" src="/images/home.png" />
    <div class="text-group">
      <router-link to = "/team-list"><div class="project">PROJECTS</div></router-link>
      <router-link to = "/team-brochuer"><div class="look-book">LOOKBOOK</div></router-link>
      <router-link to = "/coming-soon"><div class="runway">RUNWAY</div></router-link>
      <router-link to = "/coming-soon"><div class="show-info">SHOW INFO</div></router-link>
      <router-link to = "/coming-soon"><div class="behind">BEHIND</div></router-link>
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


.home-background {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.home-background .rectangle {
  height: 100%;
  right: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 70%;
  opacity: 0.8;
}

.home-background .text-group {
  left: 5%;
  position: relative;
  width: 100%;
  font-family: "Custom", Helvetica;
}

.home-background .project {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 250px;
}

.home-background .look-book {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 350px;
}

.home-background .show-info {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 450px;
}

.home-background .runway {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 550px;
}

.home-background .behind {
  color: #000000;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 650px;
}



.home-background .element-KUAD-GRADUATION {
  color: #000000;
  font-family: "Custom", Helvetica;
  font-size: 16px;
  font-weight: 300;
  height: 58px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 50px;
}

.home-background .project:hover{
  text-decoration: underline;
}
.home-background .show-info:hover{
  text-decoration: underline;
}
.home-background .runway:hover{
  text-decoration: underline;
}
.home-background .look-book:hover{
  text-decoration: underline;
}
.home-background .behind:hover{
  text-decoration: underline;
}
</style>