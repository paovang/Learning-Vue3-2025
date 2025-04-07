<template>
    <div>
        <a-button type="primary" @click="create">Create Banner</a-button>
        <a-divider />
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="General Supplier">
                <a-table :columns="columns" :data-source="data.banners">
                    <template #bodyCell="{ record, column, index }">
                        <template v-if="column.key === 'id'">
                            <span>{{ index + 1 }}</span>
                        </template>
                        <template v-if="column.key === 'image_url'">
                            <a-image :src="record.image_url" :width="100" :height="50"/>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <span>
                                <a @click="update(record.id)">Edit</a>
                                <a-divider type="vertical" />
                                <a-popconfirm
                                v-if="data.banners.length"
                                    title="Sure to delete?"
                                >
                                <a>Delete</a>
                                </a-popconfirm>
                            </span>
                        </template>
                    </template>
                </a-table>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useMyBannerStore } from '../store/my-banner.store'
import { useRouter } from 'vue-router';

const router = useRouter();

const { fetchAll, data } = useMyBannerStore();

onMounted(async () => {
    await fetchAll();
})

const create = () => {
    router.push({ name: 'create.my.banner' })
}

const update = (id: number) => {
    router.push({ name: 'update.my.banner', params: { id: id } })
}

const activeKey = ref('1');
const columns = [
    {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'image_url',
    key: 'image_url',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
</script>