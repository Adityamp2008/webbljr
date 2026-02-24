<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100 p-4 md:p-6 font-sans text-slate-900">
    <div class="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:row-reverse md:flex-row shadow-indigo-100/50">
      
      <div class="hidden md:block md:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
          alt="Coding Background"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent flex flex-col justify-end p-12 text-white">
          <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h2 class="text-2xl font-bold mb-2 text-white">Code Your Future.</h2>
            <p class="text-indigo-100 text-sm leading-relaxed">
              Platform belajar pemrograman interaktif. Masuk untuk melanjutkan progres belajarmu hari ini.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 p-8 md:p-14">
        <div class="flex items-center gap-2 mb-8 justify-center md:justify-start">
          <div class="bg-indigo-600 p-2 rounded-lg">
            <CodeIcon :size="20" class="text-white" />
          </div>
          <span class="font-bold text-xl tracking-tight text-slate-800">DevLearn</span>
        </div>

        <div class="mb-10 text-center md:text-left">
          <h1 class="text-3xl font-extrabold text-slate-800 tracking-tight">Login</h1>
          <p class="text-slate-500 mt-2 font-medium">Selamat datang kembali, Programmer!</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-semibold text-slate-700 ml-1">Email</label>
            <div class="relative group">
              <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                <MailIcon :size="18" />
              </span>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="nama@email.com"
                class="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-200"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center px-1">
              <label class="text-sm font-semibold text-slate-700">Password</label>
              <a href="#" class="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Lupa Password?</a>
            </div>
            <div class="relative group">
              <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                <LockIcon :size="18" />
              </span>
              <input 
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="••••••••"
                class="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-200"
                required
              />
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                <EyeIcon v-if="!showPassword" :size="18" />
                <EyeOffIcon v-else :size="18" />
              </button>
            </div>
          </div>

          <label class="flex items-center group cursor-pointer w-fit">
            <div class="relative flex items-center">
              <input type="checkbox" class="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 checked:bg-indigo-600 checked:border-indigo-600 transition-all" />
              <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              </span>
            </div>
            <span class="ml-3 text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">Ingat saya</span>
          </label>

          <button 
            type="submit"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
          >
            <span>Masuk ke Akun</span>
            <ChevronRightIcon :size="18" />
          </button>
        </form>

        <div class="mt-10 text-center">
          <p class="text-sm text-slate-500 font-medium">
            Belum punya akun? 
            <a href="#" class="text-indigo-600 font-bold hover:underline underline-offset-4 decoration-2">Daftar Sekarang</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { 
  Mail as MailIcon, 
  Lock as LockIcon, 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon,
  Code as CodeIcon,
  ChevronRight as ChevronRightIcon
} from 'lucide-vue-next';

const form = reactive({
  email: '',
  password: ''
});

const showPassword = ref(false);

// Methods
const handleLogin = () => {
  alert(`Mencoba login dengan: ${form.email}`);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

div {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>