<template>
  <div class="section-title" :class="{ 'text-center mx-auto': centered }">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  centered: { type: Boolean, default: false }
})
</script>
