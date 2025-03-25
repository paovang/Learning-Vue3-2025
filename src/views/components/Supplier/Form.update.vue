<template>
    <a-form-item
      label="Name"
      name="name"
      :rules="[{ required: true, message: 'Please input your name!' }]"
    >
      <a-input v-model:value="form.name"/>
    </a-form-item>
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input v-model:value="form.email" />
    </a-form-item>
    <a-form-item
      label="Company"
      name="company"
      :rules="[{ required: true, message: 'Please input your company!' }]"
    >
      <a-input v-model:value="form.company" />
    </a-form-item>
    <a-form-item
      label="Phone Number"
      name="phone_number"
      :rules="[{ required: true, message: 'Please input your phone number!' }]"
    >
      <a-input v-model:value="form.phone_number" />
    </a-form-item>
    <a-form-item
      label="Address"
      name="address"
      :rules="[{ required: true, message: 'Please input your address!' }]"
    >
      <a-textarea v-model:value="form.address" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="update">Update</a-button>
    </a-form-item>
</template>
<script lang="ts" setup>
    import { useSupplierStore } from '../../../store/supplier.store'
    import { notification } from 'ant-design-vue';
    import { onMounted } from 'vue';
    import { useRoute } from "vue-router";

    const route = useRoute();

    const openNotification = () => {
        notification.open({
            message: 'Update Supplier',
            description:
            'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 5,
        });
    };


    const { form, fetchAll, data } = useSupplierStore();

    const update = async () => {
        openNotification()
    }

    onMounted(async() => {
      await fetchAll();
      const id = Number(route.params.id);
      const findData = data.suppliers.find((item) => item.id === id);

      form.id = findData.id;
      form.name = findData.name;
      form.email = findData.email;
      form.company = findData.company;
      form.phone_number = findData.phone_number;
      form.address = findData.address;
    })
</script>