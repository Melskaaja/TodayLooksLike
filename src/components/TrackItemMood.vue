<script setup>
import { computed } from 'vue'
import { NSpace, NSlider, NIcon, NButton } from 'naive-ui'
import { useContentStorage } from '../stores/ContentStorage'

const content = useContentStorage();

let trackfunc = computed(() => content)
let selected = computed(() => content.mood)

let moods = {
    6: '😄 Feeling great!',
    5: '😊 I\'m happy',
    4: '🙂 Doing pretty good',
    3: '😐 I\'m alive I guess',
    2: '😟 Not really doing good',
    1: '😫 Feeling really shit',
    0: ''
}

let feels = [
    ['calm', 'Calm', 'info'],
    ['tired', 'Tired', 'info'],
    ['happy', 'Happy', 'success'],
    ['love', 'In love', 'success'],
    ['lucky', 'Lucky', 'success'],
    ['unsure', 'Unsure', 'warning'],
    ['stressed', 'Stressed', 'warning'],
    ['angry', 'Angry', 'error'],
    ['anxious', 'Anxious', 'error']
]
</script>
    
<template>
    <n-space vertical>
        Overall mood
        <n-slider vertical v-model:value="selected.mood" :marks="moods" :max="6" :tooltip="false" style="height: 10rem"></n-slider>
        Specific feelings
        <n-space>
            <n-button round v-for="btn in feels" 
                    :key="btn[0]" 
                    :type="btn[2]"
                    :ghost="!selected.feels.includes(btn[0])"
                    @click="trackfunc.toggleFeel(btn[0])">
                {{ btn[1] }}
            </n-button>
        </n-space>
    </n-space>
</template>
