<template>
    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else class="page-container">
        <h1>{{ data.category.title }}</h1>
        <p>{{ data.category.subtitle }}</p>
        <div class="articles-container">
            <ul v-for="article in data.category.articles" :key="article.id">
                <li>
                    <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug}}">
                        <img :src="article.image.url" :alt="article.image.alt" :srcset="article.image.responsiveImage.scrSet">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.subtitle }}</p>
                    </nuxt-link>
                </li>   
            </ul>
        </div>
    </div>
</template>
<script setup>
import category from '@/cms/queries/category';

const route = useRoute()
let slug = route.name;

const { data: data, pending: postsPending } = await useLazyAsyncQuery(category, { slug: {eq : slug } } );
</script>