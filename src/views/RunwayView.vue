<template>
    <mainHeader/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />


    <div class = "black-bg" v-if = "modalOpened4 == true">
        <div v-click-outside = "onClickOutside4" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0004.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened5 == true">
        <div v-click-outside = "onClickOutside5" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0005.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened6 == true">
        <div v-click-outside = "onClickOutside6" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0006.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened7 == true">
        <div v-click-outside = "onClickOutside7" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0007.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened8 == true">
        <div v-click-outside = "onClickOutside8" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0008.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened9 == true">
        <div v-click-outside = "onClickOutside9" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0009.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened10 == true">
        <div v-click-outside = "onClickOutside10" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0010.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened11 == true">
        <div v-click-outside = "onClickOutside11" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0011.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened12 == true">
        <div v-click-outside = "onClickOutside12" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0012.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened13 == true">
        <div v-click-outside = "onClickOutside13" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0013.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened14 == true">
        <div v-click-outside = "onClickOutside14" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0014.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened15 == true">
        <div v-click-outside = "onClickOutside15" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0015.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened16 == true">
        <div v-click-outside = "onClickOutside16" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0016.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened17 == true">
        <div v-click-outside = "onClickOutside17" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0017.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened18 == true">
        <div v-click-outside = "onClickOutside18" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0018.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened19 == true">
        <div v-click-outside = "onClickOutside19" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0019.webp"/>
        </div>
    </div>
    <div class = "black-bg" v-if = "modalOpened20 == true">
        <div v-click-outside = "onClickOutside20" class = "white-bg">
            <img size = 100vw alt = "behind-img" src="@/assets/images/protophobia/runway/fa_0020.webp"/>
        </div>
    </div>

    <div class = "runway-background">


    

        <div class = "remote">
             <ui style="display: block;">
                 <li style="display: block;"><div data-title = "전체 영상" class = "remote-info"><button class = "show-button" @click="click1()"></button></div></li>
                 <li style="display: block;"><div data-title = "protophobia" class = "remote-info"><button class = "show-button" @click="click2()"></button></div></li>
                 <li style="display: block;"><div data-title = "OAK" class = "remote-info"><button class = "show-button" @click="click3()"></button></div></li>
                 <li style="display: block;"><div data-title = "ANACHRONIA" class = "remote-info"><button class = "show-button" @click="click4()"></button></div></li>
                 <li style="display: block;"><div data-title = "BUG REPORT" class = "remote-info"><button class = "show-button" @click="click5()"></button></div></li>
                 <li style="display: block;"><div data-title = "Loft 1.0" class = "remote-info"><button class = "show-button" @click="click6()"></button></div></li>
                 <li style="display: block;"><div data-title = "Deja vu" class = "remote-info"><button class = "show-button" @click="click7()"></button></div></li>
             </ui>
        </div>


    <div class = "runway-container">


        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage1">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/2-C7b48l3TI`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>
            <!-- <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">전체 영상</div>
            </div> -->
        </div>

 
        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage2">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">protophobia</div>
            </div>
        </div>
            <div class = "image-slide-container">
                <swiper
                    :slidesPerView = "4"
                    :grid="{
                        rows: 2, 
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >

                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0004.webp" @click = "modalOpening4"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0005.webp" @click = "modalOpening5"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0006.webp" @click = "modalOpening6"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0007.webp" @click = "modalOpening7"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0008.webp" @click = "modalOpening8"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0009.webp" @click = "modalOpening9"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0010.webp" @click = "modalOpening10"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0011.webp" @click = "modalOpening11"/></swiper-slide>
                
                <swiper-slide><img alt = "runway-img" src="@/assets/images/runway_replace.png"/></swiper-slide>

                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0012.webp" @click = "modalOpening12"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0013.webp" @click = "modalOpening13"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0014.webp" @click = "modalOpening14"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0015.webp" @click = "modalOpening15"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0016.webp" @click = "modalOpening16"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0017.webp" @click = "modalOpening17"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0018.webp" @click = "modalOpening18"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0019.webp" @click = "modalOpening19"/></swiper-slide>
                <swiper-slide><img alt = "runway-img" src="@/assets/images/protophobia/runway/fa_0020.webp" @click = "modalOpening20"/></swiper-slide>
                </swiper>
            </div>

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage3">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">OAK</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0021.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0022.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0023.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0024.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0025.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0026.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0027.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0028.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0029.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0030.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0031.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0032.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0033.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0034.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0035.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0036.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0037.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0038.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0039.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0040.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0041.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/OAK/runway/fa_0042.webp"/></swiper-slide>
            </swiper>
        </div>

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage4">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">ANACHRONIA</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0043.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0044.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0045.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0046.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0047.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0048.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0049.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0050.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0051.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0052.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0053.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0054.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0055.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0056.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0057.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0058.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0059.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/anachronia/runway/fa_0060.webp"/></swiper-slide>


            </swiper>
        </div>

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage5">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">BUG REPORT</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0061.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0062.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0063.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0064.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0065.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0066.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0067.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0068.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0069.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0070.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0071.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0072.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0073.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0074.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0075.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0076.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0077.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/bugreport/runway/fa_0078.webp"/></swiper-slide>
            

            </swiper>
        </div>

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage6">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">Loft 1.0</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >

            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0079.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0080.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0081.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0082.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0083.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0084.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0085.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0086.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0087.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0088.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0089.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0090.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0091.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0092.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0093.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0094.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0095.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0096.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0097.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/loft10/runway/fa_0098.webp"/></swiper-slide> 
            </swiper>
        </div>

        <div class="runway-youtube-container">
            <div class="runway-youtube" ref = "stage7">
                <iframe
                :style="{ width: state.width, height: state.height }"
                :src ="`https://www.youtube.com/embed/xQht_yN7yPE`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
            </div>

            <div class="runway-youtube-info-container">
                <div class="runway-yt-info1">Deja vu</div>
            </div>
        </div>

        <div class = "image-slide-container">
            <swiper
                :slidesPerView = "4"
                :grid="{
                    rows: 2, 
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0099.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0100.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0101.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0102.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0103.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0104.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0105.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0106.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0107.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0108.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0109.webp"/></swiper-slide>
            <swiper-slide><img alt = "runway-img" src="@/assets/images/dejavu/runway/fa_0110.webp"/></swiper-slide>
            </swiper>
        </div>
    </div>
 </div>
 
 <mainFooter/>
 </template>
 
 <script>
    import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
    import mainHeader from '@/components/TopCategory.vue';
    import mainFooter from '@/components/Footer.vue';
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import vClickOutside from 'click-outside-vue3';

    import 'swiper/css';

    import 'swiper/css/grid';
    // import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    import { Grid, Navigation, History } from 'swiper/modules';

    export default defineComponent({
    directives: {
        clickOutside: vClickOutside.directive
    },
    components: {
        mainHeader, 
        Swiper, SwiperSlide, 
        mainFooter,
    },
    data() {
        return {
            modalOpened4: false,
            modalOpened5: false,
            modalOpened6: false,
            modalOpened7: false,
            modalOpened8: false,
            modalOpened9: false,
            modalOpened10: false,
            modalOpened11: false,
            modalOpened12: false,
            modalOpened13: false,
            modalOpened14: false,
            modalOpened15: false,
            modalOpened16: false,
            modalOpened17: false,
            modalOpened18: false,
            modalOpened19: false,
            modalOpened20: false,
        };
    },
    methods:{
    click1(){
    this.$refs.stage1.scrollIntoView({ behavior:"smooth", block: "end"});
    },
    click2(){
    this.$refs.stage2.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click3(){
    this.$refs.stage3.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click4(){
    this.$refs.stage4.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click5(){
    this.$refs.stage5.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click6(){
    this.$refs.stage6.scrollIntoView({ behavior:"smooth", block: "center"});
    },
    click7(){
    this.$refs.stage7.scrollIntoView({ behavior:"smooth", block: "center"});
    },

    modalOpening4(){
        this.modalOpened4 = true;
    },
    modalOpening5(){
        this.modalOpened5 = true;
    },
    modalOpening6(){
        this.modalOpened6 = true;
    },
    modalOpening7(){
        this.modalOpened7 = true;
    },
    modalOpening8(){
        this.modalOpened8 = true;
    },
    modalOpening9(){
        this.modalOpened9 = true;
    },
    modalOpening10(){
        this.modalOpened10 = true;
    },
    modalOpening11(){
        this.modalOpened11 = true;
    },
    modalOpening12(){
        this.modalOpened12 = true;
    },
    modalOpening13(){
        this.modalOpened13 = true;
    },
    modalOpening14(){
        this.modalOpened14 = true;
    },
    modalOpening15(){
        this.modalOpened15 = true;
    },
    modalOpening16(){
        this.modalOpened16 = true;
    },
    modalOpening17(){
        this.modalOpened17 = true;
    },
    modalOpening18(){
        this.modalOpened18 = true;
    },
    modalOpening19(){
        this.modalOpened19 = true;
    },
    modalOpening20(){
        this.modalOpened20 = true;
    },


    onClickOutside4(){
        this.modalOpened4 = false;
    },
    onClickOutside5(){
        this.modalOpened5 = false;
    },
    onClickOutside6(){
        this.modalOpened6 = false;
    },
    onClickOutside7(){
        this.modalOpened7 = false;
    },
    onClickOutside8(){
        this.modalOpened8 = false;
    },
    onClickOutside9(){
        this.modalOpened9 = false;
    },
    onClickOutside10(){
        this.modalOpened10 = false;
    },
    onClickOutside11(){
        this.modalOpened11 = false;
    },
    onClickOutside12(){
        this.modalOpened12 = false;
    },
    onClickOutside13(){
        this.modalOpened13 = false;
    },
    onClickOutside14(){
        this.modalOpened14 = false;
    },
    onClickOutside15(){
        this.modalOpened15 = false;
    },
    onClickOutside16(){
        this.modalOpened16 = false;
    },
    onClickOutside17(){
        this.modalOpened17 = false;
    },
    onClickOutside18(){
        this.modalOpened18 = false;
    },
    onClickOutside19(){
        this.modalOpened19 = false;
    },
    onClickOutside20(){
        this.modalOpened20 = false;
    },

},    
    setup() {

         const state = reactive({
             videoId: 'UTH1VNHLjng',
             width: '960',
             height: '540',
         });
 
         function resizeVideo() {
             const maxWidth = 960; // 최대 너비
             const aspectRatio = 540 / 960; // 비디오의 가로세로 비율 1130, 662
 
             const windowWidth = window.innerWidth; // 현재 창의 너비
             if (windowWidth < maxWidth) {
                 state.width = `${windowWidth - 30}px`; // 여백 고려
                 state.height = `${(windowWidth - 30) * aspectRatio}px`;
             } else {
                 state.width = `${maxWidth}px`;
                 state.height = `${maxWidth * aspectRatio}px`;
             }
         }
 
         onMounted(() => {
             resizeVideo(); // 컴포넌트 마운트 시 비디오 크기 조정
             window.addEventListener('resize', resizeVideo); // 창 크기가 변경될 때마다 호출
         });
 
         onUnmounted(() => {
             window.removeEventListener('resize', resizeVideo); // 컴포넌트 언마운트 시 이벤트 리스너 제거
         });
 
         return {
            state, modules: [Grid, Navigation, History],
         };
 
     },
     })
 </script>
 
 <style scoped>

    .remote-info{
        position: relative;
    }

    .remote-info:hover:before {
    opacity: 1;
    }

    .remote-info::before {
        content: attr(data-title);
        display: block;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        transition: all 0.15s ease-in-out;
        background: rgb(90, 90, 90);
        color: #fff;
        font-size: 15px;
        padding: 5px 10px;
        top: -5px;
        right: 0;
        white-space: nowrap;

        z-index: 500;
    }

    /* .button-info::after{
        position: relative;
        display: block;
    }

    .show-button:hover .button-info{
        display: block; 
    } */

    .material-symbols-outlined{
        cursor: pointer;
        border: none;
        margin-left: auto;
        margin-top: 10px;
    }

    .designer-info{
        display: flex;
        flex-direction: column;
    }

    .designer-name{
        margin-left: auto;
        padding-right: 30px;
    }

    .designer-name a{
        color: black;
    }

     .modal-swiper{
        height: 85%;
        margin-bottom: 10px;
    }


    .black-bg{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        padding: 20px;
        z-index: 100;
    }

    .white-bg{
        width: 30%;
        height: 50vh;
        /* background: white; */
        /* border-radius: 4px; */
        padding: 0px 10px 0px 10px;

        margin: auto;
        margin-top: 3%;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;

        display: flex;
        flex-direction: column;
    }

    .close-button{
        cursor: pointer;
        border: none;
        width: 24px;
        height: 24px;

        background: url(@/assets/images/icon/bt_black.png) 0% 0% / 100% 100% no-repeat;
    }

    .show-button{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
        background: url(@/assets/images/icon/bt_gray.png) 0% 0% / 100% 100% no-repeat;

        will-change: transform;
    }

    .show-button:hover{
        cursor: pointer;
        border: none;
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
        background: url(@/assets/images/icon/bt_white.png) 0% 0% / 100% 100% no-repeat;
    }    

    .remote{
        position: fixed;
        margin-left: 1200px;
        margin-top: 14%;
        z-index: 300;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .runway-background{
    /* 배경 이미지 적용 */
    display: flex;
    height: auto;
    background-image: url('@/assets/images/background_img.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-color: #e1e1e1; */
    justify-content: center;
    margin-top: 50px; /* 헤더 높이 맞춰서 마진 */
    }
    
    .runway-container{
    width: 1130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Custom';
}

    .runway-youtube-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin-bottom: 100px;

    }

    .runway-youtube{
    padding-top: 100px;
    display: flex;
    justify-content: center;
    }

    .runway-youtube-info-container{
        display: flex;
        margin-top: 5px;
        flex-direction: row;
        justify-content: left;
        width: 960px;
        margin-left: 85px;
    }

    .runway-yt-info1{
        font-size:30px;
        justify-content: left;
        color: rgb(96, 96, 96);
    }
 

    .image-slide-container{
        width: 880px;
        height: 660px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        margin: auto;
        margin-bottom: 100px;
    }

    .swiper {
    width: 100%;
    height: 100%;
    -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    }

    .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* transition-duration: 0.5s; */
    transition: all 0.2s linear;
    }

    /* .image-slide-container:hover img{
        
        transition-duration: 0.3s;
        filter: brightness(0.6);

    } */

    .image-slide-container img:hover{
        filter: brightness(1);
        transition-duration:0.1s;
        transform: scale(1.05, 1.05);
    }
 </style>