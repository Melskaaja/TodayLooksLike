<script setup>
import { ref } from 'vue';
import TrackCard from '../components/TrackCard.vue';
</script>

<template>
    <h1 class="first">Quick track</h1>
    <track-card></track-card>
</template>

<style scoped lang="scss">
@import '../scss/tll-variables';
.n-card {
    margin-bottom: $gap;
}
</style>
