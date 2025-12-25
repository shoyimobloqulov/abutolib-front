<template>
  <div class="login flex items-center justify-center min-h-[calc(100vh-200px)]">
    <div class="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Kirish</h1>
        <p class="text-gray-600">Hisobingizga kiring</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Login yoki Email</label>
          <input 
            v-model="loginForm.username"
            type="text" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Loginingizni kiriting"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Parol</label>
          <div class="relative">
            <input 
              v-model="loginForm.password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Parolingizni kiriting"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input 
              v-model="loginForm.remember"
              type="checkbox" 
              class="mr-2"
            />
            <span class="text-gray-700">Eslab qolish</span>
          </label>
          <a href="#" class="text-blue-600 hover:text-blue-700 text-sm">
            Parolni unutdingizmi?
          </a>
        </div>

        <button 
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Kirish
        </button>

        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {{ error }}
        </div>

        <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Muvaffaqiyatli kirildi!
        </div>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600">
          Hisobingiz yo'qmi? 
          <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">
            Ro'yxatdan o'tish
          </a>
        </p>
      </div>

      <!-- Social Login -->
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Yoki</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <span class="mr-2">📱</span>
            <span>Google</span>
          </button>
          <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <span class="mr-2">📘</span>
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = ref({
  username: '',
  password: '',
  remember: false
})

const showPassword = ref(false)
const error = ref('')
const success = ref(false)

const handleLogin = () => {
  error.value = ''
  
  // Simple validation
  if (loginForm.value.username && loginForm.value.password) {
    success.value = true
    
    setTimeout(() => {
      router.push('/')
    }, 1500)
  } else {
    error.value = 'Login va parolni to\'ldiring'
  }
}
</script>