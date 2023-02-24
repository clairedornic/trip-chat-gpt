<template>
    <h1>Store usage</h1>
    <div>
        {{ count }}
        <button @click="increment">+</button>
    </div>
</template>

<script setup>
    import { useCounter } from '@/store/counter'
    import { storeToRefs } from 'pinia'

    definePageMeta({
        title: 'Store usage',
        path: '/store-usage'
    })

    const inputVal = ref('')

    const counterStore = useCounter()
    const { increment } = counterStore
    const { count } = storeToRefs(counterStore)
</script>