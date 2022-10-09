<script setup>
import { reactive } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark, StarFilled } from '@vicons/carbon'

let selections = reactive({ friends: false, partner: false });
</script>
    
<template>
    <n-space>
        <n-switch v-model:value="selections.friends" class="checked-icon-warning">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="StarFilled"></n-icon></template>
        </n-switch>
        Rocked at my job 
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.hobbies">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch>
        Finished my daily tasks
    </n-space>
    <n-space>
        <n-switch v-model:value="selections.partner">
            <template #unchecked-icon><n-icon :component="Close"></n-icon></template>
            <template #checked-icon><n-icon :component="Checkmark"></n-icon></template>
        </n-switch>
        Had enough breaks
    </n-space>
</template>

<style lang="scss">
@import '../scss/tll-variables.scss';
.n-space {
    margin-bottom: $gap;
}
</style>