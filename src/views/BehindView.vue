<template>
   <mainHeader/>
</template>

<script>
    import { defineComponent } from 'vue';
    import mainHeader from '@/components/TopCategory.vue';

    export default defineComponent({
    components: {
        mainHeader // 컴포넌트 등록
    },
})
</script>