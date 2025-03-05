
<template>
    <div>
        ສະບາຍດີ ປີໃໝ່ລາວ 2024: {{ brannerName }} {{ surname }} <br/><br/>
        show: {{ pao.name }} {{ pao.surname }} | {{ pao.items.name }} {{ pao.items.surname }}
        <br/>
        <hr>
        <input v-model="editValue.name" placeholder="please enter name...">
        <br/>
        <br/>
        <input v-model="surname" placeholder="please enter surname...">
        <p v-if="errors.surname" class="help is-danger">{{ errors.surname }}</p>
        <br/>
        <br/>
        <input v-model="brannerName" placeholder="please enter name...">
        <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>
        <br/>
        <br/>
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
    import { useField, useForm } from 'vee-validate';
    import { bannerSchema } from './schemas/Banner.schema';
    import { useI18n } from 'vue-i18n';

    const { updateBanner, fetchAll, data } = useBannerStore();


    const { t } = useI18n();

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

    const translatedErrorMessages = {
        name: t('messages.validate.name'),
        surname: t('messages.validate.surname'),
    }

    const { handleSubmit: submit, errors } = useForm({
        validationSchema: bannerSchema(translatedErrorMessages)
    });

    const { value: brannerName } = useField<string>('name');
    const { value: surname } = useField<string>('surname');

    const update = submit(async(value) => {
        console.log('Submitted values:', value);
        // await updateBanner(editValue);
    });

    onMounted(async () => {
        await fetchAll();
    })

</script>