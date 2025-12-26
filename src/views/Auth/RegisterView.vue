<template>
  <div class="register min-h-[calc(100vh-200px)]">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <div class="flex items-center justify-center py-12 relative px-4">
      <div class="w-full max-w-2xl">
        <!-- Form Card -->
        <div class="bg-white rounded-2xl shadow-2xl p-10 lg:p-12">
          <div class="text-center mb-8">
            <UserPlus class="w-16 h-16 text-blue-600 mx-auto mb-4" strokeWidth={1.5} />
            <h1 class="text-4xl font-bold text-gray-800 mb-2">Ro'yxatdan o'tish</h1>
            <p class="text-gray-600 text-lg">Abutolib platformasiga qo'shiling va testlarni boshlang</p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-6">
            <!-- Step Indicator -->
            <div class="flex items-center justify-between mb-8">
              <div 
                v-for="step in 3" 
                :key="step"
                class="flex items-center flex-1"
              >
                <div 
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition',
                    currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'
                  ]"
                >
                  {{ step }}
                </div>
                <div 
                  v-if="step < 3"
                  :class="[
                    'flex-1 h-1 mx-2 rounded transition',
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                  ]"
                ></div>
              </div>
            </div>

            <!-- Step 1: Personal Information -->
            <div v-if="currentStep === 1" class="space-y-6 animate-fadeIn">
              <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <User class="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                Shaxsiy ma'lumotlar
              </h2>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Ism</label>
                <div class="relative">
                  <User class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.firstName"
                    type="text" 
                    required
                    class="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                    placeholder="Ismingizni kiriting"
                  />
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Familiya</label>
                <div class="relative">
                  <User class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.lastName"
                    type="text" 
                    required
                    class="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                    placeholder="Familiyangizni kiriting"
                  />
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Tug'ilgan sana</label>
                <div class="relative">
                  <Calendar class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.birthDate"
                    type="date" 
                    required
                    class="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                  />
                </div>
              </div>
            </div>

            <!-- Step 2: Account Information -->
            <div v-if="currentStep === 2" class="space-y-6 animate-fadeIn">
              <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Mail class="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                Hisob ma'lumotlari
              </h2>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Email</label>
                <div class="relative">
                  <Mail class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.email"
                    type="email" 
                    required
                    class="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Login</label>
                <div class="relative">
                  <User class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.username"
                    type="text" 
                    required
                    class="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                    placeholder="Loginingizni kiriting"
                  />
                  <div v-if="registerForm.username" class="mt-2 text-sm flex items-center gap-1">
                    <CheckCircle class="w-4 h-4 text-green-600" strokeWidth={2} />
                    <span class="text-green-600">Mavjud</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3: Password -->
            <div v-if="currentStep === 3" class="space-y-6 animate-fadeIn">
              <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Lock class="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                Parol o'rnatish
              </h2>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Parol</label>
                <div class="relative">
                  <Lock class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    class="w-full pl-12 pr-14 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                    placeholder="Kuchli parol kiriting"
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
                <!-- Password strength -->
                <div class="mt-3">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-sm font-semibold text-gray-700">Parol kuchli:</span>
                    <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        :class="[
                          'h-full transition-all',
                          passwordStrength === 'weak' ? 'w-1/3 bg-red-500' :
                          passwordStrength === 'medium' ? 'w-2/3 bg-yellow-500' :
                          'w-full bg-green-500'
                        ]"
                      ></div>
                    </div>
                  </div>
                  <p :class="['text-sm', passwordStrength === 'weak' ? 'text-red-600' : passwordStrength === 'medium' ? 'text-yellow-600' : 'text-green-600']">
                    {{ passwordStrengthText }}
                  </p>
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-bold mb-3 text-lg">Parolni tasdiqlash</label>
                <div class="relative">
                  <Lock class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" strokeWidth={1.5} />
                  <input 
                    v-model="registerForm.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    required
                    class="w-full pl-12 pr-14 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
                    placeholder="Parolni qayta kiriting"
                  />
                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <Eye v-if="showConfirmPassword" class="w-5 h-5" strokeWidth={1.5} />
                    <EyeOff v-else class="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>
                <div v-if="registerForm.confirmPassword" class="mt-2 text-sm flex items-center gap-1">
                  <CheckCircle v-if="registerForm.password === registerForm.confirmPassword" class="w-4 h-4 text-green-600" strokeWidth={2} />
                  <AlertCircle v-else class="w-4 h-4 text-red-600" strokeWidth={2} />
                  <span :class="registerForm.password === registerForm.confirmPassword ? 'text-green-600' : 'text-red-600'">
                    {{ registerForm.password === registerForm.confirmPassword ? 'Mos keladi' : 'Mos kelmaydi' }}
                  </span>
                </div>
              </div>

              <!-- Terms & Conditions -->
              <label class="flex items-start cursor-pointer bg-blue-50 p-4 rounded-xl">
                <input 
                  v-model="registerForm.agreeTerms"
                  type="checkbox" 
                  required
                  class="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
                />
                <span class="text-gray-700">
                  Men <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">shartlar va shartlarga</a> va 
                  <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">maxfiylik siyosatiga</a> roziman
                </span>
              </label>
            </div>

            <!-- Error Message -->
            <div v-if="error" class="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl flex items-center">
              <AlertCircle class="w-6 h-6 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <span class="font-semibold">{{ error }}</span>
            </div>

            <!-- Success Message -->
            <div v-if="success" class="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl flex items-center">
              <CheckCircle2 class="w-6 h-6 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <span class="font-semibold">Ro'yxatdan muvaffaqiyatli o'tdingiz! Qayta yo'naltirilmoqda...</span>
            </div>

            <!-- Buttons -->
            <div class="flex gap-4 pt-6">
              <button 
                v-if="currentStep > 1"
                type="button"
                @click="currentStep--"
                class="flex-1 bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ArrowLeft class="w-5 h-5" strokeWidth={1.5} />
                Orqaga
              </button>
              
              <button 
                v-if="currentStep < 3"
                type="button"
                @click="currentStep++"
                class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Keyingi
                <ArrowRight class="w-5 h-5" strokeWidth={1.5} />
              </button>

              <button 
                v-if="currentStep === 3"
                type="submit"
                class="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <CheckCircle2 class="w-5 h-5" strokeWidth={1.5} />
                Ro'yxatdan o'tish
              </button>
            </div>
          </form>

          <!-- Login Link -->
          <div class="mt-8 text-center border-t pt-8">
            <p class="text-gray-600 text-lg">
              Allaqachon hisobingiz bormi? 
              <RouterLink to="/login" class="text-blue-600 hover:text-blue-700 font-bold">
                Kirish →
              </RouterLink>
            </p>
          </div>

          <!-- Social Register -->
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

          <!-- Trust Badges -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <div class="flex items-center justify-center gap-6 text-gray-500">
              <div class="flex flex-col items-center hover:text-blue-600 transition">
                <Shield class="w-6 h-6 mb-1" strokeWidth={1.5} />
                <span class="text-sm font-semibold">Xavfsiz</span>
              </div>
              <div class="flex flex-col items-center hover:text-blue-600 transition">
                <Lock class="w-6 h-6 mb-1" strokeWidth={1.5} />
                <span class="text-sm font-semibold">Shifrlangan</span>
              </div>
              <div class="flex flex-col items-center hover:text-blue-600 transition">
                <CheckCircle2 class="w-6 h-6 mb-1" strokeWidth={1.5} />
                <span class="text-sm font-semibold">Tasdiqlangan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  UserPlus, User, Mail, Calendar, Lock, Eye, EyeOff, AlertCircle,
  CheckCircle, CheckCircle2, ArrowLeft, ArrowRight, Chrome, Facebook,
  Shield
} from 'lucide-vue-next'

const router = useRouter()

const currentStep = ref(1)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const registerForm = ref({
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const error = ref('')
const success = ref(false)

const passwordStrength = computed(() => {
  const pwd = registerForm.value.password
  if (pwd.length < 6) return 'weak'
  if (pwd.length < 12) return 'medium'
  return 'strong'
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  return strength === 'weak' ? 'Zaif parol' : 
         strength === 'medium' ? 'O\'rtacha parol' : 
         'Kuchli parol'
})

const handleRegister = () => {
  error.value = ''
  
  if (!registerForm.value.agreeTerms) {
    error.value = 'Shartlarni qabul qilishingiz kerak'
    return
  }
  
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    error.value = 'Parollar mos kelmaydi'
    return
  }
  
  success.value = true
  
  setTimeout(() => {
    router.push('/login')
  }, 2000)
}
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>