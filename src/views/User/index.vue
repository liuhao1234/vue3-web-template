<template>
  <div @click="handleIncrement">{{ count }}--{{ double }}</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import store from '@/store';
import { login } from '@/request/api';
const userStore = store.user();
const { count, double } = storeToRefs(userStore);
const { increment } = userStore;
login();
const handleIncrement = () => {
  increment();
};
</script>

<style></style>
