<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl overflow-hidden mb-12 shadow-2xl mx-4 mt-4">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Text Part -->
        <div class="p-12 md:p-16">
          <div class="mb-4">
            <span class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
              Test Platformasi
            </span>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Abutolib Test Platformasi
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Zamonaviy online test tizimi - bilimingizni sinang, natijangizni tahlil qiling va rivojlang
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink 
              to="/login" 
              class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 text-center shadow-lg"
            >
              🚀 Testni boshlash
            </RouterLink>
            <RouterLink 
              to="/about" 
              class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition text-center"
            >
              📖 Batafsil ma'lumot
            </RouterLink>
          </div>

          <!-- Stats Mini -->
          <div class="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-blue-400">
            <div>
              <div class="text-3xl font-bold">10K+</div>
              <div class="text-blue-200 text-sm">Foydalanuvchi</div>
            </div>
            <div>
              <div class="text-3xl font-bold">500+</div>
              <div class="text-blue-200 text-sm">Test</div>
            </div>
            <div>
              <div class="text-3xl font-bold">98%</div>
              <div class="text-blue-200 text-sm">Mamnunlik</div>
            </div>
          </div>
        </div>

        <!-- Image Part -->
        <div class="relative h-full min-h-[500px] md:min-h-[600px] p-8">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
          <div class="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md mx-auto">
            <div class="bg-white rounded-2xl p-8 shadow-2xl transform hover:rotate-0 transition duration-300">
              <div class="text-center mb-6">
                <FileText class="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Test namunasi</h3>
                <p class="text-gray-600">Interaktiv va qulay interfeys</p>
              </div>
              <div class="space-y-3">
                <div class="bg-blue-50 p-3 rounded-lg flex items-center">
                  <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                  <div class="text-sm text-gray-700">Ko'p variantli savollar</div>
                </div>
                <div class="bg-green-50 p-3 rounded-lg flex items-center">
                  <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                  <div class="text-sm text-gray-700">Darhol natija olish</div>
                </div>
                <div class="bg-purple-50 p-3 rounded-lg flex items-center">
                  <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                  <div class="text-sm text-gray-700">Batafsil tahlil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="mb-12 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Nima uchun biz?</h2>
        <p class="text-xl text-gray-600">Platformamizning asosiy afzalliklari</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Target class="w-16 h-16 text-blue-600 mb-6" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Aniq natijalar</h3>
          <p class="text-gray-600 text-lg leading-relaxed">
            Har bir test uchun batafsil statistika va tahlil. O'z natijalaringizni kuzatib boring va taqqoslang.
          </p>
          <div class="mt-6 pt-6 border-t">
            <div class="flex items-center text-blue-600 font-semibold">
              <CheckCircle class="w-5 h-5 mr-2" />
              <span>Darhol natija</span>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <BookOpen class="w-16 h-16 text-green-600 mb-6" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Keng test bazasi</h3>
          <p class="text-gray-600 text-lg leading-relaxed">
            Turli mavzular bo'yicha 500+ dan ortiq test. Matematika, fizika, ingliz tili va boshqalar.
          </p>
          <div class="mt-6 pt-6 border-t">
            <div class="flex items-center text-green-600 font-semibold">
              <CheckCircle class="w-5 h-5 mr-2" />
              <span>Har hafta yangilanadi</span>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Zap class="w-16 h-16 text-purple-600 mb-6" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Tez va qulay</h3>
          <p class="text-gray-600 text-lg leading-relaxed">
            Mobil va kompyuterda bemalol ishlaydi. Istalgan joydan, istalgan vaqtda test topshiring.
          </p>
          <div class="mt-6 pt-6 border-t">
            <div class="flex items-center text-purple-600 font-semibold">
              <CheckCircle class="w-5 h-5 mr-2" />
              <span>24/7 mavjud</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-12 mb-12 mx-4 max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Bizning yutuqlarimiz</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Stat 1 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Users class="w-12 h-12 text-blue-600 mx-auto mb-3" strokeWidth={1.5} />
            <div class="text-5xl font-bold text-blue-600 mb-3">10,234</div>
            <div class="text-gray-600 text-lg font-semibold">Foydalanuvchilar</div>
            <div class="text-green-600 text-sm mt-2 flex items-center justify-center">
              <TrendingUp class="w-4 h-4 mr-1" />
              23% o'sgan
            </div>
          </div>
        </div>

        <!-- Stat 2 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <BookOpen class="w-12 h-12 text-green-600 mx-auto mb-3" strokeWidth={1.5} />
            <div class="text-5xl font-bold text-green-600 mb-3">567</div>
            <div class="text-gray-600 text-lg font-semibold">Testlar</div>
            <div class="text-green-600 text-sm mt-2 flex items-center justify-center">
              <TrendingUp class="w-4 h-4 mr-1" />
              45 yangi
            </div>
          </div>
        </div>

        <!-- Stat 3 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <FileText class="w-12 h-12 text-purple-600 mx-auto mb-3" strokeWidth={1.5} />
            <div class="text-5xl font-bold text-purple-600 mb-3">50K+</div>
            <div class="text-gray-600 text-lg font-semibold">Topshirilgan</div>
            <div class="text-green-600 text-sm mt-2">Umumiy soni</div>
          </div>
        </div>

        <!-- Stat 4 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Star class="w-12 h-12 text-orange-600 mx-auto mb-3" strokeWidth={1.5} fill="currentColor" />
            <div class="text-5xl font-bold text-orange-600 mb-3">98%</div>
            <div class="text-gray-600 text-lg font-semibold">Mamnunlik</div>
            <div class="text-green-600 text-sm mt-2">5★ reyting</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12 text-center shadow-2xl mx-4 mb-4">
      <h2 class="text-4xl font-bold mb-4">Tayyor misiz?</h2>
      <p class="text-xl mb-8 text-blue-100">
        Ro'yxatdan o'ting va testlarni boshlang. Bu mutlaqo bepul!
      </p>
      <RouterLink 
        to="/login" 
        class="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
      >
        Hoziroq boshlash
        <ArrowRight class="w-6 h-6" strokeWidth={1.5} />
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Target, BookOpen, Zap, Users, FileText, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-vue-next'
</script>

<style scoped>
/* Custom animations */
</style>