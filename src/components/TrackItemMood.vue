<script setup>
import { ref } from 'vue'
import { NSpace, NSlider, NIcon } from 'naive-ui'
import { FaceActivated, FaceDissatisfied, FaceDizzy, FaceNeutral, FacePending, FaceSatisfied } from '@vicons/carbon'

let moodval = ref(50);
let moods = {
    100: FaceActivated,
    80: FaceSatisfied,
    60: FaceNeutral,
    40: FacePending,
    20: FaceDissatisfied,
    0: '<n-icon><face-dizzy/></n-icon> Feeling really shit'
}
</script>
    
<template>
    <n-space>
        <n-slider vertical v-model:value="moodval" :marks="moods" step="5" tooltip="false"></n-slider>
    </n-space>
</template>

<style scoped lang="scss">
@import '../scss/tll-variables';
.n-space {
    height: 30rem;
    padding-top: $gap;
}
</style>    