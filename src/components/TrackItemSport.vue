<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark } from '@vicons/carbon'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore();

let selections = computed(() => content.sport)
</script>
    
<template>
    <n-space>
        <n-switch v-model:value="selections.chores" class="color-sport">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Did some chores
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.sport" class="color-sport">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Participated in sports
    </n-space>
</template>
