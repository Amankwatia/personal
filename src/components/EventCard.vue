<template>
  <article class="info-card h-100">
    <p v-if="event.type" class="card-kicker">{{ event.type }}</p>
    <h3 class="h5">{{ event.title }}</h3>
    <p>{{ event.description }}</p>
    <dl v-if="event.role || event.audience || event.status" class="event-meta mb-0">
      <div v-if="event.role">
        <dt>Role</dt>
        <dd>{{ event.role }}</dd>
      </div>
      <div v-if="event.audience">
        <dt>Audience</dt>
        <dd>{{ event.audience }}</dd>
      </div>
      <div v-if="event.status">
        <dt>Status</dt>
        <dd>{{ event.status }}</dd>
      </div>
    </dl>
  </article>
</template>

<script setup>
defineProps({
  event: { type: Object, required: true }
})
</script>
