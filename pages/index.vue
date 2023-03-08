<template>
    <div>
        <section class="hero">
            <div v-if="HomeDataPending">
                <p>Loading data</p>
            </div>
            <div v-else>
                <div class="content">
                    <h1>{{ dataHome.homePage.title }}</h1>
                    <p>{{ dataHome.homePage.subtitle }}</p>
                    <NuxtLink :to="{name: 'about'}" target="_blank">More informations</NuxtLink>
                </div>
                <div class="container-img">
                    <img :src="dataHome.homePage.image.url" :alt="dataHome.homePage.image.alt" :srcset="dataHome.homePage.image.responsiveImage.scrSet">
                </div>
            </div>
        </section>
        <section class="destinations">
            <h2>{{ dataHome.homePage.titleBestDestination }}</h2>
            <div v-if="destinationCategoryPending">
                <p>Loading data</p>
            </div>
            <div v-else>
                <BestDestinations :categoryId=dataDestinationCategory.category.id></BestDestinations>
            </div>
        </section>
        <section class="last-articles">
            <h2>{{ dataHome.homePage.titleLastArticles }}</h2>
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

    // const ref = ref();
    // console.log( ref );
    const { data: dataHome, pending: HomeDataPending } = await useLazyAsyncQuery(home)

    const { data: dataBlogCategory, pending: blogCategoryPending } = await useLazyAsyncQuery(blogCategory, { slug: {eq : 'blog' } } );

    const { data: dataDestinationCategory, pending: destinationCategoryPending } = await useLazyAsyncQuery(blogCategory, { slug: {eq : 'destinations' } } );

</script>