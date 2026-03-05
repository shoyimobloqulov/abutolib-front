<template>
  <footer class="relative bg-slate-50/50 border-t border-slate-200/60 pt-20 pb-10 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
        
        <div class="lg:col-span-4 space-y-8">
          <RouterLink to="/" class="flex items-center gap-3 group">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl shadow-blue-500/20 transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" class="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5V19.5M4.5 12H19.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-black tracking-tight text-slate-900 uppercase leading-none">Abutolib</span>
              <span class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mt-1">Test tizimi</span>
            </div>
          </RouterLink>
          
          <p class="text-slate-500 leading-relaxed text-[15px] max-w-sm">
            Intellektual salohiyatingizni biz bilan kashf eting. Eng so'nggi texnologiyalar asosida qurilgan interaktiv ta'lim platformasi.
          </p>

          <div class="flex items-center gap-3">
            <a v-for="(social, index) in socials" :key="index" :href="social.link" 
               class="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm">
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h4 class="text-slate-900 font-bold mb-7 text-sm uppercase tracking-widest">Platforma</h4>
            <ul class="space-y-4">
              <li v-for="item in ['Asosiy', 'Fanlar', 'Statistika', 'Yangiliklar']" :key="item">
                <a href="#" class="text-slate-500 hover:text-blue-600 transition-colors text-[15px] inline-flex items-center group">
                  <span class="w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-slate-900 font-bold mb-7 text-sm uppercase tracking-widest">Yordam</h4>
            <ul class="space-y-4">
              <li v-for="item in ['FAQ', 'Support', 'Maxfiylik', 'Shartlar']" :key="item">
                <a href="#" class="text-slate-500 hover:text-blue-600 transition-colors text-[15px] inline-flex items-center group">
                  <span class="w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 md:col-span-1">
            <h4 class="text-slate-900 font-bold mb-7 text-sm uppercase tracking-widest">Bog'lanish</h4>
            <ul class="space-y-5">
              <li class="flex items-start gap-4 text-[14px] text-slate-500">
                <div class="mt-1 h-8 w-8 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <MapPin class="w-4 h-4" />
                </div>
                <span>Toshkent, Yunusobod 15-mavze.</span>
              </li>
              <li class="flex items-center gap-4 text-[14px] text-slate-500">
                <div class="h-8 w-8 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Mail class="w-4 h-4" />
                </div>
                <span>info@abutolib.uz</span>
              </li>
              <li class="flex items-center gap-4 text-[14px] text-slate-500">
                <div class="h-8 w-8 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <PhoneCall class="w-4 h-4" />
                </div>
                <span>+998 90 123 45 67</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-slate-400 text-sm font-medium">
          © {{ new Date().getFullYear() }} <span class="text-slate-900">Abutolib.</span> Barcha huquqlar himoyalangan.
        </div>
        
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <span>Made with</span>
            <Heart class="w-4 h-4 text-rose-500 fill-rose-500" />
            <span class="font-bold text-slate-700 underline underline-offset-4 decoration-blue-500/30">Abutolib Team</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Mail, 
  PhoneCall, 
  Heart 
} from 'lucide-vue-next'

const socials = [
  { icon: Facebook, link: '#' },
  { icon: Instagram, link: '#' },
  { icon: Twitter, link: '#' }
]
</script>