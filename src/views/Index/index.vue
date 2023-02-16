<template>
  <div @click="handleIncrement">{{ count }}------{{ double }}</div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import store from '@/store'
  const homeStore = store.home()
  const { count,double } = storeToRefs(homeStore)
  const { increment } = homeStore
  const handleIncrement = ()=>{
    increment()
  }
</script>

<style>

</style>