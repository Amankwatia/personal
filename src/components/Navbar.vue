<template>
  <nav class="navbar navbar-expand-lg site-navbar" aria-label="Primary navigation" @keydown.esc="closeMenu">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center" to="/" :aria-label="`${profile.name} home`">
        <span class="brand-mark" aria-hidden="true">{{ profile.initials }}</span>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="primaryNav"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="primaryNav" class="navbar-collapse" :class="{ 'is-open': isOpen }">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li v-for="link in links" :key="link.to" class="nav-item">
            <RouterLink class="nav-link" :to="link.to" @click="closeMenu">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { profile } from '../data/profile'

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Teaching', to: '/teaching' },
  { label: 'Research', to: '/research' },
  { label: 'Projects', to: '/projects' },
  { label: 'Software Solutions', to: '/software-solutions' },
  { label: 'Programs & Events', to: '/programs-events' },
  { label: 'Contact', to: '/contact' }
]
</script>
