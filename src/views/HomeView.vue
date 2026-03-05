<template>
  <div class="space-y-32 pb-32 overflow-x-hidden">
    
    <section class="relative min-h-[90vh] flex items-center pt-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div class="absolute top-[-10%] right-[-5%] w-150 h-150 bg-blue-50/60 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[10%] left-[-5%] w-125 h-125 bg-indigo-50/60 rounded-full blur-[120px]"></div>
      </div>

      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div class="space-y-10 text-center lg:text-left">

            <h1 class="text-6xl md:text-8xl lg:text-[100px] font-black text-slate-950 leading-[0.9] tracking-tighter">
              Bilimni <br />
              <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                tizimli
              </span> <br />
              egallang.
            </h1>

            <p class="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
              Abutolib Quiz System — bu natijalar tahlili va shaxsiy o'sishga yo'naltirilgan zamonaviy ekotizimdir.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <RouterLink to="/login" class="px-12 py-5 bg-slate-950 text-white rounded-3xl font-bold text-xl shadow-2xl shadow-slate-300 hover:bg-blue-600 transition-all duration-300 active:scale-95">
                Boshlash
              </RouterLink>
              <RouterLink to="/about" class="px-12 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-3xl font-bold text-xl hover:bg-slate-50 transition-all duration-300 active:scale-95">
                Batafsil
              </RouterLink>
            </div>
          </div>

          <div class="relative grid grid-cols-2 gap-6 p-4">
            <div class="col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
              <div class="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-[120px] -z-0"></div>
              <div class="relative z-10 space-y-8">
                <div class="flex items-center gap-5">
                  <div class="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Zap class="w-7 h-7" />
                  </div>
                  <div>
                    <h4 class="font-black text-slate-900 text-xl">Haftalik Progress</h4>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-widest">Matematika va Fizika</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="flex justify-between text-sm font-black">
                    <span class="text-slate-500 uppercase tracking-tighter">Muvaffaqiyat ko'rsatkichi</span>
                    <span class="text-blue-600">88%</span>
                  </div>
                  <div class="w-full h-4 bg-slate-50 rounded-full p-1 border border-slate-100">
                    <div class="w-[88%] h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 flex flex-col justify-between aspect-square lg:aspect-auto">
              <div class="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <FileText class="w-6 h-6" />
              </div>
              <div>
                <div class="text-5xl font-black mb-1">500+</div>
                <div class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Sifatli testlar</div>
              </div>
            </div>

            <div class="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col items-center justify-center text-center gap-4">
              <div class="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Target class="w-8 h-8" />
              </div>
              <div>
                <div class="text-xl font-black text-slate-950">Top Reyting</div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">O'quvchilar tanlovi</div>
              </div>
            </div>

            <div class="absolute -bottom-6 -left-6 bg-slate-950 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce hidden md:flex">
              <Rocket class="w-5 h-5 text-blue-400" />
              <span class="text-sm font-bold">Tezkor natija</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 border-y border-slate-100 bg-slate-50/40 rounded-[4rem]">
      <div class="text-center max-w-3xl mx-auto mb-20 space-y-5 px-4">
        <h2 class="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px]">Afzalliklar</h2>
        <p class="text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">Nega aynan biz?</p>
      </div>

      <div class="grid md:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
        <div v-for="(feature, i) in features" :key="i" class="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
          <div :class="['h-20 w-20 rounded-[1.8rem] flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-sm', feature.bg]">
            <component :is="feature.icon" :class="['w-10 h-10', feature.color]" />
          </div>
          <h3 class="text-2xl font-black mb-5 text-slate-950">{{ feature.title }}</h3>
          <p class="text-slate-500 leading-relaxed text-lg font-medium">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <section class="px-4 max-w-7xl mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="(stat, idx) in stats" :key="idx" class="p-14 rounded-[3rem] text-center border border-slate-50 bg-white hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-md">
          <div class="text-6xl font-black text-slate-950 mb-4 tracking-tighter">{{ stat.value }}</div>
          <div class="text-slate-400 font-bold text-[11px] uppercase tracking-[0.3em]">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="px-4 max-w-7xl mx-auto">
      <div class="rounded-[4rem] bg-slate-950 p-16 lg:p-28 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] -z-0"></div>
        <div class="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-purple-600/20 blur-[100px] -z-0"></div>

        <div class="relative z-10 space-y-12">
          <h2 class="text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            O'z kelajagingizni <br /> hoziroq quring
          </h2>
          <p class="text-slate-400 text-xl lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
            Minglab talabalar kabi o'z bilimingizni sinashni boshlang. Ro'yxatdan o'tish mutlaqo bepul.
          </p>
          <div class="pt-6">
            <RouterLink to="/login" class="inline-flex items-center gap-5 rounded-[2.2rem] bg-white px-14 py-7 text-2xl font-black text-slate-950 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95 shadow-xl">
              Hoziroq boshlash
              <ArrowRight class="w-8 h-8" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Rocket, BookOpen, FileText, Zap, Target, ArrowRight } from 'lucide-vue-next'

const features = [
  { 
    title: 'Aniq tahlil', 
    desc: 'Har bir testdan so\'ng xatolaringiz ustida ishlash uchun batafsil statistika taqdim etiladi.', 
    icon: Target, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    title: 'Tezkor interfeys', 
    desc: 'Platforma barcha qurilmalarda birdek tez va silliq ishlashi uchun optimallashtirilgan.', 
    icon: Zap, 
    color: 'text-amber-500', 
    bg: 'bg-amber-50' 
  },
  { 
    title: 'Keng baza', 
    desc: 'Barcha fanlar bo\'yicha muntazam yangilanib boruvchi 500+ dan ortiq savollar to\'plami.', 
    icon: BookOpen, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50' 
  },
]

const stats = [
  { label: 'Foydalanuvchilar', value: '10K+' },
  { label: 'Ochiq Testlar', value: '567' },
  { label: 'Topshirildi', value: '50K+' },
  { label: 'Mamnunlik', value: '98%' },
]
</script>

<style scoped>
/* Silliq shrift ko'rinishi va ierarxiya uchun maxsus sozlamalar */
h1 {
  letter-spacing: -0.06em;
}

/* Scroll bo'lganda elementlarni silliq ko'rinishi uchun */
section {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>