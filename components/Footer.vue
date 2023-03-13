<template>
    <footer>
		<nav>
			<ul>
                <template v-for="item_nav in data.footer.navigationItemsFooter" :key="item_nav.id">
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
	</footer>
</template>
<script setup>
    import footer from '@/cms/queries/footer';

    const { data: data, pending: postsPending } = await useAsyncQuery(footer)


</script>