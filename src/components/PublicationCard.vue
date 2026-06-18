<template>
  <article class="publication-card">
    <p class="mb-3">{{ publication.citation }}</p>
    <a :href="publication.doi" target="_blank" rel="noopener noreferrer" class="publication-link">
      <i class="bi bi-link-45deg" aria-hidden="true"></i>
      DOI
    </a>
  </article>
</template>

<script setup>
defineProps({
  publication: { type: Object, required: true }
})
</script>
