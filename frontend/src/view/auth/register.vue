<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100 p-4 md:p-6 font-sans text-slate-900">
    <div class="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row shadow-indigo-100/50">
      
      <!-- Left Image -->
      <div class="hidden md:block md:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Coding Background"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent flex flex-col justify-end p-12 text-white">
          <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h2 class="text-2xl font-bold mb-2 text-white">Start Your Journey.</h2>
            <p class="text-indigo-100 text-sm leading-relaxed">
              Buat akun dan mulai perjalanan codingmu hari ini bersama DevLearn.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Form -->
      <div class="w-full md:w-1/2 p-8 md:p-14">

        <!-- Logo -->
        <div class="flex items-center gap-2 mb-8 justify-center md:justify-start">
          <div class="bg-indigo-600 p-2 rounded-lg">
            <CodeIcon :size="20" class="text-white" />
          </div>
          <span class="font-bold text-xl tracking-tight text-slate-800">DevLearn</span>
        </div>

        <!-- Title -->
        <div class="mb-10 text-center md:text-left">
          <h1 class="text-3xl font-extrabold text-slate-800 tracking-tight">Register</h1>
          <p class="text-slate-500 mt-2 font-medium">Buat akun baru untuk mulai belajar 🚀</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleRegister" class="space-y-6">

          <!-- Nama -->
          <div class="space-y-2">
            <label class="block text-sm font-semibold text-slate-700 ml-1">Nama Lengkap</label>
            <input 
              v-model="form.name"
              type="text" 
              placeholder="Nama lengkap"
              class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-200"
              required
            />
          </div>

          <!-- Email -->
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

          <!-- Password -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 ml-1">Password</label>
            <div class="relative group">
              <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                <LockIcon :size="18" />
              </span>
              <input 
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Minimal 6 karakter"
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

          <!-- Confirm Password -->
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-700 ml-1">Konfirmasi Password</label>
            <input 
              v-model="form.confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Ulangi password"
              class="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-200"
              required
            />
          </div>

          <!-- Button -->
          <button 
            type="submit"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
          >
            <span>Buat Akun</span>
            <ChevronRightIcon :size="18" />
          </button>
        </form>

        <!-- Footer -->
        <div class="mt-10 text-center">
          <p class="text-sm text-slate-500 font-medium">
            Sudah punya akun? 
            <a href="#" class="text-indigo-600 font-bold hover:underline underline-offset-4 decoration-2">Login</a>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { 
  Mail as MailIcon, 
  Lock as LockIcon, 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon,
  Code as CodeIcon,
  ChevronRight as ChevronRightIcon
} from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)

const handleRegister = () => {
  if (form.password.length < 6) {
    alert("Password minimal 6 karakter!")
    return
  }

  if (form.password !== form.confirmPassword) {
    alert("Password tidak sama!")
    return
  }

  alert(`Register berhasil untuk ${form.name} 🎉`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

div {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>