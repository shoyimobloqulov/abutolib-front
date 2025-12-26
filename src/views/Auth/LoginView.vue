<template>
  <div class="login min-h-[calc(100vh-200px)]">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <div class="flex items-center justify-center py-12 relative">
      <div class="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center px-4">
        
        <!-- Left side - Info -->
        <div class="hidden lg:block">
          <div class="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl">
            <div class="mb-8">
              <Rocket class="w-20 h-20 mb-6" strokeWidth={1.5} />
              <h2 class="text-4xl font-bold mb-4">Abutolib Test Platformasi</h2>
              <p class="text-xl text-blue-100 leading-relaxed">
                Bilimingizni sinang va professional natijalar oling
              </p>
            </div>

            <div class="space-y-6 mb-8">
              <div class="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition">
                <CheckCircle2 class="w-8 h-8 mr-4 flex-shrink-0 text-green-300" strokeWidth={1.5} />
                <div>
                  <div class="font-bold text-lg mb-1">500+ Test</div>
                  <div class="text-blue-100">Turli fanlar bo'yicha testlar</div>
                </div>
              </div>

              <div class="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition">
                <Zap class="w-8 h-8 mr-4 flex-shrink-0 text-yellow-300" strokeWidth={1.5} />
                <div>
                  <div class="font-bold text-lg mb-1">Darhol natija</div>
                  <div class="text-blue-100">Test tugashi bilanoq natijani oling</div>
                </div>
              </div>

              <div class="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition">
                <BarChart3 class="w-8 h-8 mr-4 flex-shrink-0 text-cyan-300" strokeWidth={1.5} />
                <div>
                  <div class="font-bold text-lg mb-1">Batafsil tahlil</div>
                  <div class="text-blue-100">Xatolaringizni tahlil qiling</div>
                </div>
              </div>
            </div>

            <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-3xl font-bold">10K+</div>
                  <div class="text-blue-200 text-sm">Foydalanuvchi</div>
                </div>
                <div>
                  <div class="text-3xl font-bold">98%</div>
                  <div class="text-blue-200 text-sm">Mamnunlik</div>
                </div>
                <div>
                  <div class="text-3xl font-bold">24/7</div>
                  <div class="text-blue-200 text-sm">Xizmat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right side - Login Form -->
        <div class="bg-white rounded-2xl shadow-2xl p-10 lg:p-12">
          <div class="text-center mb-8">
            <Lock class="w-16 h-16 text-blue-600 mx-auto mb-4" strokeWidth={1.5} />
            <h1 class="text-4xl font-bold text-gray-800 mb-2">Kirish</h1>
            <p class="text-gray-600 text-lg">Hisobingizga xush kelibsiz</p>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label class="block text-gray-700 font-bold mb-3 text-lg">Login yoki Email</label>
              <div class="relative">
                <Mail class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                <input 
                  v-model="loginForm.username"
                  type="text" 
                  required
                  class="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                  placeholder="Loginingizni kiriting"
                />
              </div>
            </div>

            <div>
              <label class="block text-gray-700 font-bold mb-3 text-lg">Parol</label>
              <div class="relative">
                <Lock class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                <input 
                  v-model="loginForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full pl-12 pr-14 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                  placeholder="Parolingizni kiriting"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Eye v-if="showPassword" class="w-5 h-5" strokeWidth={1.5} />
                  <EyeOff v-else class="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center cursor-pointer">
                <input 
                  v-model="loginForm.remember"
                  type="checkbox" 
                  class="mr-3 w-5 h-5 text-blue-600"
                />
                <span class="text-gray-700 font-semibold">Eslab qolish</span>
              </label>
              <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                <HelpCircle class="w-4 h-4" strokeWidth={1.5} />
                Parolni unutdingizmi?
              </a>
            </div>

            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Rocket class="w-6 h-6" strokeWidth={1.5} />
              Kirish
            </button>

            <div v-if="error" class="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl flex items-center">
              <AlertCircle class="w-6 h-6 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <span class="font-semibold">{{ error }}</span>
            </div>

            <div v-if="success" class="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl flex items-center">
              <CheckCircle2 class="w-6 h-6 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <span class="font-semibold">Muvaffaqiyatli kirildi! Bosh sahifaga yo'naltirilmoqda...</span>
            </div>
          </form>

          <div class="mt-8 text-center">
            <p class="text-gray-600 text-lg">
              Hisobingiz yo'qmi? 
              <a href="/register" class="text-blue-600 hover:text-blue-700 font-bold text-xl flex items-center justify-center gap-1">
                Ro'yxatdan o'tish
                <ArrowRight class="w-5 h-5" strokeWidth={1.5} />
              </a>
            </p>
          </div>

          <!-- Social Login -->
          <div class="mt-8">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t-2 border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-gray-500 font-semibold text-lg">Yoki</span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <button type="button" class="flex items-center justify-center px-6 py-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-blue-500 transition transform hover:scale-105 font-semibold text-lg group">
                <Chrome class="w-6 h-6 mr-3 text-red-500 group-hover:scale-110 transition" strokeWidth={1.5} />
                <span>Google</span>
              </button>
              <button type="button" class="flex items-center justify-center px-6 py-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-blue-500 transition transform hover:scale-105 font-semibold text-lg group">
                <Facebook class="w-6 h-6 mr-3 text-blue-600 group-hover:scale-110 transition" strokeWidth={1.5} />
                <span>Facebook</span>
              </button>
            </div>
          </div>

          <!-- Trust badges -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <div class="flex items-center justify-center gap-6 text-gray-500">
              <div class="flex flex-col items-center hover:text-blue-600 transition">
                <Shield class="w-6 h-6 mb-1" strokeWidth={1.5} />
                <span class="text-sm font-semibold">Xavfsiz</span>
              </div>
              <div class="flex flex-col items-center hover:text-blue-600 transition">
                <Zap class="w-6 h-6 mb-1" strokeWidth={1.5} />
                <span class="text-sm font-semibold">Tez</span>
              </div>
              <div class="flex flex-col items-center hover:text-blue-600 transition">
                <ThumbsUp class="w-6 h-6 mb-1" strokeWidth={1.5} />
                <span class="text-sm font-semibold">Ishonchli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Lock, Mail, Eye, EyeOff, HelpCircle, Rocket, ArrowRight, AlertCircle, 
  CheckCircle2, Zap, BarChart3, Shield, ThumbsUp, Chrome, Facebook 
} from 'lucide-vue-next'

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
  
  if (loginForm.value.username && loginForm.value.password) {
    success.value = true
    
    setTimeout(() => {
      router.push('/')
    }, 2000)
  } else {
    error.value = 'Login va parolni to\'ldiring'
  }
}
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>