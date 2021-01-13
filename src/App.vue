<template>
    <router-view />
    <ErrorMessage />
</template>

<script lang="ts" setup>
import ErrorMessage from '@/components/ErrorMessage.vue';
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 75vw;
    margin: auto;
}
</style>
