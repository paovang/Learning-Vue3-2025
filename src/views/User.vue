<template>
    <div>
        <a-table :dataSource="data.banners" :columns="columns" :loading="data.isLoading">
            <template #bodyCell="{ record, column, index }">
                <template v-if="column.key === 'id'">
                    <span>{{ index + 1 }}</span>
                </template>
                <template v-if="column.key === 'image'">
                    <a-image :src="record.image" :width="100" :height="50"/>
                </template>
                <template v-if="record.key === 'name'">
                    <span style="color: red;">{{ record.name }}</span>
                </template>
                <template v-if="column.key === 'link'">
                    <span style="color: blue;">{{ record.link }}</span>
                </template>
                <template v-else-if="column.key === 'setting'">
                    <span>
                        <a>Edit</a>
                        <a-divider type="vertical" />
                        <a-popconfirm
                        v-if="data.banners.length"
                            title="Sure to delete?"
                             @confirm="onDelete(record.id)"
                        >
                        <a>Delete</a>
                        </a-popconfirm>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useBannerStore } from '../store/banner.store'

    const { fetchAll, deleteItem, data } = useBannerStore();

    const onDelete = async (id: number) => {
        await deleteItem(id);
        // data.banners = data.banners.filter(item => item.id !== id);
    };

    onMounted(async () => {
        await fetchAll();
        
    })
const columns = [
{
    title: 'No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Setting',
    dataIndex: 'setting',
    key: 'setting',
  },
]
</script>