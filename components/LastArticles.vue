<template>
    <div class="articles-container">
        <ul v-for="article in dataLastArticles.allArticles" :key="article.id">
            <li>
                <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug}}">
                    <img :src="article.image.url" :alt="article.image.alt" :srcset="article.image.responsiveImage.scrSet">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.subtitle }}</p>
                </nuxt-link>
            </li>   
        </ul>
    </div>
</template>
<script setup>
    import lastArticles from '@/cms/queries/last-three-article';

    const props = defineProps({
        categoryId: String
    })

    const { data: dataLastArticles, pending: lastArticlesPending, error: error } = await useLazyAsyncQuery(lastArticles, { idCategory: props.categoryId } );
</script>