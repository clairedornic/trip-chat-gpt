<template>
    <header>
		<NuxtLink class="logo" to="/">
            <img :src="data.header.logo.url" :alt="data.header.logo.alt" :srcset="data.header.logo.responsiveImage.scrSet">
        </NuxtLink>
		<nav>
			<ul>
                <template v-for="item_nav in data.header.navigationItems" :key="item_nav.id">
                    <li v-if="item_nav.slug === 'blog'">
                        <NuxtLink :to="{name: 'blog'}">{{ item_nav.title }}</NuxtLink>
                    </li>
                    <li v-else-if="item_nav.slug === 'destinations'">
                        <NuxtLink :to="{name: 'destinations'}">{{ item_nav.title }}</NuxtLink>
                    </li>
                    <li v-else>
                        <NuxtLink :to="{name: 'about'}">{{ item_nav.title }}</NuxtLink>
                    </li>
                </template>
            </ul>
		</nav>
	</header>
</template>
<script setup>
    import header from '@/cms/queries/header';

    const { data: data, pending: postsPending } = await useAsyncQuery(header)
</script>