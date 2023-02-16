<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="menu-container"
      mode="horizontal"
    >
      <el-menu-item index="1"><router-link to="index">Home</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="user">User</router-link></el-menu-item>
    </el-menu>
  </div>
  <router-view></router-view>
</template>

<script setup>
  import { ref } from 'vue'
  const activeIndex = ref('1')
</script>

<style lang="scss" scoped>
.menu-container{
  a{
    font-size: 16px;
  }
}
</style>