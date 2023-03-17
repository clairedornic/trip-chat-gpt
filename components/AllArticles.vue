<template>
    <div class="articles-container">
        <ul>
            <li v-for="article in data.allArticles" :key="article.id" >
                <nuxt-link v-if="props.categorySlug === 'blog'" :to="{name: 'blog-slug', params: {slug: article.slug}}">
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
                <nuxt-link v-else :to="{name: 'destinations-slug', params: {slug: article.slug}}">
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
   import articlesByCategoryId from '@/cms/queries/articles-by-category-id';

    const props = defineProps({
        categoryId: String,
        categorySlug: String
    })
    const { data, pending: postsPending, error: error } = await useAsyncQuery(articlesByCategoryId, { idCategory: props.categoryId } );
</script>