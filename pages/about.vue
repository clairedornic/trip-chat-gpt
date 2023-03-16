<template>
    <h1>{{ data.aboutPage.title }}</h1>
    <p>{{ data.aboutPage.subtitle }}</p>
    <div class="content">
        <ModularContent :content=data.aboutPage.content></ModularContent>
    </div>
</template>

<script setup>
   import about from '@/cms/queries/about';
    const { data: data, pending: postsPending } = await useAsyncQuery(about)

    const seoTags = data._rawValue.aboutPage._seoMetaTags;

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