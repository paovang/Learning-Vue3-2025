<template>
    <div class="logo">
        <img src="/logoBeer.png" />
    </div>
      <a-menu v-model:selectedKeys="selectedKeys" class="sidebar-menu" mode="inline">
        <a-menu-item key="1" @click="gotoRoute('user')">
          <user-outlined />
          <span>User</span>
        </a-menu-item>
        <a-menu-item key="2" @click="gotoRoute('banner')">
          <video-camera-outlined />
          <span>Banner</span>
        </a-menu-item>
        <a-menu-item key="3" @click="gotoRoute('supplier')">
          <upload-outlined />
          <span>Supplier</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
      </a-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  UserOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons-vue';

const selectedKeys = ref<string[]>([]);

const router = useRouter();

const gotoRoute = (routeName: string) => {
  if (routeName === 'user') {
    router.push({ name: 'user'});
  } else if (routeName === 'banner') {
    router.push({ name: 'banner'});
  } else if (routeName === 'supplier') {
    router.push({ name: 'supplier'});
  } else {
    router.push({ name: 'dashboard'});
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8125rem 0.5rem 0.8125rem 1rem;
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  img {
    width: 4rem;
    height: 4rem;
    margin-right: 0.8rem;
    margin-left: 0.25rem;
    object-fit: contain;
    border-radius: 5px;
  }
}
</style>