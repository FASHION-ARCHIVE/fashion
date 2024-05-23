<template>
    <head>
        <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>    
    <header>
        <div class="header-container">   
            <div class="header-background">
                <div class="menu2">
                    <div class = "top-menu1">
                    <router-link to = "/"><div class = "text-1">2024 KUAD GRADUATION FASHION SHOW</div></router-link>
                    <div class = "icon-list">
                        <a href="https://www.instagram.com/kuad_archive/" target="_blank"><img class = "icon" alt = "instagram" src = @/assets/images/icon/insta_icon_bw.png></a>
                        <a href="https://www.youtube.com/@user-iw8ub2uo2x" target="_blank"><img class = "icon" alt = "youtube" src = @/assets/images/icon/youtube_icon_bw.png></a>
                    </div>
                    </div>
                    <div class = "top-menu2">
                        <router-link to="/" class="logo-link"><img class="logo" alt="logo" src="@/assets/images/KUAD-logo.png"/></router-link>
                        <div class="nav-links">
                            <router-link to="/team-list"><div class="category" >PROJECTS</div></router-link>
                            <router-link to="/team-brochuer"><div class="category">LOOKBOOK</div></router-link>
                            <router-link to=""><div class="category" @click = "coming_soon">RUNWAY</div></router-link>
                            <router-link to="/showinfo"><div class="category">SHOW INFO</div></router-link>
                            <router-link to=""><div class="category" @click = "coming_soon">BEHIND</div></router-link>
                        </div>
                        <div id="hamburger-icon" :class="{open: isOpened}" @click="toggleMenu">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                            
                        </div> 
                    </div>
                    
                </div>
            </div>
            <div class="mobile-menu-container" :class="{ 'show': isOpened }">
                <ul class="mobile-menu">
                    <li><router-link to="/team-list">PROJECTS</router-link></li>
                    <li><router-link to="/team-brochuer">LOOKBOOK</router-link></li>
                    <li @click = "coming_soon"><router-link to="">RUNWAY</router-link></li>
                    <li><router-link to="/showinfo">SHOW INFO</router-link></li>
                    <li @click = "coming_soon"><router-link to="">BEHIND</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        name: 'mainHeader',
        data() {
            return {
                isOpened : false
            }
        },
        methods: {
            toggleMenu() {
                this.isOpened = !this.isOpened
            },
            coming_soon(){
                alert("6월 초 오픈 예정")
            }
        },
    }
    
</script>

<style scoped>

.header-container{
    display: flex;
    height: 0;
    flex-direction: column;
}

.header-background{
    position: fixed;
    display: flex;
    justify-content: center;
    height: 100px; 
    width: 100%;
    background-color: white;
    z-index:21; 
}


.menu2{
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    width: 1130px;
    flex-direction: column;
}

.top-menu1{
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
    justify-content: space-between;
}

.text-1{
    display: flex;
    align-items: center;
    height:40px;
    font-size: 10px;
    color: #000;
}

.icon-list{
    display: flex;
}

.icon-list a{
    padding: 10px 10px;
}
.icon{
    width: 20px;
    /* padding: 10px 10px; */
}

.top-menu2{
    display: flex;
    flex-direction: row;
    height: 44px;
    align-items: center;
    justify-content: space-between;
}

.logo{
    width: 180px;
}
.title{
    display: flex;
    font-size: 44px;
}

.nav-links {
    display: flex;
    font-size: 14px;
    white-space: nowrap;
}

.category{
    text-decoration: none; /* 밑줄 제거 */
    color: black; /* 글씨 색상 변경 */
    padding: 15px 25px;
}

.nav-links a:hover {
    color: gray; /* 호버 시 글씨 색상 변경 */
}

.logo-link {

    display: flex; /* Flexbox를 이용한 정렬을 위해 */
    padding: 0;
    height: auto; /* 로고 이미지의 높이를 자동으로 설정하여 비율을 유지 */
}

#hamburger-icon{
    display: none;
    cursor: pointer;
    
}
.bar1 {
    width: 35px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
   
}
.bar2 {
    width: 35px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
    
}
.bar3 {
    width: 35px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
}

.open .bar1 {
  transform: rotate(-45deg) translate(-6px, 7px);

}
.open .bar2 {
  opacity: 0;
}
.open .bar3 {
  transform: rotate(45deg) translate(-6px, -7px);
}

.mobile-menu-container{
    display: flex;
    position: fixed;
    top:0;
    left:0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(10px);
    z-index: 19;
    transform: translateY(-100%);
    transition: transform 0.5s ease;
}

.mobile-menu-container.show{
    display: flex;
    position: fixed;
    top:0;
    left:0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(10px);
    z-index: 19;
    transform: translateY(0);
}

/* isOpened가 true일 때 mobile-menu를 보여주는 스타일 */
.mobile-menu{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    margin: 0;
    padding: 0;
    gap:30px;
    width: 100%; 
    left: 0; 
    list-style: none;
}

.mobile-menu li{
    font-size: 30px;
    padding:0;
    text-align: center;
    white-space: nowrap;
}
    
.mobile-menu li a{
    color: black;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    .header-background{
        height: 100px;
        background-color: white;
    }


    .nav-links{
        display: none;
    }
    #hamburger-icon{
        display: block;
        z-index: 22;
    }
    
}
</style>