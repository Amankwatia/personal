<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">Research & Publications</p>
      <h1>Computer science research with practical education and cybersecurity focus</h1>
      <p>Research interests connect educational technology, cybersecurity, artificial intelligence, digital skills, and practical school systems.</p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="interests-title">
    <div class="container">
      <SectionTitle id="interests-title" title="Research interests" centered />
      <div class="row g-4">
        <div v-for="interest in researchInterests" :key="interest" class="col-md-6 col-lg-4">
          <article class="info-card h-100">
            <div class="icon-box mb-3" aria-hidden="true"><i class="bi bi-search"></i></div>
            <h2 class="h5 mb-0">{{ interest }}</h2>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light" aria-labelledby="publications-title">
    <div class="container">
      <SectionTitle
        id="publications-title"
        title="Peer-reviewed journal publications"
        centered
      />
      <div class="row g-4">
        <div v-for="publication in publications" :key="publication.doi" class="col-lg-6">
          <PublicationCard :publication="publication" />
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding" aria-labelledby="direction-title">
    <div class="container">
      <article class="info-card">
        <p class="section-eyebrow">Current academic direction</p>
        <h2 id="direction-title" class="h3">
          Currently pursuing MPhil Computer Science with growing research interests in artificial intelligence, cybersecurity, educational technology, and practical digital systems.
        </h2>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import PublicationCard from '../components/PublicationCard.vue'
import { publications, researchInterests } from '../data/publications'
</script>
