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

    const object = ref();

    const { data, pending: postsPending } = await useAsyncQuery(article, { slug: {eq : slug } } );

    object.value = data;
    console.log(object);

    const seoTags = object._rawValue._rawValue.article._seoMetaTags;

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