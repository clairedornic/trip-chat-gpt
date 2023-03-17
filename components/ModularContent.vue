<template>
    <div class="modular-content">
        <template v-for="contentElement in props.content.value.document.children">
            <template v-if="contentElement.type === 'heading' && contentElement.level === 2">
                <h2 v-for="title in contentElement.children">
                    {{ title.value }}
                </h2>
            </template>
            <template v-if="contentElement.type === 'heading' && contentElement.level === 3">
                <h3 v-for="title in contentElement.children">
                    {{ title.value }}
                </h3>
            </template>
            <template v-if="contentElement.type === 'heading' && contentElement.level === 4">
                <h4 v-for="title in contentElement.children">
                    {{ title.value }}
                </h4>
            </template>
            <template v-if="contentElement.type === 'paragraph'">
                <p v-for="paragraph in contentElement.children">
                    {{ paragraph.value }}
                </p>
            </template>
            <ol v-if="contentElement.type === 'list' && contentElement.style === 'numbered'">
                <li v-for="item in contentElement.children">
                    <template v-for="itemList in item.children">
                        <template v-for="itemListContent in itemList.children">
                            {{ itemListContent.value }}
                        </template>
                    </template>
                </li>
            </ol>
            <ul v-if="contentElement.type === 'list' && contentElement.style === 'bulleted'">
                <li v-for="item in contentElement.children">
                    <template v-for="itemList in item.children">
                        <template v-for="itemListContent in itemList.children">
                            {{ itemListContent.value }}
                        </template>
                    </template>
                </li>
            </ul>
        </template>
    </div>
    
</template>
<script setup>

    const props = defineProps({
        content : Object
    })

</script>