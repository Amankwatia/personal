<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="d-flex align-items-center gap-2 mb-3">
            <span class="brand-mark footer-mark" aria-hidden="true">{{ profile.initials }}</span>
            <strong>{{ profile.name }}</strong>
          </div>
          <p class="footer-muted">{{ profile.mainTitle }}</p>
          <p class="footer-muted">Built with Vue, Bootstrap, and a passion for practical digital transformation.</p>
          <a :href="profile.cvPath" class="footer-link" download>
            <i class="bi bi-download" aria-hidden="true"></i>
            Download CV
          </a>
        </div>
        <div class="col-6 col-lg-2">
          <h2 class="footer-heading">Quick Links</h2>
          <ul class="list-unstyled footer-list">
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/teaching">Teaching</RouterLink></li>
            <li><RouterLink to="/research">Research</RouterLink></li>
            <li><RouterLink to="/projects">Projects</RouterLink></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h2 class="footer-heading">Services</h2>
          <ul class="list-unstyled footer-list">
            <li><RouterLink to="/software-solutions">AI Agents</RouterLink></li>
            <li><RouterLink to="/software-solutions">Websites</RouterLink></li>
            <li><RouterLink to="/software-solutions">Web Applications</RouterLink></li>
            <li><RouterLink to="/programs-events">Programs & Events</RouterLink></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h2 class="footer-heading">Contact</h2>
          <a class="footer-link" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <div class="social-links mt-3">
            <a
              v-for="social in profile.socialLinks"
              :key="social.label"
              :href="social.url"
              :aria-label="social.ariaLabel"
              class="social-link"
            >
              <i :class="social.icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; {{ currentYear }} {{ profile.name }}. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()
</script>
