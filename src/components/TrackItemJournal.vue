<script setup>
import { ref } from 'vue'
import { NSpace, NInput } from 'naive-ui'

let content = ref('');
</script>
    
<template>
    <n-space vertical>
        <n-input v-model:value="content" type="textarea" placeholder="Expands downwards, pull the corner!"></n-input>
    </n-space>
</template>
    