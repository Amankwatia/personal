<template>
  <HeroSection />

  <section class="section-padding home-plain-section" aria-labelledby="focus-title">
    <div class="container">
      <SectionTitle
        id="focus-title"
        title="Education, research, and practical technology"
        centered
      />
      <div class="row g-4">
        <div v-for="area in focusAreas" :key="area.title" class="col-md-6 col-lg-4">
          <ServiceCard :title="area.title" :description="area.description" :icon="area.icon" />
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light" aria-labelledby="about-preview-title">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <SectionTitle
            id="about-preview-title"
            title="A practical bridge between learning and digital transformation"
          />
          <RouterLink to="/about" class="btn btn-primary">Read More About Bright</RouterLink>
        </div>
        <div class="col-lg-5">
          <div class="info-card">
            <h3 class="h5 mb-3">Selected Achievements</h3>
            <ul class="list-unstyled service-list mb-0">
              <li v-for="achievement in achievements" :key="achievement">
                <i class="bi bi-check2-circle" aria-hidden="true"></i>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding home-plain-section" aria-labelledby="services-title">
    <div class="container">
      <SectionTitle
        id="services-title"
        title="Featured services"
        centered
      />
      <div class="row g-4">
        <div v-for="service in featuredServices" :key="service.title" class="col-md-6 col-lg-3">
          <ServiceCard :title="service.title" :description="service.description" :icon="service.icon" />
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light" aria-labelledby="projects-title">
    <div class="container">
      <SectionTitle
        id="projects-title"
        title="Featured projects"
        centered
      />
      <div class="row g-4">
        <div v-for="project in featuredProjects" :key="project.title" class="col-lg-4">
          <ProjectCard :project="project" compact />
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="/projects" class="btn btn-outline-primary">View All Projects</RouterLink>
      </div>
    </div>
  </section>

  <section class="section-padding home-plain-section home-programs-section" aria-labelledby="programs-preview-title">
    <div class="container">
      <div class="row align-items-center g-3 home-programs-layout">
        <div class="col-lg-8">
          <SectionTitle
            id="programs-preview-title"
            title="ICT, AI, cybersecurity, and digital literacy programs"
          />
          <p class="section-description mb-0">
            I support and facilitate programs in ICT education, digital literacy, cybersecurity awareness, AI in education, and educational technology.
          </p>
        </div>
        <div class="col-lg-4 text-lg-end">
          <RouterLink to="/programs-events" class="btn btn-primary">Explore Programs & Events</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <CTASection
    title="Ready to collaborate?"
    text="Ready to collaborate on ICT education, research, AI agents, websites, web applications, or digital skills programs?"
    button-text="Start a Conversation"
    to="/contact"
  />
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CTASection from '../components/CTASection.vue'
import { achievements, profile } from '../data/profile'
import { focusAreas, featuredServices } from '../data/services'
import { projects } from '../data/projects'

const featuredProjects = computed(() => projects.slice(0, 3))
</script>
