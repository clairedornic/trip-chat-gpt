<template>
    <h1>About</h1>
<div>
  {{ count }}
  <input v-model="inputVal" />
  <button @click="increment">+</button>
</div>
</template>

<script setup>
  import { useCounter } from '@/store/counter'
  import { storeToRefs } from 'pinia'

  const inputVal = ref('')

  const counterStore = useCounter()
  const { increment } = counterStore
  const { count } = storeToRefs(counterStore)
</script>