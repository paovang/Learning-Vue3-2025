import { reactive } from 'vue';
<template>
    <div class="login-container">
      <input type="text" v-model="formLogin.email" placeholder="Enter Email" /><br /><br />
      <input type="password" v-model="formLogin.password" placeholder="Enter Password" />
      <br /><br />
      <div class="box-login">
        <button @click="callLogin" class="btn-login">Login</button>
      </div>
    </div>
  </template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useLoginStore } from '../store/login.store'
// import { formatDate } from '../utils/format-date.utils';

const { login } = useLoginStore()

const formLogin = reactive<any>({
    email: '',
    password: '',
})
const callLogin = async () => {
    // await formatDate();
    await login();
}
</script>
<style lang="scss" scoped>
    @use '../assets/scss/login.scss'; 
</style>