<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved, or the link may be incomplete.</p>
      <div class="d-flex flex-wrap gap-3 mt-4">
        <RouterLink to="/" class="btn btn-primary">Back to Home</RouterLink>
        <RouterLink to="/contact" class="btn btn-outline-primary">Contact</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
