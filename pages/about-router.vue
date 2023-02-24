<template>
    <NuxtLink to="/">Home page</NuxtLink>
    <h1>About router</h1>
</template>

<script setup>
    definePageMeta({
        name: 'router-page',
        title: 'About router',
        path: '/router-usage',
        layout: 'layout-2'
    })
</script>