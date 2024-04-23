<template>
      <div class="back color-3">
    <div class="row columns">
      <h3>Effect 3</h3>
      <ul class="menu align-center expanded text-center SMN_effect-3">
        <li><div class="test">Home</div></li>
        <li><a href="">About</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">Notes</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </div> 
  <vue-scroll-snap>
        <div class="item" id="one"></div>
        <div class="item" id="two"></div>
        <div class="item" id="three"></div>
        <div class="item" id="four"></div>
  </vue-scroll-snap>
</template>

<script>
  // import { defineComponent } from 'vue';
  import VueScrollSnap from "vue-scroll-snap";

export default {
  components: {VueScrollSnap},
}; 
</script>
<style>


  #one {
    background: #1e91d6;
  }

  #two {
    background: #db5461;
  }

  #three {
    background: #fc7753;
  }

  #four {
    background: #ffffff;
  }
.menu a {
  color: 000;
 

  padding: 15px 25px;
  /**/
  position: relative;
  display: block;
  text-decoration: none;
}

.test{
    color: 000;
 padding: 15px 25px;
 /**/
 position: relative;
 display: block;
 text-decoration: none;
}

.test:after{
    position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000;
  content: '';
  opacity: 0;
  -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
  -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
  transition: height 0.3s, opacity 0.3s, transform 0.3s;
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  transform: translateY(-10px);
}

.test:hover:after, .test:focus:after {
  height: 5px;
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}

.SMN_effect-3 a:after {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000;
  content: '';
  opacity: 0;
  -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
  -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
  transition: height 0.3s, opacity 0.3s, transform 0.3s;
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  transform: translateY(-10px);
}

.SMN_effect-3 a:hover:after, .SMN_effect-3 a:focus:after {
  height: 5px;
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}
</style>