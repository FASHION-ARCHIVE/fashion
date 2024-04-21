

<template>
    <mainHeader/>
  </template>
  
  <script>
      import mainHeader from '@/components/TopCategory.vue';
      export default {
         name: 'TeamBrochure',
         components: {
           mainHeader
         }
       }
  </script>
  
  <style>
  @font-face {
    font-family:'Custom';
    src: url('../assets/fonts/TitilliumWeb-Regular.ttf') format('truetype');
    font-weight: 400;
  }
  .team-background{
    /* 배경 이미지 적용 */
    display: flex;
    height: auto;
    background-image: url('@/assets/images/01_KUAD_background.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    margin-top: 144px;
  }
  
  .team-list-container{
    width: 1130px;
    display: flex;
    flex-direction: column;
  }
  .team-list-text {
    display: flex;
    font-size: 28px;
    font-family: 'Custom'; /* 필요한 경우 폰트 스타일 지정 */
    margin-top: 30px;
  }
  
  .image-grid {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .image-item img {
    margin-top: 30px;
    display: block;
    width: 300px; /* 이미지의 너비 */
    height: 400px; /* 이미지의 높이 */
    object-fit: cover;
    border: 4px solid whitesmoke;
  }
  
  
  .caption{
    color: black;
    margin-top: 10px;
    text-align: center;
  }
  </style>