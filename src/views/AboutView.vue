<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">About</p>
      <h1>About Bright Osei Amankwatia</h1>
      <p>{{ profile.shortSummary }}</p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="overview-title">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <SectionTitle id="overview-title" title="Professional overview" />
          <p class="lead">{{ profile.aboutSummary }}</p>
          <div class="d-flex flex-wrap gap-2 mt-4">
            <a :href="profile.cvPath" class="btn btn-primary" download>
              <i class="bi bi-download" aria-hidden="true"></i>
              Download CV
            </a>
            <RouterLink to="/contact" class="btn btn-outline-primary">Contact</RouterLink>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="profile-photo-frame">
            <img
              :src="profile.photo"
              :alt="`Professional portrait of ${profile.name}`"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light" aria-labelledby="what-i-do-title">
    <div class="container">
      <SectionTitle id="what-i-do-title" title="What I do" centered />
      <div class="row g-4">
        <div v-for="item in whatIDo" :key="item.title" class="col-md-6 col-lg">
          <ServiceCard :title="item.title" :description="item.description" :icon="item.icon" />
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding" aria-labelledby="education-title">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <SectionTitle id="education-title" title="Academic background" />
          <div class="timeline">
            <article v-for="item in profile.education" :key="item.qualification" class="timeline-item">
              <h3>{{ item.qualification }}</h3>
              <p class="mb-1">{{ item.institution }}</p>
              <p class="text-muted mb-0">{{ item.period }}</p>
            </article>
          </div>
        </div>
        <div class="col-lg-6">
          <SectionTitle title="Professional development" />
          <ul class="list-unstyled service-list">
            <li v-for="item in profile.professionalDevelopment" :key="item">
              <i class="bi bi-award" aria-hidden="true"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light skills-section" aria-labelledby="skills-title">
    <div class="container">
      <SectionTitle id="skills-title" title="Skills and capabilities" centered />
      <div class="row g-4">
        <div v-for="group in skillGroups" :key="group.title" class="col-md-6 col-lg-4">
          <article class="info-card skill-group-card h-100">
            <h3 class="h5">{{ group.title }}</h3>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <SkillBadge v-for="skill in group.skills" :key="skill" :label="skill" />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding" aria-labelledby="philosophy-title">
    <div class="container">
      <div class="info-card">
        <p class="section-eyebrow">Working philosophy</p>
        <h2 id="philosophy-title" class="h3">{{ profile.philosophy }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import SkillBadge from '../components/SkillBadge.vue'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'

const whatIDo = [
  { title: 'Teach ICT and Computing', icon: 'bi-laptop', description: 'Classroom instruction in ICT, computing, and practical digital skills.' },
  { title: 'Support educational technology', icon: 'bi-easel2', description: 'Helping schools adopt useful digital tools and systems.' },
  { title: 'Conduct research and publish', icon: 'bi-journal-richtext', description: 'Research work in cybersecurity, education, and digital transformation.' },
  { title: 'Develop AI and web solutions', icon: 'bi-cpu', description: 'Building practical AI agents, websites, and web applications.' },
  { title: 'Facilitate ICT programs', icon: 'bi-people', description: 'Supporting ICT, AI, cybersecurity, and digital literacy programs.' }
]
</script>
