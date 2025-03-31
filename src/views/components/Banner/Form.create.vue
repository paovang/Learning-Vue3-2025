<template>
<a-upload
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :before-upload="beforeUpload"
  >
    <img v-if="form.imageFile" :src="form.imageFile" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>

  <a-input v-model:value="form.name" placeholder="please enter name..." />
  <br/>
  <br/>
    <a-select
        ref="select"
        v-model:value="form.type"
        style="width: 100%"
        :options="options1"
    >
    </a-select>
    <br/><br/>
    <button @click="submit">Create</button>
</template>
<script lang="ts" setup>
    import { notification, UploadProps } from 'ant-design-vue';
    import { onMounted, ref } from 'vue';
    import { message } from 'ant-design-vue';
    import { useMyBannerStore } from '../../../store/my-banner.store'

    const { create, form } = useMyBannerStore();

    const openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
            'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 5,
        });
    };
    const options1 = ref<any>([
        {
            value: 'normal',
            label: 'ທົ່ວໄປ',
        },
        {
            value: 'store',
            label: 'ຮ້ານຄ້າ',
        },
        {
            value: 'product',
            label: 'ສີນຄ້າ',
        },
        {
            value: 'promotion',
            label: 'ໂປຮໂມຮຊັ່ນ',
        },
    ]);


    const loading = ref<boolean>(false);

    // ตรวจสอบไฟล์ก่อนอัปโหลด
    const beforeUpload: UploadProps['beforeUpload'] = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
            return false;
        }
        form.imageUrl = URL.createObjectURL(file);
        form.imageFile = file;

        return true;
    };


    const submit = async () => {
        await create();
        openNotification()
    }

    onMounted(async () => {
    //   await clearForm();
    })
</script>