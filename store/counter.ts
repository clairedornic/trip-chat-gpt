// store/filters.ts
import { defineStore } from 'pinia'

export const useCounter = defineStore('counterStore', () => {
  const count = ref(0)
  const name = ref('Eduardo')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
