<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark, FavoriteFilled } from '@vicons/carbon'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore();

let selections = computed(() => content.social)
</script>
    
<template>
    <n-space>
        <n-switch v-model:value="selections.friends" class="color-social">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch>
        Got to see my friends
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.hobbies" class="color-social">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch>
        Spent time at my hobbies
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.partner" class="checked-icon-danger color-social">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="FavoriteFilled"></n-icon></template>
        </n-switch>
        Hung out with my partner
    </n-space>
</template>
