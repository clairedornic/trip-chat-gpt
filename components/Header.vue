<template>
    <header>
        <NuxtLink class="logo" to="/">
            <img :src="data.header.logo.url" :alt="data.header.logo.alt" :srcset="data.header.logo.responsiveImage.scrSet">
        </NuxtLink>
        <div class="container">
            <button :class="{ active: isActive }" @click="toggleActive" class="toggle-menu">
                <img class="open" src="../static/img/menu.png" alt="Click on this icon to open menu">
                <img class="close" src="../static/img/close_menu.png" alt="Click on this icon to close menu">
            </button>
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
        </div>
	</header>
</template>
<script setup>
    import header from '@/cms/queries/header';

    const { data: data, pending: postsPending } = await useAsyncQuery(header)
    const isActive = ref(false);

    function toggleActive() {
      isActive.value = !isActive.value;
    }
    
</script>