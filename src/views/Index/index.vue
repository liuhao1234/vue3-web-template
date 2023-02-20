<template>
  <div @click="handleIncrement">{{ count }}------{{ double }}</div>
  <el-checkbox v-model="checked1" label="Option 1" size="large" />
  <el-checkbox v-model="checked2" label="Option 2" size="large" />
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