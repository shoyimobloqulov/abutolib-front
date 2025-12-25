<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white rounded-2xl p-12 md:p-16 mb-12 shadow-2xl">
      <div class="max-w-4xl mx-auto text-center">
        <div class="text-6xl mb-6">📞</div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Biz bilan bog'laning</h1>
        <p class="text-xl md:text-2xl text-teal-100 leading-relaxed">
          Savollaringiz yoki takliflaringiz bormi? Biz doim yordam berishga tayyormiz!
        </p>
      </div>
    </section>

    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-10">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-2">Xabar yuboring</h2>
          <p class="text-gray-600">Formani to'ldiring va biz tez orada javob beramiz</p>
        </div>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-bold mb-3 text-lg">Ismingiz *</label>
            <input 
              v-model="form.name"
              type="text" 
              required
              class="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-bold mb-3 text-lg">Email *</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-bold mb-3 text-lg">Telefon</label>
            <input 
              v-model="form.phone"
              type="tel" 
              class="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-bold mb-3 text-lg">Mavzu *</label>
            <select 
              v-model="form.subject"
              required
              class="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
            >
              <option value="">Mavzuni tanlang</option>
              <option value="general">Umumiy savol</option>
              <option value="support">Texnik yordam</option>
              <option value="partnership">Hamkorlik</option>
              <option value="feedback">Fikr-mulohaza</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-bold mb-3 text-lg">Xabar *</label>
            <textarea 
              v-model="form.message"
              required
              rows="6"
              class="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg resize-none"
              placeholder="Xabaringizni batafsil yozing..."
            ></textarea>
          </div>

          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg"
          >
            📨 Xabar yuborish
          </button>

          <div v-if="submitted" class="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl flex items-center">
            <span class="text-3xl mr-3">✅</span>
            <span class="font-semibold">Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.</span>
          </div>
        </form>
      </div>

      <!-- Contact Info & Map -->
      <div class="space-y-8">
        <!-- Contact Info Cards -->
        <div class="bg-white rounded-2xl shadow-2xl p-10">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">Aloqa ma'lumotlari</h2>
          
          <div class="space-y-6">
            <div class="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition">
              <div class="text-4xl mr-5">📍</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-2 text-xl">Manzil</h3>
                <p class="text-gray-600 text-lg">Toshkent shahar, Amir Temur ko'chasi, 123-uy</p>
                <p class="text-gray-600 text-lg">Yakkasaroy tumani</p>
              </div>
            </div>

            <div class="flex items-start bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition">
              <div class="text-4xl mr-5">📞</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-2 text-xl">Telefon</h3>
                <p class="text-gray-700 text-lg font-semibold mb-1">+998 71 123 45 67</p>
                <p class="text-gray-700 text-lg font-semibold">+998 90 123 45 67</p>
                <p class="text-gray-500 text-sm mt-2">Dushanba - Juma: 9:00 - 18:00</p>
              </div>
            </div>

            <div class="flex items-start bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition">
              <div class="text-4xl mr-5">✉️</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-2 text-xl">Email</h3>
                <p class="text-gray-700 text-lg font-semibold mb-1">info@abutolib.uz</p>
                <p class="text-gray-700 text-lg font-semibold">support@abutolib.uz</p>
                <p class="text-gray-500 text-sm mt-2">24 soat ichida javob beramiz</p>
              </div>
            </div>

            <div class="flex items-start bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition">
              <div class="text-4xl mr-5">⏰</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-2 text-xl">Ish vaqti</h3>
                <div class="space-y-1 text-gray-700">
                  <p class="text-lg">📅 Dushanba - Juma: <span class="font-semibold">9:00 - 18:00</span></p>
                  <p class="text-lg">📅 Shanba: <span class="font-semibold">9:00 - 14:00</span></p>
                  <p class="text-lg">📅 Yakshanba: <span class="font-semibold text-red-600">Dam olish</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8">
          <h2 class="text-2xl font-bold mb-6">Ijtimoiy tarmoqlarda</h2>
          <div class="grid grid-cols-2 gap-4">
            <a href="#" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-xl transition flex items-center justify-center">
              <span class="text-3xl mr-3">📘</span>
              <span class="font-semibold">Facebook</span>
            </a>
            <a href="#" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-xl transition flex items-center justify-center">
              <span class="text-3xl mr-3">📷</span>
              <span class="font-semibold">Instagram</span>
            </a>
            <a href="#" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-xl transition flex items-center justify-center">
              <span class="text-3xl mr-3">📲</span>
              <span class="font-semibold">Telegram</span>
            </a>
            <a href="#" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-4 rounded-xl transition flex items-center justify-center">
              <span class="text-3xl mr-3">🐦</span>
              <span class="font-semibold">Twitter</span>
            </a>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <span class="mr-3">🗺️</span>
            Biz xaritada
          </h2>
          <div class="bg-gradient-to-br from-blue-100 to-indigo-100 h-72 rounded-xl flex items-center justify-center border-2 border-blue-200 hover:shadow-lg transition">
            <div class="text-center">
              <div class="text-6xl mb-4">📍</div>
              <span class="text-gray-600 text-lg font-semibold">Toshkent, Yakkasaroy</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 shadow-xl">
      <h2 class="text-4xl font-bold text-center mb-10 text-gray-800">Tez-tez so'raladigan savollar</h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 class="font-bold text-xl mb-3 text-gray-800">❓ Test qancha vaqt davom etadi?</h3>
          <p class="text-gray-600">Testlar turli xil - 15 daqiqadan 2 soatgacha davom etadi.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 class="font-bold text-xl mb-3 text-gray-800">❓ Natijalar qachon chiqadi?</h3>
          <p class="text-gray-600">Natijalar test tugashi bilanoq darhol ekranda ko'rsatiladi.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 class="font-bold text-xl mb-3 text-gray-800">❓ Mobil ilovasi bormi?</h3>
          <p class="text-gray-600">Ha, Android va iOS uchun bepul mobil ilovalarimiz mavjud.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 class="font-bold text-xl mb-3 text-gray-800">❓ Ro'yxatdan o'tish pullikmi?</h3>
          <p class="text-gray-600">Yo'q, platformamiz mutlaqo bepul va ochiq.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  submitted.value = true
  
  setTimeout(() => {
    submitted.value = false
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  }, 5000)
}
</script>