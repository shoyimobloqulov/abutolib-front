import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StatsView from '../views/StatsView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import NewsView from '@/views/News/NewsView.vue'
import NewsDetailView from '@/views/News/NewsDetailView.vue'
import SubjectsView from '@/views/Subjects/SubjectsView.vue'
import SubjectTestsView from '@/views/Subjects/SubjectTestsView.vue'
import QuizTestView from '@/views/QuizTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetailView
    },
    {
    path: '/subjects',
    name: 'subjects',
    component: SubjectsView
    },
    {
      path: '/subjects/:id/tests',
      name: 'subject-tests',
      component: SubjectTestsView
    },

    {
      path: '/test/:id/start',
      name: 'quiz-test',
      component: QuizTestView
    }
  ]
})

export default router