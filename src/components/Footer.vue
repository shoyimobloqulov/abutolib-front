<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
              <BookOpen class="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <span class="text-2xl font-bold">Abutolib</span>
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            O'zbekistondagi eng ilg'or online test platformasi. Bilimingizni sinang va rivojlang.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition transform hover:scale-110" title="Facebook">
              <Facebook class="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" class="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition transform hover:scale-110" title="Instagram">
              <Instagram class="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" class="bg-blue-400 hover:bg-blue-500 p-3 rounded-lg transition transform hover:scale-110" title="Twitter">
              <Twitter class="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" class="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition transform hover:scale-110" title="YouTube">
              <Youtube class="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-white flex items-center gap-2">
            <Zap class="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
            Tezkor havolalar
          </h3>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group">
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" strokeWidth={2} />
                Bosh sahifa
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group">
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" strokeWidth={2} />
                Biz haqimizda
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/statistics" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group">
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" strokeWidth={2} />
                Statistika
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group">
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" strokeWidth={2} />
                Bog'lanish
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/login" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group">
                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition" strokeWidth={2} />
                Kirish
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-white flex items-center gap-2">
            <Sparkles class="w-5 h-5 text-purple-400" strokeWidth={1.5} />
            Xizmatlar
          </h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                <Check class="w-4 h-4 text-green-400" strokeWidth={2} />
                Online testlar
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                <Check class="w-4 h-4 text-green-400" strokeWidth={2} />
                Batafsil tahlil
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                <Check class="w-4 h-4 text-green-400" strokeWidth={2} />
                Mobil ilova
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                <Check class="w-4 h-4 text-green-400" strokeWidth={2} />
                24/7 qo'llab-quvvatlash
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition flex items-center gap-2">
                <Check class="w-4 h-4 text-green-400" strokeWidth={2} />
                Sertifikatlar
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-white flex items-center gap-2">
            <MessageSquare class="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            Aloqa
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start text-gray-400 group hover:text-blue-400 transition cursor-pointer">
              <MapPin class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 group-hover:scale-110 transition" strokeWidth={1.5} />
              <span>Toshkent, Amir Temur ko'chasi, 123-uy</span>
            </li>
            <li class="flex items-start text-gray-400">
              <Phone class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <div class="hover:text-blue-400 transition cursor-pointer">+998 99 343 68 20</div>
                <div class="hover:text-blue-400 transition cursor-pointer">+998 91 902 72 03</div>
              </div>
            </li>
            <li class="flex items-start text-gray-400">
              <Mail class="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <div class="hover:text-blue-400 transition cursor-pointer">info@abutolib.uz</div>
                <div class="hover:text-blue-400 transition cursor-pointer">support@abutolib.uz</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          <!-- Developer Info -->
          <div class="text-center lg:text-left">
            <p class="text-gray-400 mb-2 flex items-center justify-center lg:justify-start gap-2">
              <Code2 class="w-4 h-4" strokeWidth={1.5} />
              Developed by 
              <a href="#" class="text-blue-400 hover:text-blue-300 font-bold transition">
                Shoyim Obloqulov
              </a>
            </p>
            <p class="text-gray-500 text-sm flex items-center justify-center lg:justify-start gap-2">
              <Copyright class="w-4 h-4" strokeWidth={1.5} />
              2024 Abutolib. Barcha huquqlar himoyalangan.
            </p>
          </div>

          <!-- Tech Stack -->
          <div>
            <p class="text-gray-400 text-sm mb-3 text-center lg:text-right flex items-center justify-center lg:justify-end gap-2">
              <Zap class="w-4 h-4" strokeWidth={1.5} />
              Powered by
            </p>
            <div class="flex items-center space-x-6">
              <!-- Laravel -->
              <div class="group relative">
                <div class="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition transform hover:scale-110 cursor-pointer">
                  <svg class="w-10 h-10" viewBox="0 0 50 52" fill="none">
                    <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" fill="#FF2D20"/>
                  </svg>
                </div>
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Laravel
                </div>
              </div>

              <!-- Vue.js -->
              <div class="group relative">
                <div class="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition transform hover:scale-110 cursor-pointer">
                  <svg class="w-10 h-10" viewBox="0 0 256 221" fill="none">
                    <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883"/>
                    <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883"/>
                    <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E"/>
                  </svg>
                </div>
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Vue.js
                </div>
              </div>

              <!-- Tailwind CSS -->
              <div class="group relative">
                <div class="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition transform hover:scale-110 cursor-pointer">
                  <svg class="w-10 h-10" viewBox="0 0 256 154" fill="none">
                    <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="#06B6D4"/>
                  </svg>
                </div>
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Tailwind CSS
                </div>
              </div>

              <!-- Lucide Icons -->
              <div class="group relative">
                <div class="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition transform hover:scale-110 cursor-pointer">
                  <Sparkles class="w-10 h-10 text-purple-400" strokeWidth={1.5} />
                </div>
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  Lucide Icons
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {
  BookOpen, Facebook, Instagram, Twitter, Youtube, Zap, ArrowRight,
  Sparkles, Check, MessageSquare, MapPin, Phone, Mail, Code2, Copyright
} from 'lucide-vue-next'
</script>