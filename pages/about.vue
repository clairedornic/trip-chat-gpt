<template>
    <main class="page-about">
        <div class="content-container" v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div class="content-container" v-else>
            <div class="hero-about container-section">
                <div class="title-container">
                    <h1>{{ data.aboutPage.title }}</h1>
                </div>
                <div class="subtitle-container">
                    <p>{{ data.aboutPage.subtitle }}</p>
                </div>
            </div>
            <div class="full-width-container">
                <img 
                    :src="data.aboutPage.heroImage.responsiveImage.src" 
                    :alt="data.aboutPage.heroImage.responsiveImage.alt" 
                    :srcset="data.aboutPage.heroImage.responsiveImage.srcSet"
                    :sizes="data.aboutPage.heroImage.responsiveImage.sizes"
                >
            </div>
            <div class="content container-section">
                <ModularContent :content=data.aboutPage.content></ModularContent>
                <section class="follow-us-section">
                    <div class="title-media" v-for="block in data.aboutPage.modularContent" >
                        <h2>{{ block.blockTitleImageTitle }}</h2>
                        <div class="img-container full-width-container">
                            <img 
                            :src="block.blockTitleImageImage.responsiveImage.src" 
                            :alt="block.blockTitleImageImage.responsiveImage.alt" 
                            :srcset="block.blockTitleImageImage.responsiveImage.srcSet"
                            :sizes="block.blockTitleImageImage.responsiveImage.sizes"
                            >
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
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

    definePageMeta({
        title: 'A propos',
        path: '/a-propos',
    })
</script>