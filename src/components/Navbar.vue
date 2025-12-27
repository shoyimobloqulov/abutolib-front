<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3 group">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition">
            <BookOpen class="w-8 h-8 text-white" />
          </div>
          <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Abutolib
          </span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="xl:flex sm:hidden items-center gap-1">          
          <RouterLink 
            to="/" 
            class="px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            :class="isActive('/') && 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold'"
          >
            <Home class="w-5 h-5" />
            Bosh sahifa
          </RouterLink>

          <RouterLink 
            to="/about" 
            class="px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            :class="isActive('/about') && 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold'"
          >
            <BookMarked class="w-5 h-5" />
            Biz haqimizda
          </RouterLink>

          <RouterLink 
            to="/statistics" 
            class="px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            :class="isActive('/statistics') && 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold'"
          >
            <BarChart3 class="w-5 h-5" />
            Statistika
          </RouterLink>

          <RouterLink 
            to="/news" 
            class="px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            :class="isActive('/news') && 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold'"
          >
            <Newspaper class="w-5 h-5" />
            Yangiliklar
          </RouterLink>

          <RouterLink 
            to="/contact" 
            class="px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            :class="isActive('/contact') && 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md font-semibold'"
          >
            <Phone class="w-5 h-5" />
            Bog'lanish
          </RouterLink>

          <RouterLink 
            to="/login" 
            class="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Lock class="w-5 h-5" />
            Kirish
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="lg:hidden text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu v-if="!isMenuOpen" class="w-7 h-7" />
          <X v-else class="w-7 h-7" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
        <RouterLink 
          to="/" 
          class="block py-3 px-4 rounded-lg font-medium transition mb-1 flex items-center gap-3"
          :class="isActive('/') ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          @click="isMenuOpen = false"
        >
          <Home class="w-5 h-5" />
          Bosh sahifa
        </RouterLink>

        <RouterLink 
          to="/about" 
          class="block py-3 px-4 rounded-lg font-medium transition mb-1 flex items-center gap-3"
          :class="isActive('/about') ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          @click="isMenuOpen = false"
        >
          <BookMarked class="w-5 h-5" />
          Biz haqimizda
        </RouterLink>

        <RouterLink 
          to="/statistics" 
          class="block py-3 px-4 rounded-lg font-medium transition mb-1 flex items-center gap-3"
          :class="isActive('/statistics') ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          @click="isMenuOpen = false"
        >
          <BarChart3 class="w-5 h-5" />
          Statistika
        </RouterLink>

        <RouterLink 
          to="/news" 
          class="block py-3 px-4 rounded-lg font-medium transition mb-1 flex items-center gap-3"
          :class="isActive('/news') ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          @click="isMenuOpen = false"
        >
          <Newspaper class="w-5 h-5" />
          Yangiliklar
        </RouterLink>

        <RouterLink 
          to="/contact" 
          class="block py-3 px-4 rounded-lg font-medium transition mb-1 flex items-center gap-3"
          :class="isActive('/contact') ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          @click="isMenuOpen = false"
        >
          <Phone class="w-5 h-5" />
          Bog'lanish
        </RouterLink>
 
        <RouterLink 
          to="/login" 
          class="block py-3 px-4 mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold text-center shadow-lg flex items-center justify-center gap-2"
          @click="isMenuOpen = false"
        >
          <Lock class="w-5 h-5" />
          Kirish
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Home, Newspaper ,BookMarked, BarChart3, Phone, Lock, Menu, X, BookOpen } from 'lucide-vue-next'

const route = useRoute()
const isMenuOpen = ref(false)

const isActive = (path) => {
  return route.path === path
}
</script>