<script setup>
import { reactive } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark, StarFilled } from '@vicons/carbon'

let selections = reactive({ job: false, tasks: false, break: false });
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