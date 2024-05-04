<template>
  <div id="app">
    <router-view/>
  </div>
  
</template>

<script>

</script>

<style>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

@font-face {
     font-family:'TitilliumWeb';
     src: 
          url('@/assets/fonts/TitilliumWeb-Regular.woff') format('woff'),
          url('@/assets/fonts/TitilliumWeb-Regular.woff2') format('woff2'),
          url('@/assets/fonts/TitilliumWeb-Regular.ttf') format('truetype'); 
          unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
     }

@font-face {
  font-family: 'Nanum';
  src: url('@/assets/fonts/NanumBarunGothic.ttf') format('truetype');
  /* unicode-range: U+1100-11FF,U+3130-318F,U+A960-A97F,U+AC00-D7A3,U+D7B0-D7FF; */
}

@font-face {
  font-family: 'NotoSansKR' ;
  src: url('@/assets/fonts/NotoSansKR-Regular.ttf') format ('truetype');
  unicode-range: U+1100-11FF,U+3130-318F,U+A960-A97F,U+AC00-D7A3,U+D7B0-D7FF;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    /* unicode-range: U+1100-11FF,U+3130-318F,U+A960-A97F,U+AC00-D7A3,U+D7B0-D7FF; */
}

@font-face {
	font-family: 'Pretendard Variable';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: url('@/assets/fonts/PretendardVariable.woff2') format('woff2-variations');
  /* unicode-range: U+1100-11FF,U+3130-318F,U+A960-A97F,U+AC00-D7A3,U+D7B0-D7FF; */
}

*{font-family: "TitilliumWeb", "Pretendard-Regular" !important} /* 강제적으로 폰트 일괄 적용 */

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

html,
body {
  /* -webkit-font-smoothing: antialiased; */
  height: 100%;
  margin: 0;
}

:root{
  --swiper-theme-color: #282828 !important;
}

a {
  text-decoration: none;

}
</style>
