<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-12">
    <div class="max-w-7xl mx-auto px-2 sm:px-4">
      <!-- Back Button -->
      <button 
        @click="goBack"
        class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium transition"
      >
        <ArrowLeft class="w-5 h-5" />
        Orqaga
      </button>

      <!-- Article Header -->
      <article class="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
        <!-- Featured Image -->
        <div class="relative h-64 md:h-96 overflow-hidden">
          <img :src="news.image" :alt="news.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <span class="bg-blue-600 px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-3 inline-block">
              {{ news.category }}
            </span>
            <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">{{ news.title }}</h1>
          </div>
        </div>

        <!-- Article Meta -->
        <div class="p-6 md:p-8 border-b">
          <div class="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                {{ news.author.charAt(0) }}
              </div>
              <div>
                <div class="font-semibold text-gray-800">{{ news.author }}</div>
                <div class="text-xs text-gray-500">Muallif</div>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <Calendar class="w-4 h-4" />
              <span>{{ news.date }}</span>
            </div>
            <div class="flex items-center gap-1">
              <Clock class="w-4 h-4" />
              <span>{{ news.readTime }} daqiqa</span>
            </div>
            <div class="flex items-center gap-1">
              <Eye class="w-4 h-4" />
              <span>{{ news.views }} ko'rishlar</span>
            </div>
          </div>
        </div>

        <!-- Article Content -->
        <div class="p-6 md:p-8 lg:p-12">
          <div class="prose prose-lg max-w-none">
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              {{ news.excerpt }}
            </p>

            <div class="space-y-4 text-gray-700 leading-relaxed" v-html="news.content"></div>
          </div>

          <!-- Tags -->
          <div class="mt-8 pt-6 border-t">
            <h3 class="text-sm font-semibold text-gray-500 mb-3">Teglar:</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in news.tags" 
                :key="tag"
                class="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Share -->
          <div class="mt-8 pt-6 border-t">
            <h3 class="text-sm font-semibold text-gray-500 mb-4">Ulashish:</h3>
            <div class="flex gap-3">
              <button class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition">
                <Share2 class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition">
                <MessageCircle class="w-5 h-5" />
              </button>
              <button class="w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition">
                <Link class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <!-- Related News -->
      <div class="mt-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">O'xshash yangiliklar</h2>
        <div class="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div 
            v-for="related in relatedNews" 
            :key="related.id"
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden"
            @click="goToNews(related.id)"
          >
            <div class="flex gap-4 p-4">
              <img :src="related.image" :alt="related.title" class="w-24 h-24 object-cover rounded-lg" />
              <div class="flex-1">
                <h3 class="font-bold text-gray-800 mb-2 line-clamp-2">{{ related.title }}</h3>
                <p class="text-sm text-gray-500 flex items-center gap-2">
                  <Calendar class="w-3 h-3" />
                  {{ related.date }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Calendar, Clock, Eye, Share2, MessageCircle, Link } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const news = ref({
  id: 1,
  title: "Abutolib platformasiga yangi funksiyalar qo'shildi",
  excerpt: "Foydalanuvchilar uchun test natijalarini tahlil qilish va shaxsiy statistikani kuzatish imkoniyatlari kengaytirildi.",
  date: "27 Dekabr, 2024",
  readTime: 8,
  views: 1234,
  category: "Yangilik",
  author: "Admin",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
  tags: ["yangilik", "funksiyalar", "yangilanish", "statistika"],
  content: `
    <h2>Yangi imkoniyatlar</h2>
    <p>Platformamizga qo'shilgan asosiy yangiliklar:</p>
    
    <h3>1. Batafsil statistika</h3>
    <p>Endi har bir foydalanuvchi o'z test natijalarini batafsil tahlil qilishi mumkin. Statistika bo'limida siz quyidagilarni ko'rishingiz mumkin:</p>
    <ul>
      <li>Barcha testlar bo'yicha umumiy natijalar</li>
      <li>Mavzular bo'yicha taqsimlangan ko'rsatkichlar</li>
      <li>Vaqt davomida rivojlanish grafiklari</li>
      <li>Eng kuchli va zaif tomonlaringiz tahlili</li>
    </ul>

    <h3>2. Shaxsiy rivojlanish grafigi</h3>
    <p>Yangi grafik interfeys orqali o'z rivojlanishingizni vizual ko'rishingiz mumkin. Bu sizga qaysi sohalarda ko'proq ishlashingiz kerakligini tushunishga yordam beradi.</p>

    <h3>3. Takomillashtirilgan test tizimi</h3>
    <p>Test topshirish jarayoni yanada qulayroq va intuitivroq qilindi. Endi siz:</p>
    <ul>
      <li>Testlarni to'xtatib, keyinroq davom ettirishingiz mumkin</li>
      <li>Savollarni belgilash va qayta ko'rib chiqish imkoniyati</li>
      <li>Natijalarni darhol ko'rish va xatolarni tahlil qilish</li>
    </ul>

    <h3>4. Mobil ilovalar uchun optimizatsiya</h3>
    <p>Barcha yangi funksiyalar mobil qurilmalarda ham to'liq ishlaydi. Interfeys telefon va planshetlar uchun maxsus optimallashtirilgan.</p>

    <blockquote>
      "Bizning maqsadimiz - har bir foydalanuvchiga sifatli va qulay ta'lim olish imkoniyatini berish" - Abutolib jamoasi
    </blockquote>

    <h3>Kelajak rejalari</h3>
    <p>Yaqin kelajakda platformaga qo'shimcha yangiliklar kiritilishi rejalashtirilgan:</p>
    <ul>
      <li>Onlayn raqobatlar va turnirlar</li>
      <li>Video darsliklar integratsiyasi</li>
      <li>AI yordamchi va shaxsiy o'qituvchi</li>
      <li>Ijtimoiy funksiyalar va do'stlar bilan raqobat</li>
    </ul>

    <p>Barcha yangiliklar bilan tanishib chiqing va platformamizdan maksimal darajada foydalaning!</p>
  `
})

const relatedNews = ref([
  {
    id: 2,
    title: "Matematika bo'yicha 50 ta yangi test qo'shildi",
    date: "25 Dekabr, 2024",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Mobil ilovamiz yangilandi",
    date: "23 Dekabr, 2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
  }
])

const goBack = () => {
  router.push('/news')
}

const goToNews = (id) => {
  router.push(`/news/${id}`)
  window.scrollTo(0, 0)
}

onMounted(() => {
  // Bu yerda ID bo'yicha yangilikni yuklaymiz
  console.log('News ID:', route.params.id)
})
</script>

<style scoped>
.prose h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: #374151;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.prose ul li {
  margin: 0.5rem 0;
}

.prose blockquote {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #4b5563;
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>