<template>
  <!-- Latest News Section -->
  <section class="mb-6 md:mb-12 px-2 sm:px-4 max-w-7xl mx-auto">
    <div class="flex justify-between items-center mb-6 md:mb-8">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">So'ngi yangiliklar</h2>
        <p class="text-base md:text-lg text-gray-600">Platformamiz haqida eng muhim e'lonlar</p>
      </div>
      <RouterLink 
        to="/news" 
        class="hidden sm:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
      >
        Barchasi
        <ArrowRight class="w-5 h-5" />
      </RouterLink>
    </div>

    <div class="grid lg:grid-cols-2 gap-4 md:gap-6">
      <!-- Featured News (Left - Large) -->
      <div 
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden group row-span-3"
        @click="goToNews(featuredNews.id)"
      >
        <!-- Image -->
        <div class="relative h-64 md:h-80 overflow-hidden">
          <img 
            :src="featuredNews.image" 
            :alt="featuredNews.title" 
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
          />
          <div class="absolute top-4 right-4">
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {{ featuredNews.category }}
            </span>
          </div>
          <!-- Featured Badge -->
          <div class="absolute top-4 left-4">
            <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
              <Sparkles class="w-4 h-4" />
              Asosiy
            </span>
          </div>
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="p-5 md:p-6">
          <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div class="flex items-center gap-1.5">
              <Calendar class="w-4 h-4" />
              <span>{{ featuredNews.date }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Clock class="w-4 h-4" />
              <span>{{ featuredNews.readTime }} min</span>
            </div>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition leading-tight">
            {{ featuredNews.title }}
          </h3>
          <p class="text-sm md:text-base text-gray-600 mb-5 leading-relaxed line-clamp-3">
            {{ featuredNews.excerpt }}
          </p>

          <div class="flex items-center justify-between pt-4 border-t">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {{ featuredNews.author.charAt(0) }}
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-800">{{ featuredNews.author }}</div>
                <div class="text-xs text-gray-500">Muallif</div>
              </div>
            </div>
            <button class="text-blue-600 hover:text-blue-700 font-bold text-base flex items-center gap-1 group-hover:gap-2 transition-all">
              O'qish
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Small News (Right - 3 Cards) -->
      <div class="space-y-4 md:space-y-6">
        <div 
          v-for="news in smallNews" 
          :key="news.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden group"
          @click="goToNews(news.id)"
        >
          <div class="flex gap-4 p-4">
            <!-- Image -->
            <div class="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                :src="news.image" 
                :alt="news.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              />
              <div v-if="news.isNew" class="absolute top-2 left-2">
                <span class="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Yangi
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                    {{ news.category }}
                  </span>
                  <span class="text-xs text-gray-500 flex items-center gap-1">
                    <Clock class="w-3 h-3" />
                    {{ news.readTime }} min
                  </span>
                </div>
                <h4 class="text-sm md:text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                  {{ news.title }}
                </h4>
              </div>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5 text-xs text-gray-500">
                  <Calendar class="w-3 h-3" />
                  <span>{{ news.date }}</span>
                </div>
                <button class="text-blue-600 hover:text-blue-700 font-semibold text-xs flex items-center gap-1">
                  O'qish
                  <ChevronRight class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Button (Mobile) -->
    <div class="text-center mt-6 sm:hidden">
      <RouterLink 
        to="/news" 
        class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg"
      >
        Barcha yangiliklar
        <ArrowRight class="w-5 h-5" />
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Calendar, Clock, ChevronRight, ArrowRight, Sparkles } from 'lucide-vue-next'

const router = useRouter()

const featuredNews = ref({
  id: 1,
  title: "Abutolib platformasiga yangi funksiyalar qo'shildi",
  excerpt: "Foydalanuvchilar uchun test natijalarini tahlil qilish va shaxsiy statistikani kuzatish imkoniyatlari kengaytirildi. Endi har bir foydalanuvchi o'z rivojlanish grafigini ko'rishi mumkin.",
  date: "27 Dek, 2024",
  readTime: 8,
  category: "Yangilik",
  author: "Admin",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
})

const smallNews = ref([
  {
    id: 2,
    title: "Matematika bo'yicha 50 ta yangi test qo'shildi",
    date: "25 Dek, 2024",
    readTime: 4,
    category: "Test",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop",
    isNew: true
  },
  {
    id: 3,
    title: "Mobil ilovamiz yangilandi - tezlik oshirildi",
    date: "23 Dek, 2024",
    readTime: 3,
    category: "Texnologiya",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    isNew: true
  },
  {
    id: 4,
    title: "10,000+ foydalanuvchi chegarasini o'tdik",
    date: "20 Dek, 2024",
    readTime: 5,
    category: "Yutuq",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    isNew: false
  }
])

const goToNews = (id) => {
  router.push(`/news/${id}`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>