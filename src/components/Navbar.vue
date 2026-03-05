<template>
  <nav class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
    <div class="container mx-auto px-4">
      <div class="flex h-20 items-center justify-between">
        
        <RouterLink to="/" class="flex items-center gap-2.5 shrink-0">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5V19.5M4.5 12H19.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M17 7L7 17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-black leading-none text-gray-900 uppercase">Abutolib</span>
            <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Test tizimi</span>
          </div>
        </RouterLink>

        <div class="nav-links hidden md:flex items-center gap-2">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            active-class="active-nav-link"
          >
            <component :is="link.icon" class="w-4.5 h-4.5" />
            {{ link.name }}
          </RouterLink>

          <div class="mx-2 h-6 w-[1px] bg-gray-200"></div>

          <RouterLink 
            to="/login" 
            class="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-md flex items-center gap-2"
          >
            <Lock class="w-4 h-4" />
            Kirish
          </RouterLink>
        </div>

        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="block p-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-600"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <div 
        v-if="isMenuOpen" 
        class="md:hidden flex flex-col gap-2 pb-6 pt-2"
      >
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          @click="isMenuOpen = false"
          class="flex items-center gap-4 p-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
          active-class="bg-blue-600 text-white shadow-lg"
        >
          <component :is="link.icon" class="w-5 h-5" />
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Home, Newspaper, BookMarked, BarChart3, Phone, Lock, Menu, X, BookOpen } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const navLinks = [
  { name: 'Bosh sahifa', path: '/', icon: Home },
  { name: 'Biz haqimizda', path: '/about', icon: BookMarked },
  { name: 'Statistika', path: '/statistics', icon: BarChart3 },
  { name: 'Yangiliklar', path: '/news', icon: Newspaper },
  { name: 'Fanlar', path: '/subjects', icon: BookOpen },
  { name: "Bog'lanish", path: '/contact', icon: Phone },
]
</script>

<style scoped>
@media (min-width: 768px) {
  .nav-links {
    display: flex !important;
  }
}

.active-nav-link {
  color: #2563eb !important; /* blue-600 */
  background-color: #eff6ff !important; /* blue-50 */
}
</style>