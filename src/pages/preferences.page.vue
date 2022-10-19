<script>
export { documentProps }
let documentProps = { title: 'Preferences' }
</script>

<script setup>
import { computed } from 'vue'
import { NSpace, NSwitch, NIcon } from 'naive-ui'
import { Close, Checkmark } from '@vicons/carbon'
</script>

<template>
    <n-space vertical>
        <h1 class="first">Preferences</h1>
        There will be many switches here to toggle which kinds of stuff to follow. Options include:
        <ol>
            <li>mood/moods? can there be several?</li>
            <li>period</li>
            <li>quote/journal</li>
        </ol>
    </n-space>
</template>

<style scoped lang="scss"></style>
