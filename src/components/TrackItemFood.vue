<script setup>
import { computed } from 'vue'
import { NSpace, NInputNumber, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark } from '@vicons/carbon'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore();

let selections = computed(() => content.food)

</script>
    
<template>
    <n-space>
        Had <n-input-number v-model:value="selections.meals" min="0" max="10" style="width: 5rem;"></n-input-number> yummy meals
    </n-space>
    <n-space>
        Had <n-input-number v-model:value="selections.snacks" min="0" max="50" style="width: 5rem;"></n-input-number> tasty snacks
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.healthy" class="color-food">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Ate at least one healthy meal
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.sweets" class="color-food">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Had some sweet snacks
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.savories" class="color-food">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch> Had some savory snacks
    </n-space>
</template>

<style scoped lang="scss"></style>