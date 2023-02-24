<template>
    <section class="hero">
        <div class="content">
            <h1>{{ homePage.title }}</h1>
            <p>{{ homePage.subtitle }}</p>
            <p>{{ homePage.subtitle }}</p>
            <NuxtLink to="/about">About page</NuxtLink>
        </div>
       
    </section>
    {{ homePage }}
    <ul>
        <li><NuxtLink to="/about">About page</NuxtLink></li>
        <li><NuxtLink to="/store-usage">Storage usage</NuxtLink></li>
        <li><NuxtLink to="/computed-usage">Computed usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'router-page'}">Router usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'dynamic-router-page', params: {slug: 'admin'}}">Dynamic router usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'blog-slug', params: {slug: 'test'}}">Blog usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'fetch-usage'}">Fetch usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'dato-fetch'}">Dato usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'style-usage'}">Style usage</NuxtLink></li>
    </ul>
    <h1>Home page</h1>

    <AppInfo>
        Page de référence vers tous les éléments vu en cours
    </AppInfo>
</template>

<script setup>
    import home from '@/cms/queries/home';

    definePageMeta({
        layout: 'layout-2'
    })

    const { data: homePage, pending: postsPending } = await useLazyAsyncQuery(home)
</script>