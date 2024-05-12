<template>
    <footer>
      <div class="footer-content">
        <div class = "footer-content-info1">
            <!-- <p>건국대학교 의상디자인학과</p>
            <p>2024졸업패션쇼</p>
            <p>: PROTOTYPE</p> -->
            <p>2024 Graduation Fashion Show : PROTOTYPE</p>
        </div>

        <!-- <div class = "footer-content-info2">
            <p>일시 : 2024.05.31 7PM</p>
            <p>장소 : 레이어 스튜디오 41</p>
            <p>인스타그램 : @Kuad unofficial</p>
            <p>문의전화 : 02-450-0589</p>
        </div> -->
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
    background-color: rgba(0,0,0,0.1); 
    border-style: solid;
    border-width: 0.5px 0px 0px 0px;
    border-color: black;
    color: black;
    padding: 10px;
    display: flex; 
    justify-content: center; 
  }
  
  .footer-content {
    display: flex;
    width: 1130px;
    flex-direction: column;

  }

  .footer-content-info1{
    line-height: 1%;
    font-size: 14px;
    font-weight: 600;
  }

  .footer-content-info2{
    line-height: 1%;
  }
  </style>