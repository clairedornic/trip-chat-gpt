<template>
    <div class="articles-container">
        <ul v-for="article in dataBestDestinations.allArticles" :key="article.id">
            <li>
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
    import bestDestinations from '@/cms/queries/best-destinations';

    const props = defineProps({
        categoryId: String
    })

    const { data: dataBestDestinations, pending: bestDestinationsPending, error: error } = await useAsyncQuery(bestDestinations, { idCategory: props.categoryId } );
</script>