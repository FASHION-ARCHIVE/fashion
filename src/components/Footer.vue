<template>
    <footer>
      <div class="footer-content">
        <div class = "footer-content-info1">
            <p>건국대학교 의상디자인학과</p>
            <p>2024졸업패션쇼</p>
            <p>: PROTOTYPE</p>
        </div>

        <div class = "footer-content-info2">
            <p>일시 : 2024.05.31 7PM</p>
            <p>장소 : 레이어 스튜디오 41</p>
            <p>인스타그램 : @Kuad unofficial</p>
            <p>문의전화 : 02-450-0589</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'mainFooter'
  }
  </script>
  
  <style scoped>
  footer {
    background-color: #ffffff;
    color: black;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  
  .footer-content {
    display: flex;
    width: 1130px;
    flex-direction: column;

  }

  .footer-content-info1{
    margin-top: 30px;
    line-height: 1%;
    font-size: 22px;
    font-weight: 600;
  }

  .footer-content-info2{
    line-height: 1%;
  }
  </style>