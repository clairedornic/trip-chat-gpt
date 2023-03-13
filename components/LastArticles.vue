<template>
    <div class="articles-container">
        <ul>
            <li v-for="article in dataLastArticles.allArticles" :key="article.id">
                <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug}}">
                    <img 
                    :src="article.image.responsiveImage.src" 
                    :alt="article.image.responsiveImage.alt" 
                    :srcset="article.image.responsiveImage.scrSet"
                    :sizes="article.image.responsiveImage.sizes"
                    :width="article.image.responsiveImage.width"
                    :height="article.image.responsiveImage.height"
                    :title="article.image.responsiveImage.title"
                    >
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

    const { data: dataLastArticles, pending: lastArticlesPending, error: error } = await useAsyncQuery(lastArticles, { idCategory: props.categoryId } );
</script>