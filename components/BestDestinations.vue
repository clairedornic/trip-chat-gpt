<template>
    <div class="articles-container">
        <ul>
            <li v-for="article in dataBestDestinations.allArticles" :key="article.id">
                <nuxt-link :to="{name: 'destinations-slug', params: {slug: article.slug}}">
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
    import bestDestinations from '@/cms/queries/best-destinations';

    const props = defineProps({
        categoryId: String
    })

    const { data: dataBestDestinations, pending: bestDestinationsPending, error: error } = await useAsyncQuery(bestDestinations, { idCategory: props.categoryId } );
</script>