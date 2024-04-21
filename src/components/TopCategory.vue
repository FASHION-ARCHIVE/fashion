<template>
    <header>
        <div class="menu">
            <div class="menu2">
                <div class="text-1">2024 KUAD GRADUATION FASHION SHOW</div>
                <div class="top-menu">
                    <router-link to="/"><div class="title">TITLE</div></router-link>
                    <div class="nav-links">
                        <router-link to="/coming-soon"><div class="top0">PROJECT</div></router-link>
                        <router-link to="/coming-soon"><div class="top1">LOOK BOOK</div></router-link>
                        <router-link to="/coming-soon"><div class="top2">RUNWAY</div></router-link>
                        <router-link to="/coming-soon"><div class="top3">SHOW INFO</div></router-link>
                        <router-link to="/coming-soon"><div class="top4">BEHIND</div></router-link>
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

<style>
.menu {
    position: fixed;
    display: flex;
    justify-content: center;
    height: 100px;
    /* height: 144px;  */
    width: 100%;
    background-color: whitesmoke;
    font-family: "Custom", Helvetica;
}

.menu2{
    display: flex;
    width: 1130px;
    flex-direction: column;

}

.top-menu{
    display: flex;
    flex-direction: row;
    height: 104px;
    align-items: center;
    justify-content: space-between;

}

.text-1{
    position: relative;
    display: flex;
    align-items: center;
    height:40px;
    font-size: 10px;
}



.title{
    display: flex;
    font-size: 44px;
    text-decoration: none;
    color: black; 
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
    color: gold; /* 호버 시 글씨 색상 변경 */
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
</style>