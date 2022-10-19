<script>
export { documentProps }
let documentProps = { title: 'Preferences' }
</script>

<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark } from '@vicons/carbon'
import { useTrackStorage } from '../stores/TrackStorage'

const trackStorage = useTrackStorage();

let allTracks = computed(() => trackStorage.all);
let selected = computed(() => trackStorage.active);
</script>

<template>
    <h1 class="first">Preferences</h1>
    <n-space>Select the aspects of your life you want to keep track of within this app.</n-space>
    <n-space v-for="trackname in allTracks" :key="trackname">
        <n-switch :value="selected.includes(trackname)" @update:value="trackStorage.toggleActive(trackname)">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> {{ trackStorage.getLabel(trackname) }}
    </n-space>
</template>

<style scoped lang="scss"></style>
