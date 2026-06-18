<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">Projects / Portfolio</p>
      <h1>Educational technology, teaching innovation, and software concepts</h1>
      <p>Selected work showing practical digital systems, classroom problem-solving, and emerging AI/web solution ideas.</p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="projects-list-title">
    <div class="container">
      <SectionTitle id="projects-list-title" title="Initial projects" centered />
      <div class="row g-4">
        <div v-for="project in projects" :key="project.title" class="col-md-6">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>
