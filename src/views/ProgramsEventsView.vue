<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">Programs & Events</p>
      <h1>ICT, AI, cybersecurity, and digital literacy programs</h1>
      <p>
        I support and participate in programs that promote ICT education, digital literacy, responsible technology use, cybersecurity awareness, educational innovation, and practical digital skills for learners, educators, schools, and community institutions.
      </p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="areas-title">
    <div class="container">
      <SectionTitle id="areas-title" title="Featured program areas" centered />
      <div class="row g-4">
        <div v-for="area in programAreas" :key="area.title" class="col-md-6 col-lg-4">
          <ServiceCard :title="area.title" :description="area.description" :icon="area.icon" />
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light" aria-labelledby="engagements-title">
    <div class="container">
      <SectionTitle id="engagements-title" title="Programs and events gallery" centered />
      <div class="program-gallery-grid">
        <ProgramGalleryCard
          v-for="(event, index) in engagements"
          :key="event.title"
          :event="event"
          :featured="index === 0"
        />
      </div>
    </div>
  </section>

  <section class="section-padding" aria-labelledby="future-title">
    <div class="container">
      <SectionTitle id="future-title" title="Planned future programs" centered />
      <div class="row g-4">
        <div v-for="program in futurePrograms" :key="program.title" class="col-md-6 col-lg-4">
          <EventCard :event="program" />
        </div>
      </div>
    </div>
  </section>

  <CTASection
    title="Interested in organising an ICT, AI, cybersecurity, or digital literacy program?"
    text="Invite me for a program for your school, organisation, or community."
    button-text="Invite Me for a Program"
    :to="{ path: '/contact', query: { enquiry: 'Program / Event invitation' } }"
  />
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import ServiceCard from '../components/ServiceCard.vue'
import EventCard from '../components/EventCard.vue'
import ProgramGalleryCard from '../components/ProgramGalleryCard.vue'
import CTASection from '../components/CTASection.vue'
import { engagements, futurePrograms, programAreas } from '../data/programsEvents'
</script>
