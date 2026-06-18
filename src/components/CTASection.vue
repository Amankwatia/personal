<template>
  <section class="cta-section" :aria-labelledby="id">
    <div class="container">
      <div class="cta-panel">
        <div>
          <p v-if="eyebrow" class="section-eyebrow text-white-50">{{ eyebrow }}</p>
          <h2 :id="id">{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
        <RouterLink :to="to" class="btn btn-accent">
          {{ buttonText }}
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  id: { type: String, default: 'cta-title' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  text: { type: String, required: true },
  buttonText: { type: String, required: true },
  to: { type: [String, Object], default: '/contact' }
})
</script>
