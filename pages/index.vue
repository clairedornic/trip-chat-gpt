<template>
    <div>  
        <section class="hero">
            <div v-if="HomeDataPending">
                <p>Loading data</p>
            </div>
            <div v-else>
                <div class="content">
                    <h1>{{ data.homePage.title }}</h1>
                    <p>{{ data.homePage.subtitle }}</p>
                    <NuxtLink :to="{name: 'about'}" target="_blank">More informations</NuxtLink>
                </div>
                <div class="container-img">
                    <img :src="data.homePage.image.url" :alt="data.homePage.image.alt" :srcset="data.homePage.image.responsiveImage.scrSet">
                </div>
            </div>
        </section>
        <section class="destinations">
            <h2>{{ data.homePage.titleBestDestination }}</h2>
            <div v-if="destinationCategoryPending">
                <p>Loading data</p>
            </div>
            <div v-else>
                <BestDestinations :categoryId=dataDestinationCategory.category.id></BestDestinations>
            </div>
        </section>
        <section class="last-articles">
            <h2>{{ data.homePage.titleLastArticles }}</h2>
            <div v-if="blogCategoryPending">
                <p>Loading data</p>
            </div>
            <div v-else>
                <LastArticles :categoryId=dataBlogCategory.category.id></LastArticles>
            </div>
        </section>
    </div>
</template>

<script setup>
    import home from '@/cms/queries/home';
    import blogCategory from '@/cms/queries/category-id-by-slug';

    const object = ref();

    const { data, pending: HomeDataPending } = await useAsyncQuery(home)
     
    object.value = data;

    const seoTags = object._rawValue._rawValue.homePage._seoMetaTags;

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

    const { data: dataBlogCategory, pending: blogCategoryPending } = await useAsyncQuery(blogCategory, { slug: {eq : 'blog' } } );

    const { data: dataDestinationCategory, pending: destinationCategoryPending } = await useAsyncQuery(blogCategory, { slug: {eq : 'destinations' } } );

</script>