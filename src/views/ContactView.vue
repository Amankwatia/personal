<template>
  <header class="page-header">
    <div class="container">
      <p class="section-eyebrow">Contact</p>
      <h1>Start a conversation</h1>
      <p>Use the form or email directly for websites, web applications, AI agents, school digital systems, programs, workshops, or research collaboration.</p>
    </div>
  </header>

  <section class="section-padding" aria-labelledby="contact-title">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-5">
          <SectionTitle id="contact-title" title="Professional enquiries" />
          <p>Email is the best first contact channel.</p>
          <a class="h5 d-inline-flex align-items-center gap-2 text-decoration-none" :href="`mailto:${profile.email}`">
            <i class="bi bi-envelope" aria-hidden="true"></i>
            {{ profile.email }}
          </a>
          <div class="social-links mt-4">
            <a
              v-for="social in profile.socialLinks"
              :key="social.label"
              :href="social.url"
              :aria-label="social.ariaLabel"
              class="social-link text-dark border"
            >
              <i :class="social.icon" aria-hidden="true"></i>
            </a>
          </div>
          <div class="mt-4">
            <a :href="profile.cvPath" class="btn btn-outline-primary" download>
              <i class="bi bi-download" aria-hidden="true"></i>
              Download CV
            </a>
          </div>
        </div>
        <div class="col-lg-7">
          <form class="contact-panel p-4 p-md-5" @submit.prevent="submitMailto">
            <!-- Add a Formspree endpoint later by replacing the submit handler with an action URL. -->
            <div class="row g-3">
              <div class="col-md-6">
                <label for="fullName" class="form-label">Full name</label>
                <input id="fullName" v-model="form.name" type="text" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email address</label>
                <input id="email" v-model="form.email" type="email" class="form-control" required />
              </div>
              <div class="col-12">
                <label for="enquiryType" class="form-label">Enquiry type</label>
                <select id="enquiryType" v-model="form.enquiry" class="form-select" required>
                  <option v-for="option in enquiryOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" v-model="form.message" class="form-control" rows="6" required></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Send via Email
                  <i class="bi bi-envelope-arrow-up" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import SectionTitle from '../components/SectionTitle.vue'
import { profile } from '../data/profile'

const route = useRoute()

const enquiryOptions = [
  'Website development',
  'Web application',
  'AI agent',
  'School digital system',
  'ICT training',
  'Program / Event invitation',
  'ICT workshop',
  'Cybersecurity awareness session',
  'AI in education training',
  'Research collaboration',
  'Other'
]

const form = reactive({
  name: '',
  email: '',
  enquiry: 'Website development',
  message: ''
})

watchEffect(() => {
  if (route.query.enquiry && enquiryOptions.includes(route.query.enquiry)) {
    form.enquiry = route.query.enquiry
  }
})

function submitMailto() {
  const subject = encodeURIComponent(`${form.enquiry} enquiry from ${form.name}`)
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nEnquiry type: ${form.enquiry}\n\n${form.message}`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>
