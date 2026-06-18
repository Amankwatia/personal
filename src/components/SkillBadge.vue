<template>
  <span class="skill-badge">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true }
})
</script>
