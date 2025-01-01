<template>
  <h1>瞿悦好久不见</h1>  <el-button @click="logOut">退出登录</el-button>
</template>

<script setup>
import useUserStore from "@/store/modules/user.js";
import { ElMessage } from 'element-plus'

const userStore = useUserStore();

const router = useRouter();

const {proxy} = getCurrentInstance();

console.log('proxy',proxy);

// 退出登录
const logOut = ()=>{
  userStore.logOut().then(()=>{
    router.replace('/login');
    ElMessage({
      message: '退出成功',
      type: 'success',
      })
  })
}

</script>

<style scoped lang='scss'>

</style>

