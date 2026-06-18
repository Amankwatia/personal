import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const AboutView = () => import('../views/AboutView.vue')
const TeachingView = () => import('../views/TeachingView.vue')
const ResearchView = () => import('../views/ResearchView.vue')
const ProjectsView = () => import('../views/ProjectsView.vue')
const SoftwareSolutionsView = () => import('../views/SoftwareSolutionsView.vue')
const ProgramsEventsView = () => import('../views/ProgramsEventsView.vue')
const ContactView = () => import('../views/ContactView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: AboutView, meta: { title: 'About' } },
  { path: '/teaching', name: 'teaching', component: TeachingView, meta: { title: 'Teaching & Leadership' } },
  { path: '/research', name: 'research', component: ResearchView, meta: { title: 'Research & Publications' } },
  { path: '/projects', name: 'projects', component: ProjectsView, meta: { title: 'Projects' } },
  {
    path: '/software-solutions',
    name: 'software-solutions',
    component: SoftwareSolutionsView,
    meta: { title: 'Software Solutions' }
  },
  {
    path: '/programs-events',
    name: 'programs-events',
    component: ProgramsEventsView,
    meta: { title: 'Programs & Events' }
  },
  { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: 'Page Not Found' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const pageTitle = to.meta.title ? `${to.meta.title} | Bright Osei Amankwatia` : 'Bright Osei Amankwatia'
  document.title = pageTitle
})

export default router
