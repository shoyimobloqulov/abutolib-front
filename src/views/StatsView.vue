<template>
  <div class="statistics">
    <div class="bg-white rounded-lg shadow-md p-8 mb-6">
      <h1 class="text-4xl font-bold mb-6 text-gray-800">Statistika</h1>
      
      <!-- Main Stats Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
          <div class="text-3xl mb-2">📚</div>
          <div class="text-4xl font-bold mb-1">{{ stats.books }}</div>
          <div class="text-blue-100">Kitoblar soni</div>
        </div>

        <div class="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
          <div class="text-3xl mb-2">👥</div>
          <div class="text-4xl font-bold mb-1">{{ stats.users }}</div>
          <div class="text-green-100">Foydalanuvchilar</div>
        </div>

        <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
          <div class="text-3xl mb-2">📖</div>
          <div class="text-4xl font-bold mb-1">{{ stats.activeReaders }}</div>
          <div class="text-purple-100">Faol o'quvchilar</div>
        </div>

        <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <div class="text-3xl mb-2">⭐</div>
          <div class="text-4xl font-bold mb-1">{{ stats.reviews }}</div>
          <div class="text-orange-100">Sharhlar</div>
        </div>
      </div>

      <!-- Monthly Stats -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Oylik statistika</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <div class="text-2xl font-bold text-gray-800">{{ monthlyStats.newBooks }}</div>
            <div class="text-gray-600">Yangi kitoblar</div>
          </div>
          <div class="border-l-4 border-green-500 bg-green-50 p-4 rounded">
            <div class="text-2xl font-bold text-gray-800">{{ monthlyStats.newUsers }}</div>
            <div class="text-gray-600">Yangi foydalanuvchilar</div>
          </div>
          <div class="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
            <div class="text-2xl font-bold text-gray-800">{{ monthlyStats.borrowedBooks }}</div>
            <div class="text-gray-600">O'qilgan kitoblar</div>
          </div>
        </div>
      </div>

      <!-- Popular Categories -->
      <div>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Mashhur kategoriyalar</h2>
        <div class="space-y-3">
          <div v-for="category in categories" :key="category.name" class="bg-gray-50 p-4 rounded-lg">
            <div class="flex justify-between items-center mb-2">
              <span class="font-semibold text-gray-800">{{ category.name }}</span>
              <span class="text-blue-600 font-bold">{{ category.count }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-500"
                :style="{ width: category.percentage + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref({
  books: 1234,
  users: 5678,
  activeReaders: 890,
  reviews: 2345
})

const monthlyStats = ref({
  newBooks: 45,
  newUsers: 123,
  borrowedBooks: 567
})

const categories = ref([
  { name: 'Badiiy adabiyot', count: 456, percentage: 90 },
  { name: 'Ilmiy adabiyot', count: 378, percentage: 75 },
  { name: 'Tarixiy kitoblar', count: 289, percentage: 58 },
  { name: 'Bolalar adabiyoti', count: 234, percentage: 47 },
  { name: 'Texnik adabiyot', count: 167, percentage: 33 }
])
</script>