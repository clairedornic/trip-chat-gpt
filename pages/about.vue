<template>
    <h1>{{ data.aboutPage.title }}</h1>
    <p>{{ data.aboutPage.subtitle }}</p>
</template>

<script setup>
   import about from '@/cms/queries/about';
    const { data: data, pending: postsPending } = await useLazyAsyncQuery(about)
</script>