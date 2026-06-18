<template>
  <article class="info-card h-100">
    <div class="icon-box mb-3" aria-hidden="true">
      <i :class="icon"></i>
    </div>
    <h3 class="h5">{{ title }}</h3>
    <p class="mb-0">{{ description }}</p>
    <ul v-if="examples?.length" class="list-unstyled service-list mt-3 mb-0">
      <li v-for="example in examples" :key="example">
        <i class="bi bi-check2-circle" aria-hidden="true"></i>
        <span>{{ example }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'bi-circle' },
  examples: { type: Array, default: () => [] }
})
</script>
