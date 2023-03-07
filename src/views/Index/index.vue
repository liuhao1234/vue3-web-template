<template>
  <div @click="handleIncrement">{{ count }}------{{ double }}</div>
  <TodoList></TodoList>
  <el-checkbox v-model="checked1" label="Option 1" size="large" />
  <el-checkbox v-model="checked2" label="Option 2" size="large" />
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import store from '@/store';
const checked1 = ref(true);
const checked2 = ref(false);
const homeStore = store.home();
const { count, double } = storeToRefs(homeStore);
const { increment } = homeStore;
const handleIncrement = () => {
  increment();
};
</script>

<style></style>
