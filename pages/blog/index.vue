<template>
    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else class="page-category">
        <h1>{{ data.category.title }}</h1>
        <p>{{ data.category.subtitle }}</p>
        <AllArticles :categoryId=data.category.id :categorySlug=slug></AllArticles>
    </div>
</template>
<script setup>
    import category from '@/cms/queries/category';

    const route = useRoute()
    let slug = route.name;
    const object = ref();
    const { data, pending: postsPending } = await useAsyncQuery(category, { slug: {eq : slug } } );

    object.value = data;

    const seoTags = object._rawValue._rawValue.category._seoMetaTags;


    // extract the content of the 'title' tag
    let title = seoTags.find(tag => tag.tag === 'title').content;

    // extract the content of the 'og:title' property
    let ogTitle = seoTags.find(tag => tag.attributes && tag.attributes.property === 'og:title').attributes.content;

    // extract the content of the 'description' name
    let description = seoTags.find(tag => tag.attributes && tag.attributes.name === 'description').attributes.content;

    // extract the content of the 'og:description' property
    let ogDescription = seoTags.find(tag => tag.attributes && tag.attributes.property === 'og:description').attributes.content;

    // extract the content of the 'og:image' property
    let ogImage = seoTags.find(tag => tag.attributes && tag.attributes.property === 'og:image').attributes.content;

    // extract the content of the 'twitter:image' name
    let twitterImage = seoTags.find(tag => tag.attributes && tag.attributes.name === 'twitter:image').attributes.content;

    useSeoMeta({
        title: title,
        ogTitle: ogTitle,
        description: description,
        ogDescription: ogDescription,
        ogImage: ogImage,
        twitterCard: twitterImage,
    })
</script>