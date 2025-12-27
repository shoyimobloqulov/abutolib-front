<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl md:rounded-2xl p-8 sm:p-12 md:p-16 mb-6 md:mb-12 shadow-2xl mx-2 sm:mx-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">Biz haqimizda</h1>
        <p class="text-lg sm:text-xl md:text-2xl text-purple-100 leading-relaxed">
          Abutolib - O'zbekistondagi eng ilg'or online test platformasi
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12 px-2 sm:px-4 max-w-6xl mx-auto">
      <div class="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
        <Target class="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" strokeWidth={1.5} />
        <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Bizning maqsadimiz</h2>
        <p class="text-base md:text-lg text-blue-100 leading-relaxed">
          Har bir o'quvchi va talabaga sifatli, qulay va zamonaviy test platformasini taqdim etish. 
          Bilim olish jarayonini qiziqarli va samarali qilish bizning asosiy vazifamiz.
        </p>
        <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-blue-400">
          <div class="flex items-center text-blue-100 text-sm md:text-base">
            <CheckCircle2 class="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" strokeWidth={1.5} />
            <span>2020 yildan buyon faoliyat ko'rsatmoqdamiz</span>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
        <Rocket class="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" strokeWidth={1.5} />
        <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Bizning qadriyatlarimiz</h2>
        <p class="text-base md:text-lg text-green-100 leading-relaxed">
          Sifat, innovatsiya, ochiqlik va foydalanuvchilarga g'amxo'rlik - 
          bu bizning asosiy qadriyatlarimiz. Har bir test maxsus e'tibor bilan tayyorlanadi.
        </p>
        <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-400">
          <div class="flex items-center text-green-100 text-sm md:text-base">
            <CheckCircle2 class="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" strokeWidth={1.5} />
            <span>10,000+ dan ortiq mamnun foydalanuvchi</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="mb-6 md:mb-12 px-2 sm:px-4 max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Nima taklif qilamiz?</h2>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Smartphone class="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 text-blue-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Mobil ilovalar</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            Android va iOS uchun mobil ilovalarimiz orqali istalgan joydan test topshiring.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1">
              <Apple class="w-3 h-3" />
              iOS
            </span>
            <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1">
              <Smartphone class="w-3 h-3" />
              Android
            </span>
          </div>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <BookOpen class="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 text-green-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Professional testlar</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            Barcha fanlar bo'yicha yuqori sifatli va o'ylangan testlar bazasi.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-gray-700 text-sm md:text-base">
              <Check class="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600 flex-shrink-0" strokeWidth={2} />
              <span>Matematika</span>
            </div>
            <div class="flex items-center text-gray-700 text-sm md:text-base">
              <Check class="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600 flex-shrink-0" strokeWidth={2} />
              <span>Fizika</span>
            </div>
            <div class="flex items-center text-gray-700 text-sm md:text-base">
              <Check class="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-600 flex-shrink-0" strokeWidth={2} />
              <span>Ingliz tili</span>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <BarChart3 class="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 text-purple-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Batafsil tahlil</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            Har bir test uchun to'liq statistika, grafik va tavsiyalar.
          </p>
          <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-3 md:p-4 rounded-lg">
            <div class="text-xs md:text-sm text-purple-800 font-semibold flex items-center gap-2">
              <TrendingUp class="w-4 h-4 flex-shrink-0" strokeWidth={2} />
              Real-time natijalar va tahlillar
            </div>
          </div>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Trophy class="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 text-yellow-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Reyting tizimi</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            O'z natijalaringizni boshqalar bilan taqqoslang va eng yaxshilar qatoriga kirish uchun harakat qiling.
          </p>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Headphones class="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 text-indigo-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">24/7 qo'llab-quvvatlash</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Savollaringiz bormi? Bizning qo'llab-quvvatlash jamoamiz doimo yordam berishga tayyor.
          </p>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Shield class="w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 text-red-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Xavfsizlik</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Sizning ma'lumotlaringiz to'liq himoyalangan. Biz maxfiylikni jiddiy qabul qilamiz.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section Stats -->
    <section class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 md:mb-12 shadow-xl mx-2 sm:mx-4 max-w-6xl lg:mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-800">Bizning jamoa</h2>
      <p class="text-center text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
        Tajribali dasturchilar, o'qituvchilar va dizaynerlardan iborat professional jamoa
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Code2 class="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">15+</h3>
          <p class="text-gray-600 text-sm md:text-base">Dasturchilar</p>
        </div>
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Users class="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">30+</h3>
          <p class="text-gray-600 text-sm md:text-base">Mutaxassislar</p>
        </div>
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Palette class="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">8+</h3>
          <p class="text-gray-600 text-sm md:text-base">Dizaynerlar</p>
        </div>
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Briefcase class="w-10 h-10 md:w-12 md:h-12 text-orange-600 mx-auto mb-3 md:mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-lg md:text-xl mb-1 md:mb-2 text-gray-800">5+</h3>
          <p class="text-gray-600 text-sm md:text-base">Menejerlar</p>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="mb-6 md:mb-12 px-2 sm:px-4 max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        Jamoa a'zolari
      </h2>

      <div class="flex flex-wrap justify-center gap-6 md:gap-8">
        <div
          v-for="member in team"
          :key="member.id"
          class="bg-white rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 w-full sm:w-[calc(50%-12px)] md:w-[280px] lg:w-[300px]"
        >
          <!-- Image -->
          <div class="relative overflow-hidden rounded-t-xl md:rounded-t-2xl h-64 md:h-72 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
            <User v-else class="w-20 h-20 md:w-24 md:h-24 text-white opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={1} />
            
            <!-- Badge -->
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span class="text-xs font-bold text-purple-600">Team Member</span>
            </div>
          </div>

          <!-- Info -->
          <div class="p-5 md:p-6">
            <div class="text-center mb-4">
              <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {{ member.name }}
              </h3>
              <div class="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                <Briefcase class="w-4 h-4" strokeWidth={1.5} />
                {{ member.role }}
              </div>
            </div>
            
            <p class="text-gray-600 text-sm leading-relaxed text-center mb-5">
              {{ member.bio }}
            </p>

            <!-- Social Links -->
            <div class="flex justify-center gap-3 pt-4 border-t">
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center w-10 h-10 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg transition-all transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin class="w-5 h-5" strokeWidth={1.5} />
              </a>

              <a
                :href="member.github"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-800 text-gray-600 hover:text-white rounded-lg transition-all transform hover:scale-110"
                title="GitHub"
              >
                <Github class="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl md:rounded-2xl p-6 sm:p-8 text-center shadow-2xl mx-2 sm:mx-4 mb-2 sm:mb-4 max-w-4xl lg:mx-auto">
      <div class="flex items-center justify-center mb-4">
        <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <MessageSquare class="w-8 h-8" strokeWidth={1.5} />
        </div>
      </div>
      <h2 class="text-2xl md:text-3xl font-bold mb-3">Savollaringiz bormi?</h2>
      <p class="text-sm md:text-base mb-6 text-blue-100 max-w-xl mx-auto">
        Biz bilan bog'laning va barcha savollaringizga javob oling
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <RouterLink 
          to="/contact" 
          class="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
        >
          <MessageSquare class="w-4 h-4" strokeWidth={1.5} />
          Bog'lanish
        </RouterLink>
        <RouterLink 
          to="/login" 
          class="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-white hover:text-blue-600 transition"
        >
          <Rocket class="w-4 h-4" strokeWidth={1.5} />
          Testni boshlash
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {
  Target, Rocket, CheckCircle2, Smartphone, BookOpen, BarChart3, TrendingUp,
  Trophy, Headphones, Shield, Code2, Users, Palette, Briefcase, User,
  Linkedin, Github, MessageSquare, Check, Apple
} from 'lucide-vue-next'

const team = [
  {
    id: 1,
    name: "Mamayusuf Tursoatov",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/mamayusuf-tursoatov-3b7245234/",
    github: "https://github.com/mamayusuf-tursoatov", 
    bio: "Platforma asoschisi va loyiha bosh menejeri.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Shoyim Obloqulov",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/shoyim-obloqulov-5b7245234/",
    github: "https://github.com/shoyimobloqulov",
    bio: "Full stack dasturchi va texnik yechimlar bo'yicha mutaxassis.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },  
]
</script>