<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <RouterLink to="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700">
            Abutolib
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <div class="md:flex space-x-6">
          <RouterLink 
            to="/" 
            :class="isActive('/') ? 'text-blue-600 font-semibold transition' : 'text-gray-700 hover:text-blue-600 transition font-medium'"
          >
            Bosh sahifa
          </RouterLink>
          <RouterLink 
            to="/about" 
            :class="isActive('/about') ? 'text-blue-600 font-semibold transition' : 'text-gray-700 hover:text-blue-600 transition font-medium'"
          >
            Biz haqimizda
          </RouterLink>
          <RouterLink 
            to="/statistics" 
            :class="isActive('/statistics') ? 'text-blue-600 font-semibold transition' : 'text-gray-700 hover:text-blue-600 transition font-medium'"
          >
            Statistika
          </RouterLink>
          <RouterLink 
            to="/contact" 
            :class="isActive('/contact') ? 'text-blue-600 font-semibold transition' : 'text-gray-700 hover:text-blue-600 transition font-medium'"
          >
            Bog'lanish
          </RouterLink>
          <RouterLink 
            to="/login" 
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Kirish
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden pb-4">
        <RouterLink 
          to="/" 
          class="block py-2 text-gray-700 hover:text-blue-600"
          @click="toggleMenu"
        >
          Bosh sahifa
        </RouterLink>
        <RouterLink 
          to="/about" 
          class="block py-2 text-gray-700 hover:text-blue-600"
          @click="toggleMenu"
        >
          Biz haqimizda
        </RouterLink>
        <RouterLink 
          to="/statistics" 
          class="block py-2 text-gray-700 hover:text-blue-600"
          @click="toggleMenu"
        >
          Statistika
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="block py-2 text-gray-700 hover:text-blue-600"
          @click="toggleMenu"
        >
          Bog'lanish
        </RouterLink>
        <RouterLink 
          to="/login" 
          class="block py-2 text-blue-600 font-semibold"
          @click="toggleMenu"
        >
          Kirish
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