<template>
  <div class="container">
    <el-empty>
      <el-button @click="handleBack" type="primary">返回</el-button>
    </el-empty>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleBack = ()=>{
  router.back()
}
</script>

<style lang="scss" scoped>
.container{
  height: calc(100% - 60px);
  @include flex-content;
}
</style>