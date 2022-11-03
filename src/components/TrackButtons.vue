<script setup>
import { computed, ref } from 'vue'
import { NButton, NButtonGroup, NIcon } from 'naive-ui'
import { FaceSatisfied, Friendship, NetworkEnterprise, NoodleBowl, Activity, Chat, RainDrop, Moon } from '@vicons/carbon'
import { useFollowStore } from '../stores/FollowStore'

const btns = [ // id, label, icon, color
    ['mood', 'Mood', FaceSatisfied, '#EEC933'],
    ['social', 'Social', Friendship, '#42A9C2'],
    ['food', 'Food', NoodleBowl, '#578146'],
    ['work', 'Work', NetworkEnterprise, '#AD8060'],
    ['sport', 'Activity', Activity, '#a74c8b'],
    ['period', 'Period', RainDrop, '#E64141'],
    ['sleep', 'Sleep', Moon, '#2F4270'],
    ['journal', 'Journal', Chat, '#AA75EF']
];

const followStore = useFollowStore();

let visibleBtns = computed(() => followStore.followed);
let activeBtn = ref(followStore.active);
</script>

<template>
    <n-button-group>
        <n-button v-for="btn in btns" 
                class="collapse"
                v-show="visibleBtns.includes(btn[0])" 
                :color="btn[3]"
                :ghost="activeBtn != btn[0]" 
                @click="activeBtn = (activeBtn != btn[0] ? btn[0] : ''); followStore.setActive(activeBtn); $emit('selected', activeBtn)">
            <template #icon>
                <n-icon :component="btn[2]"></n-icon>
            </template>
            {{ btn[1] }}
        </n-button>
    </n-button-group>
</template>

<style scoped lang="scss">
@import '../styles/tll-variables';
.n-button-group {
    width: 100%;
    display: flex;
    flex: 0 0 100%;
    flex-wrap: wrap;
    margin-bottom: $gap;
    @media (min-width: $breakpoint-sm) {
        flex-wrap: nowrap;
    }
    .n-button {
        flex: 1;
        justify-content: center;
    }
}
</style>