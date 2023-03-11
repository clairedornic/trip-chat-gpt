<template>
    <div class="articles-container">
        <ul v-for="article in data.allArticles" :key="article.id">
            <li v-if="props.categorySlug === 'blog'">
                <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug}}">
                    <img :src="article.image.url" :alt="article.image.alt" :srcset="article.image.responsiveImage.scrSet">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.subtitle }}</p>
                </nuxt-link>
            </li>
            <li v-else>
                <nuxt-link :to="{name: 'destinations-slug', params: {slug: article.slug}}">
                    <img :src="article.image.url" :alt="article.image.alt" :srcset="article.image.responsiveImage.scrSet">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.subtitle }}</p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
   import articlesByCategoryId from '@/cms/queries/articles-by-category-id';

    const props = defineProps({
        categoryId: String,
        categorySlug: String
    })
    const { data, pending: postsPending, error: error } = await useAsyncQuery(articlesByCategoryId, { idCategory: props.categoryId } );
</script>