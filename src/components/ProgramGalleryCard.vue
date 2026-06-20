<template>
  <article class="program-gallery-card" :class="{ 'program-gallery-card--featured': featured }">
    <div class="program-gallery-media">
      <img
        v-if="event.image"
        :src="event.image"
        :alt="event.imageAlt || event.title"
        :style="{ objectPosition: event.imagePosition || 'center center' }"
        width="960"
        height="640"
        loading="lazy"
        decoding="async"
      />
      <div v-else class="program-gallery-placeholder" aria-hidden="true">
        <i :class="event.icon || 'bi bi-images'"></i>
      </div>
      <div class="program-gallery-labels">
        <span v-if="event.type" class="program-gallery-type">{{ event.type }}</span>
        <span v-if="event.status" class="program-gallery-status">{{ event.status }}</span>
      </div>
    </div>

    <div class="program-gallery-content">
      <h3>{{ event.title }}</h3>
      <p>{{ event.description }}</p>
      <ul v-if="event.role || event.audience" class="program-gallery-details list-unstyled mb-0">
        <li v-if="event.role">
          <i class="bi bi-person-badge" aria-hidden="true"></i>
          <span>{{ event.role }}</span>
        </li>
        <li v-if="event.audience">
          <i class="bi bi-people" aria-hidden="true"></i>
          <span>{{ event.audience }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
defineProps({
  event: { type: Object, required: true },
  featured: { type: Boolean, default: false }
})
</script>
