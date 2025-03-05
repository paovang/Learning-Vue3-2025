
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
        <h1>{{ $t('messages.success') }}</h1>
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
    import { onMounted } from 'vue';
    import { useBannerStore } from '../store/banner.store'

    const { updateBanner, fetchAll, data } = useBannerStore();

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
        await updateBanner(editValue);
    }   

    onMounted(async () => {
        await fetchAll();
    })

</script>