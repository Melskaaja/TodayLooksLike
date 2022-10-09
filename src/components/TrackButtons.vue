<script setup>
import { ref } from 'vue';
import { NButton, NButtonGroup, NIcon } from 'naive-ui';
import { FaceSatisfied, Friendship, NetworkEnterprise, Activity, Chat, RainDrop, Moon } from '@vicons/carbon';

const props = defineProps(['hide', 'only', 'preselected']);

const btns = [ // id, label, icon, color
    ['mood', 'Mood', FaceSatisfied, '#EEC933'],
    ['social', 'Social', Friendship, '#42A9C2'],
    ['work', 'Work', NetworkEnterprise, '#AD8060'],
    ['sport', 'Activity', Activity, '#A8EF8E'],
    ['journal', 'Journal', Chat, '#AA75EF'],
    ['period', 'Period', RainDrop, '#E64141'],
    ['sleep', 'Sleep', Moon, '#2F4270']
];
let activeBtn = ref('');
let visibleBtns = ['mood', 'social', 'work', 'sport', 'journal', 'period', 'sleep'];
// TODO get visibleBtns from pinia

if (props.hide?.length) {
    let hidables = props.hide.split(' ');
    for (let h = 0; h < hidables.length; h++) {
        let index = visibleBtns.indexOf(hidables[h]);
        if (index >= 0) {
            visibleBtns.splice(index, 1);
        }
    }
}

if (props.only?.length) {
    visibleBtns = props.only.split(' ');
}
if (props.preselected?.length) {
    activeBtn = props.preselected.split(' ')[0];
}
</script>

<template>
    <n-button-group>
        <n-button v-for="btn in btns" 
                v-show="visibleBtns.includes(btn[0])" 
                :color="btn[3]"
                :ghost="activeBtn != btn[0]" 
                @click="activeBtn = (activeBtn != btn[0] ? btn[0] : ''); $emit('selected', activeBtn)">
            <template #icon>
                <n-icon :component="btn[2]"></n-icon>
            </template>
            {{ btn[1] }}
        </n-button>
    </n-button-group>
</template>

<style scoped lang="scss">
@import '../scss/tll-variables';
.n-button-group {
    width: 100%;
    display: flex;
    flex: 0 0 100%;
    flex-wrap: wrap;
    @media (min-width: $breakpoint-sm) {
        flex-wrap: nowrap;
    }
    .n-button {
        flex: 1;
        justify-content: center;
    }
}
</style>