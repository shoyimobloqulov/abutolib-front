<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-12 md:p-16 mb-12 shadow-2xl mx-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Biz haqimizda</h1>
        <p class="text-xl md:text-2xl text-purple-100 leading-relaxed">
          Abutolib - O'zbekistondagi eng ilg'or online test platformasi
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="grid md:grid-cols-2 gap-8 mb-12 px-4 max-w-6xl mx-auto">
      <div class="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
        <Target class="w-16 h-16 mb-6" strokeWidth={1.5} />
        <h2 class="text-3xl font-bold mb-4">Bizning maqsadimiz</h2>
        <p class="text-lg text-blue-100 leading-relaxed">
          Har bir o'quvchi va talabaga sifatli, qulay va zamonaviy test platformasini taqdim etish. 
          Bilim olish jarayonini qiziqarli va samarali qilish bizning asosiy vazifamiz.
        </p>
        <div class="mt-6 pt-6 border-t border-blue-400">
          <div class="flex items-center text-blue-100">
            <CheckCircle2 class="w-5 h-5 mr-2" strokeWidth={1.5} />
            <span>2020 yildan buyon faoliyat ko'rsatmoqdamiz</span>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-br from-green-500 to-green-700 text-white p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
        <Rocket class="w-16 h-16 mb-6" strokeWidth={1.5} />
        <h2 class="text-3xl font-bold mb-4">Bizning qadriyatlarimiz</h2>
        <p class="text-lg text-green-100 leading-relaxed">
          Sifat, innovatsiya, ochiqlik va foydalanuvchilarga g'amxo'rlik - 
          bu bizning asosiy qadriyatlarimiz. Har bir test maxsus e'tibor bilan tayyorlanadi.
        </p>
        <div class="mt-6 pt-6 border-t border-green-400">
          <div class="flex items-center text-green-100">
            <CheckCircle2 class="w-5 h-5 mr-2" strokeWidth={1.5} />
            <span>10,000+ dan ortiq mamnun foydalanuvchi</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="mb-12 px-4 max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Nima taklif qilamiz?</h2>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Smartphone class="w-14 h-14 mb-6 text-blue-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Mobil ilovalar</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Android va iOS uchun mobil ilovalarimiz orqali istalgan joydan test topshiring.
          </p>
          <div class="flex gap-2">
            <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Apple class="w-3 h-3" />
              iOS
            </span>
            <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <Smartphone class="w-3 h-3" />
              Android
            </span>
          </div>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <BookOpen class="w-14 h-14 mb-6 text-green-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Professional testlar</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Barcha fanlar bo'yicha yuqori sifatli va o'ylangan testlar bazasi.
          </p>
          <div class="space-y-2">
            <div class="flex items-center text-gray-700">
              <Check class="w-5 h-5 mr-2 text-green-600" strokeWidth={2} />
              <span>Matematika</span>
            </div>
            <div class="flex items-center text-gray-700">
              <Check class="w-5 h-5 mr-2 text-green-600" strokeWidth={2} />
              <span>Fizika</span>
            </div>
            <div class="flex items-center text-gray-700">
              <Check class="w-5 h-5 mr-2 text-green-600" strokeWidth={2} />
              <span>Ingliz tili</span>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <BarChart3 class="w-14 h-14 mb-6 text-purple-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Batafsil tahlil</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Har bir test uchun to'liq statistika, grafik va tavsiyalar.
          </p>
          <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
            <div class="text-sm text-purple-800 font-semibold flex items-center gap-2">
              <TrendingUp class="w-4 h-4" strokeWidth={2} />
              Real-time natijalar va tahlillar
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Trophy class="w-14 h-14 mb-6 text-yellow-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Reyting tizimi</h3>
          <p class="text-gray-600 leading-relaxed">
            O'z natijalaringizni boshqalar bilan taqqoslang va eng yaxshilar qatoriga kirish uchun harakat qiling.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Headphones class="w-14 h-14 mb-6 text-indigo-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">24/7 qo'llab-quvvatlash</h3>
          <p class="text-gray-600 leading-relaxed">
            Savollaringiz bormi? Bizning qo'llab-quvvatlash jamoamiz doimo yordam berishga tayyor.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
          <Shield class="w-14 h-14 mb-6 text-red-600 group-hover:scale-110 transition" strokeWidth={1.5} />
          <h3 class="text-2xl font-bold mb-4 text-gray-800">Xavfsizlik</h3>
          <p class="text-gray-600 leading-relaxed">
            Sizning ma'lumotlaringiz to'liq himoyalangan. Biz maxfiylikni jiddiy qabul qilamiz.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section Stats -->
    <section class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 mb-12 shadow-xl mx-4 max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-6 text-gray-800">Bizning jamoa</h2>
      <p class="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Tajribali dasturchilar, o'qituvchilar va dizaynerlardan iborat professional jamoa
      </p>
      
      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Code2 class="w-12 h-12 text-blue-600 mx-auto mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-xl mb-2 text-gray-800">15+</h3>
          <p class="text-gray-600">Dasturchilar</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Users class="w-12 h-12 text-green-600 mx-auto mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-xl mb-2 text-gray-800">30+</h3>
          <p class="text-gray-600">Mutaxassislar</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Palette class="w-12 h-12 text-purple-600 mx-auto mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-xl mb-2 text-gray-800">8+</h3>
          <p class="text-gray-600">Dizaynerlar</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <Briefcase class="w-12 h-12 text-orange-600 mx-auto mb-4" strokeWidth={1.5} />
          <h3 class="font-bold text-xl mb-2 text-gray-800">5+</h3>
          <p class="text-gray-600">Menejerlar</p>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="mb-12 px-4 max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
        Jamoa a'zolari
      </h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="member in team"
          :key="member.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <!-- Image -->
          <div class="overflow-hidden rounded-t-2xl h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
            <User v-else class="w-24 h-24 text-white opacity-50" strokeWidth={1} />
          </div>

          <!-- Info -->
          <div class="p-6 text-center">
            <h3 class="text-xl font-bold text-gray-800">
              {{ member.name }}
            </h3>
            <p class="text-indigo-600 font-semibold mb-3 flex items-center justify-center gap-1">
              <Briefcase class="w-4 h-4" strokeWidth={1.5} />
              {{ member.role }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ member.bio }}
            </p>

            <!-- Social -->
            <div class="flex justify-center gap-4 mt-4">
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noopener"
                class="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin class="w-5 h-5" strokeWidth={1.5} />
              </a>

              <a
                :href="member.github"
                target="_blank"
                rel="noopener"
                class="text-gray-400 hover:text-gray-900 transition transform hover:scale-110"
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
    <section class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-12 text-center shadow-2xl mx-4 mb-4">
      <h2 class="text-4xl font-bold mb-4">Savollaringiz bormi?</h2>
      <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
        Biz bilan bog'laning va barcha savollaringizga javob oling
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink 
          to="/contact" 
          class="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
        >
          <MessageSquare class="w-5 h-5" strokeWidth={1.5} />
          Bog'lanish
        </RouterLink>
        <RouterLink 
          to="/login" 
          class="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2"
        >
          <Rocket class="w-5 h-5" strokeWidth={1.5} />
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
    image: new URL('@/assets/images/team/photo_2025-12-23_17-01-22.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: "Shoyim Obloqulov",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/shoyim-obloqulov-5b7245234/",
    github: "https://github.com/shoyimobloqulov",
    bio: "Full stack dasturchi va texnik yechimlar bo'yicha mutaxassis.",
    image: new URL('@/assets/images/team/photo_2025-12-17_16-29-13.jpg', import.meta.url).href
  },  
]
</script>