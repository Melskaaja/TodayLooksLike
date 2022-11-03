<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark, StarFilled } from '@vicons/carbon'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore();

let selections = computed(() => content.sport)
</script>
    
<template>
    <n-space>
        <n-switch v-model:value="selections.job" class="checked-icon-warning color-work">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="StarFilled"></n-icon></template>
        </n-switch> Rocked at my job 
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.tasks" class="color-work">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Finished my daily tasks
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.break" class="color-work">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Had enough breaks
    </n-space>
</template>

<style scoped lang="scss"></style>