<template>
    <div class="logo">
        <img src="/logoBeer.png" />
    </div>
      <a-menu v-model:selectedKeys="selectedKeys" class="sidebar-menu" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
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
import {
  UserOutlined,
  TeamOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons-vue';

const selectedKeys = ref<string[]>([]);
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