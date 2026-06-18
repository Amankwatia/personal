<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">Software Solutions</p>
      <h1>{{ profile.studioName }}</h1>
      <p>
        I am building a small software solutions studio focused on practical AI agents, professional websites, and web applications for schools, small businesses, professionals, churches, organisations, and community institutions. Mobile app development for Android and iOS is part of the future growth plan.
      </p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="studio-services-title">
    <div class="container">
      <SectionTitle
        id="studio-services-title"
        title="Practical AI and web-based solutions"
        centered
      />
      <div class="row g-4">
        <div v-for="service in studioServices" :key="service.title" class="col-lg-6">
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :examples="service.examples"
          />
        </div>
      </div>
    </div>
  </section>

  <CTASection
    title="Need a website, AI agent, web app, or digital school system?"
    text="Share what you are trying to build and we can explore a practical starting point."
    button-text="Request a Consultation"
    to="/contact"
  />
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import CTASection from '../components/CTASection.vue'
import { profile } from '../data/profile'
import { studioServices } from '../data/services'
</script>
