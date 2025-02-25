import { reactive } from 'vue';
<template>
    <div>
        <input type="text" v-model="formLogin.email" placeholder="please enter email"><br/><br/>
        <input type="text" v-model="formLogin.password" placeholder="please enter password">
        <br/>
        <br/>
        <div class="box-login">
            <button @click="callLogin" class="btn-login">Login {{ messages.name }}</button>
        </div>
        <button @click="callLogin" class="btn-cancel">Logout {{ messages.name }}</button>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useLoginStore } from '../store/login.store'
import { formatDate } from '../utils/format-date.utils';

const { login, messages } = useLoginStore()

const formLogin = reactive<any>({
    email: '',
    password: '',
})
const callLogin = async () => {
    await formatDate();
    // await login();
}
</script>
<style lang="scss" scoped>
    @use '../assets/scss/login.scss'; 
</style>