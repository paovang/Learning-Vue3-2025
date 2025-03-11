<template>
    <div class="t">
        Component {{ data.isProps.name }}
        <br>
        <br>
        <button @click="$emit('paoEmit', 2025)">Emit</button>
    </div>
</template>

<script lang="ts" setup> 
    const data = defineProps(['isProps'])
</script>

<style lang="scss" scoped>
    .t {
        color: red
    }
</style>