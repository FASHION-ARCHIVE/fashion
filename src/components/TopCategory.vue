<template>
    <header>
        <div class="menu">
            <div class="menu2">
                <div class = "top-menu1">
                <div class = "text-1">2024 KUAD GRADUATION FASHION SHOW</div>
                <div class = "icon-list">

                    <a href="https://www.instagram.com/"><img class = "icon" alt = "instagram" src = @/assets/images/icon/insta_icon_bw.png></a>
                    <a href="https://www.youtube.com/"><img class = "icon" alt = "youtube" src = @/assets/images/icon/youtube_icon_bw.png></a>
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
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        name: 'mainHeader'
    }
</script>

<style scoped>

.menu {
    position: fixed;
    display: flex;
    justify-content: center;
    height: 100px; 
    width: 100%;
    background-color: white;
    font-family: "Custom", Helvetica;
    z-index:100;

}

.menu2{
    display: flex;
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
    height: 50px;
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
}

.nav-links a {
    text-decoration: none; /* 밑줄 제거 */
    color: black; /* 글씨 색상 변경 */
}

.nav-links a:hover {
    color: gray; /* 호버 시 글씨 색상 변경 */
}

.top0 {
    margin-right: 20px;
}
.top1 {
    margin-right: 20px;
}
.top2 {
    margin-right: 20px; 
}
.top3 {
    margin-right: 20px; 
}


.logo-link {
    display: flex; /* Flexbox를 이용한 정렬을 위해 */
    padding: 0;
    height: auto; /* 로고 이미지의 높이를 자동으로 설정하여 비율을 유지 */
}


</style>