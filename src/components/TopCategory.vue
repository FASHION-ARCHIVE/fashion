<template>
    <header>
        <div class="menu">
            <div class="small-menu">
                <div class="text-1">2024 KUAD GRADUATION FASHION SHOW</div>
            </div>
            <div class="top-menu">
                <div class="title">TITLE</div>
                <div class="nav-links">
                    <router-link to="/coming-soon"><div class="top1">LOOK BOOK</div></router-link>
                    <router-link to="/coming-soon"><div class="top2">RUNWAY</div></router-link>
                    <router-link to="/coming-soon"><div class="top3">SHOW INFO</div></router-link>
                    <router-link to="/coming-soon"><div class="top4">BEHIND</div></router-link>
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

<style>
body{
    margin: 0;
}
.menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 144px;
    width: 100%;
    background-color: whitesmoke;
    font-family: "Custom", Helvetica;
}

.top-menu{
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1130px;
    align-items: center;

}

.menu .small-menu{
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    max-width: 1130px;
    background-color: rgb(180, 180, 180);
    margin-bottom: 18px; /* top-menu와의 간격 조정 */
    padding-left: 20px; /* 텍스트 왼쪽 패딩 */
}
.small-menu .text-1{
    font-size: 10px;
    color: black;
    margin-left: 20px;

}

.menu .title{
    font-size: 44px;
    margin-top: 6px;
    padding-left: 20px;
}



.nav-links {
    display: flex;
    font-size: 14px;
    justify-content: flex-end;
    margin-top: 5px;
    padding-right: 20px;
}

.nav-links a {
    text-decoration: none; /* 밑줄 제거 */
    color: black; /* 글씨 색상 변경 */
}

.nav-links a:hover {
    color: gold; /* 호버 시 글씨 색상 변경 */
}

.nav-links div, .nav-links router-link {
    margin-right: 20px; /* 원하는 간격으로 조정 */
}
</style>