<script setup>
import { ref, reactive, computed } from 'vue'
import { NCard } from 'naive-ui'
import TrackButtons from './TrackButtons.vue'
import TrackItemMood from './TrackItemMood.vue'
import TrackItemSocial from './TrackItemSocial.vue'
import TrackItemFood from './TrackItemFood.vue'
import TrackItemWork from './TrackItemWork.vue'
import TrackItemSport from './TrackItemSport.vue'
import TrackItemJournal from './TrackItemJournal.vue'
import TrackItemPeriod from './TrackItemPeriod.vue'
import TrackItemSleep from './TrackItemSleep.vue'
import { useFollowStore } from '../stores/FollowStore'

const props = defineProps(['day']);
const followStore = useFollowStore();

let activeTrack = computed(() => followStore.active);
</script>

<template>
    <n-card>
        <track-buttons></track-buttons>
        <div v-if="activeTrack == 'mood'">
            <track-item-mood></track-item-mood>
        </div>
        <div v-if="activeTrack == 'social'">
            <track-item-social></track-item-social>
        </div>
        <div v-if="activeTrack == 'food'">
            <track-item-food></track-item-food>
        </div>
        <div v-if="activeTrack == 'work'">
            <track-item-work></track-item-work>
        </div>
        <div v-if="activeTrack == 'sport'">
            <track-item-sport></track-item-sport>
        </div>
        <div v-if="activeTrack == 'journal'">
            <track-item-journal></track-item-journal>
        </div>
        <div v-if="activeTrack == 'period'">
            <track-item-period></track-item-period>
        </div>
        <div v-if="activeTrack == 'sleep'">
            <track-item-sleep></track-item-sleep>
        </div>
    </n-card>
</template>
