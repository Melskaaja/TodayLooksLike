<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon, NSlider } from 'naive-ui'
import { Close, RainDrop } from '@vicons/carbon'
import { useContentStorage } from '../stores/ContentStorage'

const content = useContentStorage();

let selections = computed(() => content.period)

let flows = {
    4: '🩸🩸🩸🩸',
    3: '🩸🩸🩸',
    2: '🩸🩸',
    1: '🩸',
    0: ''
}
</script>
    
<template>
    <n-space>
        <n-switch v-model:value="selections.active" class="checked-icon-danger color-period">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="RainDrop"></n-icon></template>
        </n-switch> Aunt Flo
    </n-space>
    <n-space justify="space-between">
        <n-slider vertical v-model:value="selections.flow" max="4" :marks="flows" :disabled="!selections.active" :tooltip="false" style="height: 130px"></n-slider>
    </n-space>
</template>
    