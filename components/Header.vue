<template>
    <header>
        <div v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div v-else>
            <h2>Blog results</h2>
            <ul>
                <li v-for="post in blogPosts.allBlogPosts" :key="post.id">
                    <nuxt-link :to="{name: 'blog-slug', params: {slug: post.blogSlug}}">{{ post.title }}</nuxt-link>
                </li>
            </ul>
        </div>
		<div class="logo">Logo</div>
		<nav>
			<a href="#" class="nav-link">Accueil</a>
			<a href="#" class="nav-link">Services</a>
			<a href="#" class="nav-link">A propos</a>
			<a href="#" class="nav-link">Contact</a>
		</nav>
	</header>
</template>
<script setup>
    import blog_post from '@/cms/queries/blog_post';

    const { data: blogPosts, pending: postsPending } = await useLazyAsyncQuery(blog_post)
</script>