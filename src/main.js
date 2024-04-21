import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import "aos/dist/aos.css";

createApp(App).use(router).mount('#app')

const app = createApp(App)

// AOS 초기화를 위한 플러그인
const AOSPlugin = {
  install() {
    AOS.init()
  }
}

AOS.init({
    delay: 200,
    duration: 2000
})

// AOS 플러그인 사용
app.use(AOSPlugin)

// 라우터 사용
app.use(router)

// 애플리케이션 마운트
app.mount('#app')
