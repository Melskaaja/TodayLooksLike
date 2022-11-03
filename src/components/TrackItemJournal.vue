<script setup>
import { computed } from 'vue'
import { NSpace, NInput } from 'naive-ui'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore();

let journal = computed(() => content.journal)
</script>
    
<template>
    <n-space vertical>
        <n-input v-model:value="journal.text" type="textarea" placeholder="Expands downwards, pull the corner!"></n-input>
    </n-space>
</template>
