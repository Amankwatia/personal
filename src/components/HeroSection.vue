<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center g-4 g-xl-5 hero-layout">
        <div class="col-lg-7 hero-copy">
          <p class="hero-eyebrow">Professional profile</p>
          <h1>{{ profile.name }}</h1>
          <p class="hero-title">{{ profile.mainTitle }}</p>
          <p class="hero-summary">{{ profile.shortSummary }}</p>
          <div class="hero-actions d-flex flex-wrap gap-2 gap-md-3 mt-4">
            <RouterLink to="/projects" class="btn btn-primary">View My Work</RouterLink>
            <RouterLink to="/contact" class="btn btn-accent">Contact Me</RouterLink>
            <a :href="profile.cvPath" class="btn btn-link-primary" download>
              <i class="bi bi-download" aria-hidden="true"></i>
              Download CV
            </a>
          </div>
        </div>
        <div class="col-lg-5 hero-media">
          <div class="hero-visual">
            <div class="hero-photo-frame">
              <img
                :src="profile.photo"
                :alt="`Professional portrait of ${profile.name}`"
                width="800"
                height="1000"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { profile } from '../data/profile'
</script>
