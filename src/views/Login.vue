import { reactive } from 'vue';
<template>
    <div>
        <input type="text" v-model="formLogin.email" placeholder="please enter email"><br/><br/>
        <input type="text" v-model="formLogin.password" placeholder="please enter password">
        <br/>
        <br/>
        <button @click="login">Login</button>
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const formLogin = reactive<any>({
    email: '',
    password: '',
})
const login = async () => {
    await axios({
            method: 'post',
            url: 'https://hal-test.hal-logistics.la/api/admin/sign-in',
            data: {
                email: 'halcenter_admin@gmail.com',
                password: 'halcenteradmin@2022',
            }
        })
        .then(function (res) {
            if (res.status === 200) {
                localStorage.setItem('accessToken', res.data.access_token);
                localStorage.setItem('user', JSON.stringify(res.data.authUser));

                router.push('/admin/test');
            } else {
                console.log('not pass');
            }
        }).catch((err: any) => {
            console.log('err: ', err);
        });
}
</script>