<script setup>
import { reactive } from 'vue'
import { NSpace, NSlider, NIcon, NButton } from 'naive-ui'

let selected = reactive({ mood: 0, feels: [] })

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
    ['happy', 'Happy', 'primary'],
    ['love', 'In love', 'primary'],
    ['lucky', 'Lucky', 'primary'],
    ['unsure', 'Unsure', 'warning'],
    ['stressed', 'Stressed', 'warning'],
    ['angry', 'Angry', 'error'],
    ['anxious', 'Anxious', 'error']
]

function toggleFeelSelection(feel) {
    if (selected.feels.includes(feel)) {
        let pos = selected.feels.indexOf(feel);
        selected.feels.splice(pos, 1);
    } else {
        selected.feels.push(feel);
    }
}
</script>
    
<template>
    <n-space vertical>
        Overall mood
        <n-slider vertical v-model:value="selected.mood" :marks="moods" :max="6" :tooltip="false" style="height: 10rem"></n-slider>
        Specific feelings
        <n-space>
            <n-button v-for="btn in feels" 
                    :key="btn[0]" round 
                    :type="btn[2]"
                    :ghost="!selected.feels.includes(btn[0])"
                    @click="toggleFeelSelection(btn[0])">
                {{ btn[1] }}
            </n-button>
        </n-space>
    </n-space>
</template>
  