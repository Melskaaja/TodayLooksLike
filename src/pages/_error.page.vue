<template>
    <div v-if="is404">
      <h1>404</h1>
      Oops, there seems to be nothing here!
    </div>
    <div v-else>
      <h1>500</h1>
      Well that's embarassing. Something went wrong on the server.
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps(['is404'])
  </script>