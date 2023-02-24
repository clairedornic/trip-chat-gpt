<template>
    <h1>Fetch usage</h1>
    <div v-for="(item, index) in data" :key="index">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
    </div>
</template>
<script setup>
    // SSR
    const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains')
</script>