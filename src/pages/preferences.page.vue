<script>
export { documentProps }
let documentProps = { title: 'Preferences' }
</script>

<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark } from '@vicons/carbon'
import { useFollowStorage } from '../stores/FollowStorage'

const followStorage = useFollowStorage();

let allTracks = computed(() => followStorage.all);
let selected = computed(() => followStorage.followed);
</script>

<template>
    <h1 class="first">Preferences</h1>
    <n-space>Select the aspects of your life you want to keep track of within this app.</n-space>
    <n-space v-for="trackname in allTracks" :key="trackname">
        <n-switch :value="selected.includes(trackname)" @update:value="followStorage.toggleFollow(trackname)">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> {{ followStorage.getLabel(trackname) }}
    </n-space>
</template>

<style scoped lang="scss"></style>
