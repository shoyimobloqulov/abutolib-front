<template>
  <div class="statistics">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl p-12 md:p-16 mb-12 shadow-2xl">
      <div class="max-w-4xl mx-auto text-center">
        <div class="text-6xl mb-6">📊</div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Statistika</h1>
        <p class="text-xl md:text-2xl text-pink-100 leading-relaxed">
          Platformamizning to'liq statistik ma'lumotlari va yutuqlari
        </p>
      </div>
    </section>

    <!-- Main Stats - Super Katta -->
    <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div class="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
        <div class="text-5xl mb-4">📚</div>
        <div class="text-6xl font-bold mb-2">{{ stats.books }}</div>
        <div class="text-blue-100 text-xl font-semibold mb-4">Testlar soni</div>
        <div class="flex items-center text-blue-200">
          <span class="mr-2">📈</span>
          <span>+45 yangi test</span>
        </div>
      </div>

      <div class="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
        <div class="text-5xl mb-4">👥</div>
        <div class="text-6xl font-bold mb-2">{{ stats.users.toLocaleString() }}</div>
        <div class="text-green-100 text-xl font-semibold mb-4">Foydalanuvchilar</div>
        <div class="flex items-center text-green-200">
          <span class="mr-2">🎉</span>
          <span>+234 bugun</span>
        </div>
      </div>

      <div class="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
        <div class="text-5xl mb-4">📖</div>
        <div class="text-6xl font-bold mb-2">{{ stats.activeReaders.toLocaleString() }}</div>
        <div class="text-purple-100 text-xl font-semibold mb-4">Faol o'quvchilar</div>
        <div class="flex items-center text-purple-200">
          <span class="mr-2">⚡</span>
          <span>Onlayn hozir</span>
        </div>
      </div>

      <div class="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
        <div class="text-5xl mb-4">⭐</div>
        <div class="text-6xl font-bold mb-2">{{ stats.reviews.toLocaleString() }}</div>
        <div class="text-orange-100 text-xl font-semibold mb-4">Umumiy baholash</div>
        <div class="flex items-center text-orange-200">
          <span class="mr-2">⭐⭐⭐⭐⭐</span>
          <span>4.9/5</span>
        </div>
      </div>
    </section>

    <!-- Monthly Stats - Kattaroq -->
    <section class="bg-white rounded-2xl shadow-xl p-10 mb-12">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Oylik statistika</h2>
        <div class="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
          📈 Dekabr 2025
        </div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-xl hover:shadow-lg transition">
          <div class="flex items-center justify-between mb-4">
            <div class="text-4xl">📚</div>
            <div class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">+{{ monthlyStats.newBooks }}</div>
          </div>
          <div class="text-4xl font-bold text-gray-800 mb-2">{{ monthlyStats.newBooks }}</div>
          <div class="text-gray-600 text-lg font-semibold">Yangi testlar</div>
          <div class="text-green-600 text-sm mt-2">↑ 15% o'sish</div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-xl hover:shadow-lg transition">
          <div class="flex items-center justify-between mb-4">
            <div class="text-4xl">👤</div>
            <div class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">+{{ monthlyStats.newUsers }}</div>
          </div>
          <div class="text-4xl font-bold text-gray-800 mb-2">{{ monthlyStats.newUsers }}</div>
          <div class="text-gray-600 text-lg font-semibold">Yangi foydalanuvchilar</div>
          <div class="text-green-600 text-sm mt-2">↑ 23% o'sish</div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-xl hover:shadow-lg transition">
          <div class="flex items-center justify-between mb-4">
            <div class="text-4xl">✅</div>
            <div class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">{{ monthlyStats.borrowedBooks }}</div>
          </div>
          <div class="text-4xl font-bold text-gray-800 mb-2">{{ monthlyStats.borrowedBooks.toLocaleString() }}</div>
          <div class="text-gray-600 text-lg font-semibold">Topshirilgan testlar</div>
          <div class="text-green-600 text-sm mt-2">↑ 31% o'sish</div>
        </div>
      </div>
    </section>

    <!-- Top Performance -->
    <section class="grid md:grid-cols-2 gap-8 mb-12">
      <!-- Popular Categories -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 flex items-center">
          <span class="mr-3">🏆</span>
          Mashhur kategoriyalar
        </h2>
        <div class="space-y-4">
          <div v-for="(category, index) in categories" :key="category.name" class="bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-xl hover:shadow-lg transition">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <div class="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                  {{ index + 1 }}
                </div>
                <span class="font-bold text-gray-800 text-lg">{{ category.name }}</span>
              </div>
              <span class="text-blue-600 font-bold text-2xl">{{ category.count }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div 
                class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                :style="{ width: category.percentage + '%' }"
              >
                <span class="text-white text-xs font-bold">{{ category.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 flex items-center">
          <span class="mr-3">⚡</span>
          So'nggi faollik
        </h2>
        <div class="space-y-4">
          <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center bg-gradient-to-r from-gray-50 to-green-50 p-4 rounded-xl hover:shadow-lg transition">
            <div class="text-3xl mr-4">{{ activity.icon }}</div>
            <div class="flex-1">
              <div class="font-semibold text-gray-800">{{ activity.title }}</div>
              <div class="text-sm text-gray-600">{{ activity.time }}</div>
            </div>
            <div class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
              {{ activity.badge }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievement Section -->
    <section class="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl p-12 shadow-2xl">
      <div class="text-center mb-10">
        <div class="text-7xl mb-6">🏆</div>
        <h2 class="text-4xl font-bold mb-4">Bizning yutuqlarimiz</h2>
        <p class="text-xl text-yellow-100">Platformaning umumiy natijalari</p>
      </div>
      
      <div class="grid md:grid-cols-4 gap-6">
        <div class="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/30 transition">
          <div class="text-4xl font-bold mb-2">50K+</div>
          <div class="text-yellow-100">Topshirilgan testlar</div>
        </div>
        <div class="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/30 transition">
          <div class="text-4xl font-bold mb-2">95%</div>
          <div class="text-yellow-100">O'rtacha ball</div>
        </div>
        <div class="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/30 transition">
          <div class="text-4xl font-bold mb-2">24/7</div>
          <div class="text-yellow-100">Xizmat vaqti</div>
        </div>
        <div class="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/30 transition">
          <div class="text-4xl font-bold mb-2">4.9★</div>
          <div class="text-yellow-100">Reyting</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref({
  books: 1234,
  users: 10567,
  activeReaders: 2890,
  reviews: 45234
})

const monthlyStats = ref({
  newBooks: 45,
  newUsers: 234,
  borrowedBooks: 5671
})

const categories = ref([
  { name: 'Matematika', count: 456, percentage: 92 },
  { name: 'Fizika', count: 378, percentage: 76 },
  { name: 'Ingliz tili', count: 345, percentage: 69 },
  { name: 'Tarix', count: 289, percentage: 58 },
  { name: 'Kimyo', count: 234, percentage: 47 },
  { name: 'Biologiya', count: 167, percentage: 33 }
])

const recentActivity = ref([
  { id: 1, icon: '✅', title: 'Matematika testi yakunlandi', time: '5 daqiqa oldin', badge: '+25' },
  { id: 2, icon: '🎯', title: 'Yangi rekord o\'rnatildi', time: '12 daqiqa oldin', badge: '🏆' },
  { id: 3, icon: '📚', title: 'Ingliz tili testi boshlandi', time: '18 daqiqa oldin', badge: '+15' },
  { id: 4, icon: '⭐', title: 'A\'lo baho olindi', time: '25 daqiqa oldin', badge: '100%' },
  { id: 5, icon: '👤', title: 'Yangi foydalanuvchi', time: '32 daqiqa oldin', badge: 'Yangi' }
])
</script>