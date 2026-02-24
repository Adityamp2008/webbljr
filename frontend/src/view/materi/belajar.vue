<template>
  <div class="min-h-screen bg-[#F3F3F3] font-sans">
    
    <nav class="bg-[#282A35] h-10 flex items-stretch overflow-x-auto no-scrollbar">
      <a 
        v-for="item in menuItems" 
        :key="item"
        href="#" 
        @click.prevent="activeTab = item"
        :class="[
          'flex items-center px-6 text-white text-sm uppercase tracking-wide transition-colors duration-200',
          activeTab === item ? 'bg-[#0d6efd]' : 'hover:bg-[#0d6efd] '
        ]"
      >
        {{ item }}
      </a>
    </nav>

    <main class="p-6 md:p-10">
      <div class="max-w-5xl mx-auto">
        
        <transition name="slide-fade" mode="out-in">
          <div :key="activeTab" class="bg-white p-8 rounded shadow-sm border border-slate-200">
            
            <div class="flex items-center gap-4 mb-6">
              <h1 class="text-4xl font-black uppercase text-slate-800">{{ activeTab }} Tutorial</h1>
              <span class="bg-slate-100 text-slate-500 px-3 py-1 rounded text-xs font-bold">PROG-2026</span>
            </div>

            <div class="space-y-6">
              <p class="text-lg text-slate-600 leading-relaxed">
                Selamat datang di modul <strong>{{ activeTab }}</strong>. Di sini kamu akan mempelajari dasar-dasar hingga tingkat lanjut untuk menjadi seorang expert.
              </p>

              <div class="bg-[#E7E9EB] p-6 rounded-lg border-l-4 border-[#282A35]">
                <h3 class="font-bold mb-2">Contoh Kode {{ activeTab }}:</h3>
                <pre class="font-mono text-sm text-indigo-700"><code>{{ getExampleCode(activeTab) }}</code></pre>
              </div>

              <button class="bg-[#0d6efd] hover:bg-[#0d7efd] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg active:scale-95">
                Mulai Belajar Sekarang
              </button>
            </div>

          </div>
        </transition>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('html');

const menuItems = ['html', 'javascript', 'css', 'php', 'python', 'sql'];
const getExampleCode = (tab) => {
  const codes = {
    html: '<h1>Hello World</h1>',
    javascript: 'console.log("Hello World");',
    css: 'body { color: blue; }',
    php: '<?php echo "Hello World"; ?>',
    python: 'print("Hello World")',
    sql: 'SELECT * FROM users;'
  };
  return codes[tab] || '// No code available';
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animasi Perpindahan Konten */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>