<script setup>
import { computed } from 'vue'
import { NSpace, NInputNumber, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark } from '@vicons/carbon'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore();

let selections = computed(() => content.sleep)
</script>
    
<template>
    <n-space>
        Slept for <n-input-number v-model:value="selections.hours" min="0" max="24" style="width: 5rem;"></n-input-number> hours last night
    </n-space>
    <n-space>
        Woke up <n-input-number v-model:value="selections.wakes" min="0" max="250" style="width: 5rem;"></n-input-number> times during the night
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.good" class="color-sleep">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Had nice dreams
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.bad" class="color-sleep">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Had nightmares
    </n-space>
</template>
    