<template>
  <div class="about">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold mb-6 text-gray-800">Biz haqimizda</h1>
      
      <div class="prose max-w-none">
        <p class="text-lg text-gray-600 mb-4">
          Abutolib - zamonaviy kutubxona tizimi bo'lib, foydalanuvchilarga eng yaxshi xizmatlarni taqdim etishga intiladi.
        </p>

        <div class="grid md:grid-cols-2 gap-8 my-8">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-2xl font-bold mb-3 text-blue-800">Bizning maqsadimiz</h3>
            <p class="text-gray-700">
              Barcha foydalanuvchilarga qulay va zamonaviy kutubxona xizmatlarini taqdim etish, 
              bilim olish va rivojlanish uchun eng yaxshi sharoitlarni yaratish.
            </p>
          </div>

          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-2xl font-bold mb-3 text-green-800">Bizning qadriyatlarimiz</h3>
            <p class="text-gray-700">
              Sifatli xizmat, innovatsiya, halollik va foydalanuvchilarga g'amxo'rlik 
              bizning asosiy qadriyatlarimizdir.
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-4 text-gray-800">Bizning xizmatlarimiz</h2>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <span class="text-gray-700">Keng turdagi elektron va bosma kitoblar</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <span class="text-gray-700">24/7 onlayn kutubxona xizmati</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <span class="text-gray-700">Professional konsultatsiya va yo'riqnoma</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">✓</span>
            <span class="text-gray-700">Zamonaviy qidiruv tizimi</span>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mb-4 text-gray-800">Jamoa</h2>
        <p class="text-gray-600 mb-6">
          Bizning jamoamiz tajribali mutaxassislar va ishtiyoqli xodimlardan tashkil topgan. 
          Biz har bir foydalanuvchiga individual yondashuv va eng yaxshi xizmatni taqdim etamiz.
        </p>

        <div class="bg-gray-100 p-6 rounded-lg">
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Biz bilan bog'laning</h3>
          <p class="text-gray-700 mb-4">
            Savollaringiz yoki takliflaringiz bo'lsa, biz bilan bog'lanishdan tortinmang.
          </p>
          <RouterLink 
            to="/contact" 
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Bog'lanish
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>