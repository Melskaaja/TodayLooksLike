<script>
export { documentProps }
let documentProps = { title: 'Tracking' }
</script>

<script setup>
import { ref } from 'vue'
import TrackCard from '../components/TrackCard.vue'
</script>

<template>
    <h1 class="first">Tracking for today</h1>
    <track-card></track-card>
</template>

<style scoped lang="scss">
@import '../styles/tll-variables';
.n-card {
    margin-bottom: $gap;
}
</style>
