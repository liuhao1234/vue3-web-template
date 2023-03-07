<template>
  <div class="container">
    <el-form
      :model="form"
      label-width="120px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密  码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  username: '',
  password: '',
});
const onSubmit = () => {
  router.push({
    name: 'index',
  });
};
</script>

<style lang="scss" scoped>
.container {
  @include flex-content;
  height: 100%;
}
</style>
