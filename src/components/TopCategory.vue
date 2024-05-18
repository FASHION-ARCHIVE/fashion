<template>
    <head>
        <meta name="viewport" content="width=device-width, init-scale=1" />
    </head>    
    <header>     
        <div class="header-background">
            <div class="menu2">
                <div class = "top-menu1">
                <router-link to = "/"><div class = "text-1">2024 KUAD GRADUATION FASHION SHOW</div></router-link>
                <div class = "icon-list">
                    <a href="https://www.instagram.com/kuad_archive/" target="_blank"><img class = "icon" alt = "instagram" src = @/assets/images/icon/insta_icon_bw.png></a>
                    <a href="https://www.youtube.com/" target="_blank"><img class = "icon" alt = "youtube" src = @/assets/images/icon/youtube_icon_bw.png></a>
                </div>
                </div>
                <div class = "top-menu2">
                    <router-link to="/" class="logo-link"><img class="logo" alt="logo" src="@/assets/images/KUAD-logo.png"/></router-link>
                    <div class="nav-links">
                        <router-link to="/team-list"><div class="top0">PROJECTS</div></router-link>
                        <router-link to="/team-brochuer"><div class="top1">LOOKBOOK</div></router-link>
                        <router-link to="/runway"><div class="top2">RUNWAY</div></router-link>
                        <router-link to="/showinfo"><div class="top3">SHOW INFO</div></router-link>
                        <router-link to="/behind"><div class="top4">BEHIND</div></router-link>
                    </div>   
                </div>
                <div id="hamburger-icon" :class="{open: isOpened}" @click="toggleMenu">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <ul class="mobile-menu">
                        <li><<router-link to="/team-list"><div class="top0">PROJECTS</div></router-link></li>
                        <li><router-link to="/team-brochuer"><div class="top1">LOOKBOOK</div></router-link></li>
                        <li><router-link to="/runway"><div class="top2">RUNWAY</div></router-link></li>
                        <li><router-link to="/showinfo"><div class="top3">SHOW INFO</div></router-link></li>
                        <li><router-link to="/behind"><div class="top4">BEHIND</div></router-link></li>
                    </ul>

                </div>
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
            }
        }
    }
    
</script>

<style scoped>

.header-background{
    position: fixed;
    display: flex;
    justify-content: center;
    height: 100px; 
    width: 100%;
    background-color: white;
    z-index:10; 
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

.nav-links a {
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
#hamburger-icon div {
  width: 35px;
  height: 3px;
  background-color: white;
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
.mobile-menu{
    display: none;
}
@media screen and (max-width: 768px) {
    .header-background{
        height: 100px;
        background-color: white;
    }
    .logo-link{
        display: none;
    }

    .top-menu2{
        display: none;
    }
    #hamburger-icon{
        display: block;
    }
}

@media screen and (max-width: 480px) {
    .nav-links a{
        padding: 5px;
    }

}

@media screen and (max-width: 360px) {
    .nav-links{
        font-size: 12px;
    }

}
</style>