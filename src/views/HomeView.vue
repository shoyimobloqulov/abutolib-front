<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-12 shadow-2xl mx-2 sm:mx-4 mt-2 sm:mt-4">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        <!-- Text Part -->
        <div class="p-6 sm:p-8 md:p-12 lg:p-16">
          <div class="mb-3 md:mb-4">
            <span class="bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold inline-block">
              Test Platformasi
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Abutolib Test Platformasi
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 leading-relaxed">
            Zamonaviy online test tizimi - bilimingizni sinang, natijangizni tahlil qiling va rivojlang
          </p>
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
            <RouterLink 
              to="/login" 
              class="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
            >
              <Rocket :size="20" class="md:w-6 md:h-6" />
              Testni boshlash
            </RouterLink>
            
            <RouterLink 
              to="/about" 
              class="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-blue-600 transition"
            >
              <BookOpen :size="20" class="md:w-6 md:h-6" />
              Batafsil ma'lumot
            </RouterLink>
          </div>

          <!-- Stats Mini -->
          <div class="grid grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-blue-400">
            <div>
              <div class="text-2xl md:text-3xl font-bold">10K+</div>
              <div class="text-blue-200 text-xs md:text-sm">Foydalanuvchi</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-bold">500+</div>
              <div class="text-blue-200 text-xs md:text-sm">Test</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-bold">98%</div>
              <div class="text-blue-200 text-xs md:text-sm">Mamnunlik</div>
            </div>
          </div>
        </div>

        <!-- Image Part -->
        <div class="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-4 sm:p-6 md:p-8">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
          <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto">
            <div class="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl transform hover:rotate-0 transition duration-300">
              <div class="text-center mb-4 md:mb-6">
                <FileText class="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-3 md:mb-4" />
                <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-2">Test namunasi</h3>
                <p class="text-sm md:text-base text-gray-600">Interaktiv va qulay interfeys</p>
              </div>
              <div class="space-y-2 md:space-y-3">
                <div class="bg-blue-50 p-2.5 md:p-3 rounded-lg flex items-center">
                  <div class="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2 md:mr-3 text-sm md:text-base">1</div>
                  <div class="text-xs md:text-sm text-gray-700">Ko'p variantli savollar</div>
                </div>
                <div class="bg-green-50 p-2.5 md:p-3 rounded-lg flex items-center">
                  <div class="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-2 md:mr-3 text-sm md:text-base">2</div>
                  <div class="text-xs md:text-sm text-gray-700">Darhol natija olish</div>
                </div>
                <div class="bg-purple-50 p-2.5 md:p-3 rounded-lg flex items-center">
                  <div class="w-7 h-7 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-2 md:mr-3 text-sm md:text-base">3</div>
                  <div class="text-xs md:text-sm text-gray-700">Batafsil tahlil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="mb-6 md:mb-12 px-2 sm:px-4 max-w-7xl mx-auto">
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Nima uchun biz?</h2>
        <p class="text-base md:text-xl text-gray-600">Platformamizning asosiy afzalliklari</p>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <!-- Feature 1 -->
        <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <Target class="w-12 h-12 md:w-16 md:h-16 text-blue-600 mb-4 md:mb-6" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Aniq natijalar</h3>
          <p class="text-gray-600 text-sm md:text-lg leading-relaxed">
            Har bir test uchun batafsil statistika va tahlil. O'z natijalaringizni kuzatib boring va taqqoslang.
          </p>
          <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
            <div class="flex items-center text-blue-600 font-semibold text-sm md:text-base">
              <CheckCircle class="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span>Darhol natija</span>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <BookOpen class="w-12 h-12 md:w-16 md:h-16 text-green-600 mb-4 md:mb-6" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Keng test bazasi</h3>
          <p class="text-gray-600 text-sm md:text-lg leading-relaxed">
            Turli mavzular bo'yicha 500+ dan ortiq test. Matematika, fizika, ingliz tili va boshqalar.
          </p>
          <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
            <div class="flex items-center text-green-600 font-semibold text-sm md:text-base">
              <CheckCircle class="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span>Har hafta yangilanadi</span>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
          <Zap class="w-12 h-12 md:w-16 md:h-16 text-purple-600 mb-4 md:mb-6" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Tez va qulay</h3>
          <p class="text-gray-600 text-sm md:text-lg leading-relaxed">
            Mobil va kompyuterda bemalol ishlaydi. Istalgan joydan, istalgan vaqtda test topshiring.
          </p>
          <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
            <div class="flex items-center text-purple-600 font-semibold text-sm md:text-base">
              <CheckCircle class="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span>24/7 mavjud</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 mb-6 md:mb-12 mx-2 sm:mx-4 max-w-7xl lg:mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Bizning yutuqlarimiz</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <!-- Stat 1 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Users class="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 md:mb-3" strokeWidth={1.5} />
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 md:mb-3">10K+</div>
            <div class="text-gray-600 text-sm md:text-lg font-semibold">Foydalanuvchilar</div>
            <div class="text-green-600 text-xs md:text-sm mt-1 md:mt-2 flex items-center justify-center">
              <TrendingUp class="w-3 h-3 md:w-4 md:h-4 mr-1" />
              23% o'sgan
            </div>
          </div>
        </div>

        <!-- Stat 2 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <BookOpen class="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-2 md:mb-3" strokeWidth={1.5} />
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 md:mb-3">567</div>
            <div class="text-gray-600 text-sm md:text-lg font-semibold">Testlar</div>
            <div class="text-green-600 text-xs md:text-sm mt-1 md:mt-2 flex items-center justify-center">
              <TrendingUp class="w-3 h-3 md:w-4 md:h-4 mr-1" />
              45 yangi
            </div>
          </div>
        </div>

        <!-- Stat 3 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <FileText class="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-2 md:mb-3" strokeWidth={1.5} />
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-2 md:mb-3">50K+</div>
            <div class="text-gray-600 text-sm md:text-lg font-semibold">Topshirilgan</div>
            <div class="text-green-600 text-xs md:text-sm mt-1 md:mt-2">Umumiy soni</div>
          </div>
        </div>

        <!-- Stat 4 -->
        <div class="text-center">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Star class="w-10 h-10 md:w-12 md:h-12 text-orange-600 mx-auto mb-2 md:mb-3" strokeWidth={1.5} fill="currentColor" />
            <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-2 md:mb-3">98%</div>
            <div class="text-gray-600 text-sm md:text-lg font-semibold">Mamnunlik</div>
            <div class="text-green-600 text-xs md:text-sm mt-1 md:mt-2">5★ reyting</div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWS SECTION - Yangi qo'shilgan -->
    <NewsSection />

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-2xl mx-2 sm:mx-4 mb-2 sm:mb-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Tayyor misiz?</h2>
      <p class="text-base md:text-xl mb-6 md:mb-8 text-blue-100">
        Ro'yxatdan o'ting va testlarni boshlang. Bu mutlaqo bepul!
      </p>
      <RouterLink 
        to="/login" 
        class="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 md:px-12 md:py-4 rounded-lg font-bold text-lg md:text-xl hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
      >
        Hoziroq boshlash
        <ArrowRight class="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Rocket, Target, BookOpen, Zap, Users, FileText, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-vue-next'
import NewsSection from '@/components/NewsSection.vue'
</script>