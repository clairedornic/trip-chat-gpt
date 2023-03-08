<template>
    <h1>{{ data.article.title }}</h1>
    <p>{{ data.article.subtitle }}</p>
    <p>{{ data.article._createdAt }}</p>
    {{ data }}
</template>

<script setup>
import article from '@/cms/queries/article';

const route = useRoute()
let slug = route.params.slug
console.log( this.$route );

const { data: data, pending: postsPending } = await useLazyAsyncQuery(article, { slug: {eq : slug } } );
</script>