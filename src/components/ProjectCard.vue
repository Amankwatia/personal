<template>
  <article class="info-card project-card h-100">
    <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
      <div>
        <p class="card-kicker">{{ project.type }}</p>
        <h3 class="h5 mb-0">{{ project.title }}</h3>
      </div>
      <span class="status-badge">{{ project.status }}</span>
    </div>
    <p>{{ project.description }}</p>
    <div v-if="!compact" class="d-flex flex-wrap gap-2 mb-3" aria-label="Technologies">
      <span v-for="technology in project.technologies" :key="technology" class="skill-badge">{{ technology }}</span>
    </div>
    <template v-if="!compact">
      <p class="impact mb-4"><strong>Impact:</strong> {{ project.impact }}</p>
      <button type="button" class="btn btn-outline-primary btn-sm" disabled>Coming Soon</button>
    </template>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  compact: { type: Boolean, default: false }
})
</script>
