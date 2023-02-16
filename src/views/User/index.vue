<template>
  <div @click="handleIncrement">{{count}}--{{double}}</div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import store from '@/store'
  const userStore = store.user()
  const { count,double } = storeToRefs(userStore)
  const { increment } = userStore
  const handleIncrement = ()=>{
    increment()
  }
</script>

<style>

</style>