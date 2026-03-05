<template>
  <div class="login min-h-screen relative flex items-center justify-center py-12 px-4 overflow-hidden bg-slate-50">
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    </div>

    <div class="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
      <div class="hidden lg:block">
        <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3.5rem] p-16 text-white shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full"></div>
          <Rocket class="w-24 h-24 mb-10 text-blue-100" />
          <h2 class="text-6xl font-black mb-8 leading-tight">Bilimni <br/> tizimli sinang.</h2>
          <div class="space-y-6">
            <div v-for="item in ['Tezkor natijalar', 'Aniq tahlil', 'Keng baza']" :key="item" class="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <CheckCircle2 class="w-6 h-6" />
              </div>
              <span class="font-bold text-xl">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] p-12 lg:p-16 border border-slate-100">
        <div class="text-center mb-12">
          <div class="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-inner">
            <Lock class="w-12 h-12" />
          </div>
          <h1 class="text-5xl font-black text-slate-900 mb-3 tracking-tight">Kirish</h1>
          <p class="text-slate-500 font-bold text-lg">Platformaga xush kelibsiz!</p>
        </div>

        <form @submit.prevent="submitLogin" class="space-y-8">
          <div class="space-y-3">
            <label class="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email</label>
            <div class="relative group">
              <Mail class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors w-6 h-6" />
              <input v-model="form.email" type="email" required :disabled="auth.loading" class="w-full pl-16 pr-6 py-6 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:bg-white focus:border-blue-600 outline-none transition-all text-xl font-bold" placeholder="mail@example.com" />
            </div>
          </div>

          <div class="space-y-3">
            <label class="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Parol</label>
            <div class="relative group">
              <Lock class="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors w-6 h-6" />
              <input v-model="form.password" :type="showPass ? 'text' : 'password'" required :disabled="auth.loading" class="w-full pl-16 pr-20 py-6 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:bg-white focus:border-blue-600 outline-none transition-all text-xl font-bold" placeholder="••••••••" />
              <button type="button" @click="showPass = !showPass" class="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600">
                <Eye v-if="showPass" class="w-6 h-6" />
                <EyeOff v-else class="w-6 h-6" />
              </button>
            </div>
          </div>

          <button type="submit" :disabled="auth.loading" class="w-full bg-slate-950 text-white py-6 rounded-3xl font-black text-2xl hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl disabled:bg-slate-300 flex items-center justify-center gap-4">
            <span v-if="auth.loading" class="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></span>
            <span v-else>Tizimga kirish</span>
          </button>

          <div v-if="errorMessage" class="bg-red-50 border-2 border-red-100 text-red-600 px-8 py-5 rounded-3xl font-bold text-center animate-shake">
            {{ errorMessage }}
          </div>
        </form>

        <div class="mt-12 text-center border-t border-slate-100 pt-10">
          <p class="text-slate-400 font-bold text-lg">Hisobingiz yo'qmi? <RouterLink to="/register" class="text-blue-600 hover:text-blue-700 ml-1">Ro'yxatdan o'ting</RouterLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Lock, Mail, Eye, EyeOff, Rocket, CheckCircle2 } from 'lucide-vue-next';

const auth = useAuthStore();
const showPass = ref(false);
const errorMessage = ref('');
const form = ref({ email: '', password: '' });

const submitLogin = async () => {
  errorMessage.value = '';
  try {
    await auth.login(form.value);
  } catch (e) {
    errorMessage.value = 'Email yoki parol noto\'g\'ri kiritildi';
  }
};
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}
.animate-shake { animation: shake 0.4s ease-in-out; }
</style>