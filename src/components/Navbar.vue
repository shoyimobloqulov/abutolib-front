<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <RouterLink to="/" class="flex items-center space-x-3 group">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Abutolib
            </span>
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <div class="sm:flex items-center space-x-2">
          <RouterLink 
            to="/" 
            :class="isActive('/') ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg font-semibold shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition'"
          >
            🏠 Bosh sahifa
          </RouterLink>
          <RouterLink 
            to="/about" 
            :class="isActive('/about') ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg font-semibold shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition'"
          >
            📖 Biz haqimizda
          </RouterLink>
          <RouterLink 
            to="/statistics" 
            :class="isActive('/statistics') ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg font-semibold shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition'"
          >
            📊 Statistika
          </RouterLink>
          <RouterLink 
            to="/contact" 
            :class="isActive('/contact') ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-lg font-semibold shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition'"
          >
            📞 Bog'lanish
          </RouterLink>
          <RouterLink 
            to="/login" 
            class="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg"
          >
            🔐 Kirish
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
        <RouterLink 
          to="/" 
          class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition mb-1"
          :class="{ 'bg-blue-100 text-blue-600 font-semibold': isActive('/') }"
          @click="toggleMenu"
        >
          🏠 Bosh sahifa
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition mb-1"
          :class="{ 'bg-blue-100 text-blue-600 font-semibold': isActive('/about') }"
          @click="toggleMenu"
        >
          📖 Biz haqimizda
        </RouterLink>
        <RouterLink 
          to="/statistics" 
          class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition mb-1"
          :class="{ 'bg-blue-100 text-blue-600 font-semibold': isActive('/statistics') }"
          @click="toggleMenu"
        >
          📊 Statistika
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition mb-1"
          :class="{ 'bg-blue-100 text-blue-600 font-semibold': isActive('/contact') }"
          @click="toggleMenu"
        >
          📞 Bog'lanish
        </RouterLink>
        <RouterLink 
          to="/login" 
          class="block py-3 px-4 mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold text-center shadow-lg"
          @click="toggleMenu"
        >
          🔐 Kirish
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isActive = (path) => {
  return route.path === path
}
</script>