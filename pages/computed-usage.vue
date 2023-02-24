<template>
    <h1>Computed usage</h1>
    <p>{{ showName() }}</p>
    <button @click="consoleName()">Console name</button>
    <p>{{ publishedBooksMessage }}</p>
</template>
<script setup>
    import { reactive, computed } from 'vue'

    const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
    })

    // a computed ref
    const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
    })

    // classic function
    const showName = () => 'Exemple'
    const consoleName = () => console.log('John doe')
</script>