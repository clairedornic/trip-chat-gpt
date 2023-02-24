<template>
    <h1>Dynamic blog</h1>
    <p>Article: {{ $route.params.slug }}</p>
</template>

<script setup>
    definePageMeta({
        name: 'dynamic-router-page',
        title: 'About dynamic router',
        path: '/dynamic-blog/:slug',
    })
</script>