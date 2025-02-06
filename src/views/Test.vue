
<template>
    <div>
        ສະບາຍດີ ປີໃໝ່ລາວ 2024: {{ name }} {{ surname }} <br/><br/>
        show: {{ pao.name }} {{ pao.surname }} | {{ pao.items.name }} {{ pao.items.surname }}
        <br/>
        <hr>
        <input v-model="editValue.name" placeholder="please enter name...">
        <span>
            <button @click="update">Update</button>
        </span>
        <hr>
        Show: <br/>
        <ul v-for="(data, index) in data.banners" :key="index">
            <li>
                {{ index+1 }} . {{ data.name }}
                <span>
                    <button @click="edit(data)">Edit</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    import axios from 'axios';  
    import { onMounted } from 'vue';

    const name = ref('pao');
    const surname = ref('vang');


    const pao = reactive({
        name: 'pao',
        surname: 'vang',
        items: {
            name: 'alex',
            surname: 'sander'
        }
    });

    const editValue = ref<any>({});
    const edit = async (data: any) => {
        editValue.value = data;
    }

    const update = async () => {
        await axios({
            method: 'put',
            url: 'https://hal-test.hal-logistics.la/api/client/home-page/' + editValue.value.id,
            data: {
                name: editValue.value.name
            }
        })
        .then(function (response) {
           console.log('success');
        }).catch((err: any) => {
            console.log('err: ', err);
        });
    }   

    const data = reactive({
        banners: [] as { id: number, name: string }[],
    });

    const fetchAll = async () => {
        await axios({
            method: 'get',
            url: 'https://hal-test.hal-logistics.la/api/client/home-page'
        })
        .then(function (response) {
            data.banners = response.data.data.banner;
        }).catch((err: any) => {
            console.log('err: ', err);
        });
    }

    onMounted(async () => {
        await fetchAll();
    })

</script>