<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-12">
    <div class="max-w-7xl mx-auto px-2 sm:px-4">
      <!-- Header -->
      <div class="text-center mb-8 md:mb-12">
        <div class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Newspaper class="w-4 h-4 inline mr-2" />
          So'ngi yangiliklar
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Yangiliklar</h1>
        <p class="text-base md:text-xl text-gray-600">Platformamiz haqida eng so'ngi yangiliklar va e'lonlar</p>
      </div>

      <!-- Featured News -->
      <div 
        v-if="featuredNews"
        class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mb-8 md:mb-12 cursor-pointer transform hover:scale-[1.02] transition"
        @click="goToNews(featuredNews.id)"
      >
        <div class="grid md:grid-cols-2 gap-4 md:gap-8">
          <div class="p-6 md:p-12">
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                <Sparkles class="w-3 h-3 inline mr-1" />
                Asosiy
              </span>
              <span class="text-blue-200 text-sm">{{ featuredNews.date }}</span>
            </div>
            <h2 class="text-2xl md:text-4xl font-bold mb-4 leading-tight">{{ featuredNews.title }}</h2>
            <p class="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">{{ featuredNews.excerpt }}</p>
            <button class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
              Batafsil o'qish
              <ArrowRight class="w-5 h-5" />
            </button>
          </div>
          <div class="h-64 md:h-auto relative">
            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
            <img :src="featuredNews.image" :alt="featuredNews.title" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- News Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div 
          v-for="news in newsList" 
          :key="news.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden"
          @click="goToNews(news.id)"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
            <div class="absolute top-3 right-3">
              <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                {{ news.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4 md:p-6">
            <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div class="flex items-center gap-1">
                <Calendar class="w-4 h-4" />
                <span>{{ news.date }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Clock class="w-4 h-4" />
                <span>{{ news.readTime }} min</span>
              </div>
            </div>

            <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3 line-clamp-2">{{ news.title }}</h3>
            <p class="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{{ news.excerpt }}</p>

            <div class="flex items-center justify-between pt-4 border-t">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {{ news.author.charAt(0) }}
                </div>
                <span class="text-sm font-medium text-gray-700">{{ news.author }}</span>
              </div>
              <button class="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                O'qish
                <ChevronRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-8 md:mt-12">
        <button class="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
          Ko'proq yuklash
          <ChevronDown class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Newspaper, Sparkles, ArrowRight, Calendar, Clock, ChevronRight, ChevronDown } from 'lucide-vue-next'

const router = useRouter()

const featuredNews = ref({
  id: 1,
  title: "Abutolib platformasiga yangi funksiyalar qo'shildi",
  excerpt: "Foydalanuvchilar uchun test natijalarini tahlil qilish va shaxsiy statistikani kuzatish imkoniyatlari kengaytirildi. Endi har bir foydalanuvchi o'z rivojlanish grafigini ko'rishi mumkin.",
  date: "27 Dekabr, 2024",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  category: "Yangilik",
  author: "Admin"
})

const newsList = ref([
  {
    id: 2,
    title: "Matematika bo'yicha 50 ta yangi test qo'shildi",
    excerpt: "O'rta maktab va oliy ta'lim talabalari uchun matematika fanidan yangi testlar tayyorlandi. Barcha darajalar uchun.",
    date: "25 Dekabr, 2024",
    readTime: 5,
    category: "Test",
    author: "Sardor Azimov",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Mobil ilovamiz yangilandi",
    excerpt: "Android va iOS uchun yangi versiya chiqdi. Tezlik oshirildi va dizayn yaxshilandi.",
    date: "23 Dekabr, 2024",
    readTime: 3,
    category: "Texnologiya",
    author: "Dilshod Karimov",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "10,000+ foydalanuvchi chegarasini o'tdik",
    excerpt: "Platformamiz faol foydalanuvchilar soni 10,000 dan oshdi. Barcha foydalanuvchilarga rahmat!",
    date: "20 Dekabr, 2024",
    readTime: 4,
    category: "Yutuq",
    author: "Feruza Saidova",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Ingliz tili testlari yangilandi",
    excerpt: "IELTS va CEFR standartlariga mos yangi testlar qo'shildi. Grammatika va lug'at bo'limlari kengaytirildi.",
    date: "18 Dekabr, 2024",
    readTime: 6,
    category: "Test",
    author: "Aziza Rahimova",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Yangi sertifikat tizimi joriy etildi",
    excerpt: "Testlarni muvaffaqiyatli topshirgan foydalanuvchilar uchun elektron sertifikatlar beriladi.",
    date: "15 Dekabr, 2024",
    readTime: 5,
    category: "Yangilik",
    author: "Jamshid Tursunov",
    image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=600&h=400&fit=crop"
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