<script setup>
import { ref } from 'vue';
import TrackCard from '../components/TrackCard.vue';
</script>

<template>
    <h5 class="first">Quick track</h5>
    <track-card></track-card>
</template>

<style scoped lang="scss">
@import '../scss/tll-variables';
.n-card {
    margin-bottom: $gap;
}
</style>
