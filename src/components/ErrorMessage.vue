<template>
    <div v-if="errorMessageVisible" class="notification is-warning errorMessage">
        <button class="delete" style="position: fixed" @click="hideErrorMessage"></button>
        <p class="message">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts" setup>
import { errorMessage, errorMessageVisible, hideErrorMessage } from '@/store/errormessage';
</script>

<style lang="scss" scoped>
.errorMessage {
    height: 50%;
    width: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.message {
    overflow-y: auto;
    max-height: 100%;
    max-width: 100%;
    white-space: pre;
}
</style>
