<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">Teaching & Leadership</p>
      <h1>ICT, Computing, digital literacy, and school leadership</h1>
      <p>Teaching and leadership work focused on practical technology use, responsible digital citizenship, student support, and school technology systems.</p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="teaching-profile-title">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-7">
          <SectionTitle id="teaching-profile-title" title="Teaching profile" />
          <p class="lead">
            Bright's teaching experience spans ICT, Computing, Mathematics, digital literacy, programming basics, MS Office, internet safety, responsible technology use, student mentoring, and computer laboratory support.
          </p>
        </div>
        <div class="col-lg-5">
          <article class="info-card">
            <h2 class="h5">Current work</h2>
            <ul class="list-unstyled service-list mb-0">
              <li>
                <i class="bi bi-check2-circle" aria-hidden="true"></i>
                <span>ICT / Computing Teacher at Presbyterian Senior High School, Berekum</span>
              </li>
              <li>
                <i class="bi bi-check2-circle" aria-hidden="true"></i>
                <span>Form Master at Presbyterian Senior High School, Berekum</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="section-padding section-light" aria-labelledby="timeline-title">
    <div class="container">
      <SectionTitle id="timeline-title" title="Previous experience timeline" centered />
      <div class="timeline">
        <article v-for="item in timeline" :key="`${item.role}-${item.period}`" class="info-card timeline-item">
          <h3>{{ item.role }}</h3>
          <p class="mb-1">{{ item.organization }}</p>
          <p class="text-muted mb-0">{{ item.period }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section-padding" aria-labelledby="strengths-title">
    <div class="container">
      <SectionTitle id="strengths-title" title="Teaching strengths" centered />
      <div class="row g-4">
        <div v-for="strength in teachingStrengths" :key="strength" class="col-md-6 col-lg-3">
          <article class="info-card h-100">
            <div class="icon-box mb-3" aria-hidden="true"><i class="bi bi-check2"></i></div>
            <h3 class="h6 mb-0">{{ strength }}</h3>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { teachingStrengths, timeline } from '../data/timeline'
</script>
