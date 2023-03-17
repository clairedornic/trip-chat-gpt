<template>
    <main class="single">
        <div class="hero">
            <div class="container-img">
                <img 
                    :src="data.article.image.responsiveImage.src" 
                    :alt="data.article.image.responsiveImage.alt" 
                    :srcset="data.article.image.responsiveImage.scrSet"
                    :sizes="data.article.image.responsiveImage.sizes"
                    :width="data.article.image.responsiveImage.width"
                    :height="data.article.image.responsiveImage.height"
                    :title="data.article.image.responsiveImage.title"
                    >
            </div>
            <div class="content">
                <span>{{ formattedDate( data.article._createdAt ) }}</span>
                <h1>{{ data.article.title }}</h1>
                <p>{{ data.article.subtitle }}</p>
            </div>
        </div>
        <div class="content container-section">
            <ModularContent :content=data.article.content></ModularContent>
        </div>
    </main>
</template>

<script setup>
    import article from '@/cms/queries/article';

    function formattedDate(date) {
      const newDate = new Date(date);
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear().toString().slice(-2);
      return `${day}/${month < 10 ? "0" : ""}${month}/${year}`;
    }

    const route = useRoute()
    let slug = route.params.slug
    const object = ref();

    const { data, pending: postsPending } = await useAsyncQuery(article, { slug: {eq : slug } } );

    object.value = data;

    const seoTags = object._rawValue._rawValue.article._seoMetaTags;

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