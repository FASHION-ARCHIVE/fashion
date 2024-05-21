<template>
    <mainHeader/>
    <showinfoMobile v-if="$isMobile()"/>
    <showinfoDesktop v-else/>
</template>

<script>
    import showinfoDesktop from '@/components/Showinfo/ShowinfoDesktop.vue'
    import showinfoMobile from '@/components/Showinfo/ShowinfoMobile.vue'
    import mainHeader from '@/components/TopCategory.vue';

    export default{
        components :{
            showinfoDesktop,
            showinfoMobile,
            mainHeader
        }
    }

</script>