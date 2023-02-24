<template>
    <h1>Style usage</h1>
    
    <div class="image">
        <img src="~assets/chat.jpg" alt="chat" />
    </div>

    <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>

</template>

<script setup>
    const isActive = ref(true)
    const hasError = ref(false)

</script>

<style scoped>
.image img {
    width: 100px;
}
</style>