
<template>

<flipbook :pages="pages"></flipbook>
</template>

<script>
import Flipbook from 'flipbook-vue'
import image1 from '@/assets/images/bugreport/버그리포트_2.jpg'
import image2 from '@/assets/images/bugreport/버그리포트_3.jpg'
export default {
  components: { Flipbook },
  data() {
    return {
      pages: [image1, image2]
    }
  }
}
</script>
<style>
.flipbook {
  width: 90vw;
  height: 90vh;
}
</style>

