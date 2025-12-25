<template>
  <div class="contact">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold mb-6 text-gray-800">Biz bilan bog'laning</h1>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Ismingiz</label>
            <input 
              v-model="form.name"
              type="text" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Telefon</label>
            <input 
              v-model="form.phone"
              type="tel" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Mavzu</label>
            <select 
              v-model="form.subject"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Mavzuni tanlang</option>
              <option value="general">Umumiy savol</option>
              <option value="support">Texnik yordam</option>
              <option value="partnership">Hamkorlik</option>
              <option value="feedback">Fikr-mulohaza</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">Xabar</label>
            <textarea 
              v-model="form.message"
              required
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Xabaringizni yozing..."
            ></textarea>
          </div>

          <button 
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Yuborish
          </button>

          <div v-if="submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Xabaringiz muvaffaqiyatli yuborildi!
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div>
        <div class="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 class="text-2xl font-bold mb-6 text-gray-800">Aloqa ma'lumotlari</h2>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="text-2xl mr-4">📍</div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Manzil</h3>
                <p class="text-gray-600">Toshkent shahar, Amir Temur ko'chasi, 123-uy</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-2xl mr-4">📞</div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Telefon</h3>
                <p class="text-gray-600">+998 71 123 45 67</p>
                <p class="text-gray-600">+998 90 123 45 67</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-2xl mr-4">✉️</div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Email</h3>
                <p class="text-gray-600">info@abutolib.uz</p>
                <p class="text-gray-600">support@abutolib.uz</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-2xl mr-4">⏰</div>
              <div>
                <h3 class="font-semibold text-gray-800 mb-1">Ish vaqti</h3>
                <p class="text-gray-600">Dushanba - Juma: 9:00 - 18:00</p>
                <p class="text-gray-600">Shanba: 9:00 - 14:00</p>
                <p class="text-gray-600">Yakshanba: Dam olish</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Biz xaritada</h2>
          <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">🗺️ Xarita joylashuvi</span>
          </div>
        </div>
      </div>
    </div>
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
  }, 3000)
}
</script>