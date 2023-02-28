<template>
    <header>
		<NuxtLink class="logo" to="/">
            <img :src="data.header.logo.url" :alt="data.header.logo.alt">
        </NuxtLink>
		<nav>
			<ul>
                <template v-for="item_nav in data.header.navigationItems" :key="item_nav.id">
                    <li v-if="item_nav.link._modelApiKey === 'category' ">
                        <nuxt-link :to="{name: 'category-slug', params: {slug: item_nav.slug}}">{{ item_nav.title }}</nuxt-link>
                    </li>
                    <li v-else>
                        <nuxt-link :to="{name: 'slug', params: {slug: item_nav.slug}}">{{ item_nav.title }}</nuxt-link>
                    </li>
                </template>
            </ul>
		</nav>
	</header>
</template>
<script setup>
    import header from '@/cms/queries/header';

    const { data: data, pending: postsPending } = await useLazyAsyncQuery(header)
</script>