<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center h-14">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <span class="text-sm font-bold text-white">WS</span>
            </div>
            <span class="font-semibold text-white text-sm">WeCode</span>
          </div>

          <!-- Menu Desktop -->
          <div class="hidden md:flex items-center gap-8">
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Tutorial
            </a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Roadmap
            </a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Kontak
            </a>
          </div>

          <!-- CTA Button -->
          <button class="hidden md:block px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded transition-colors">
            Mulai Belajar
          </button>

          <!-- Mobile Menu -->
          <button class="md:hidden text-gray-400 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gray-950 border-b border-gray-900">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div class="space-y-6">
            <div>
              <p class="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
                Platform Pembelajaran
              </p>
              <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
                Belajar Coding Jadi Mudah
              </h1>
              <p class="text-base text-gray-400 leading-relaxed mt-4 max-w-lg">
                Dapatkan akses ke ribuan tutorial, project nyata, dan roadmap lengkap untuk menjadi developer profesional.
              </p>
            </div>

            <!-- Features List -->
            <div class="space-y-3 pt-4">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <h3 class="text-sm font-medium text-white">Materi Lengkap</h3>
                  <p class="text-sm text-gray-500">Dari dasar hingga advanced dengan penjelasan mendalam</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <h3 class="text-sm font-medium text-white">Project Praktis</h3>
                  <p class="text-sm text-gray-500">Bangun portfolio dengan project nyata yang relevan</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <h3 class="text-sm font-medium text-white">Community Support</h3>
                  <p class="text-sm text-gray-500">Diskusi aktif dengan ribuan developer lainnya</p>
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <button class="px-6 py-2.5 bg-white text-gray-950 font-medium text-sm rounded hover:bg-gray-100 transition-colors">
                Mulai Gratis
              </button>
              <button class="px-6 py-2.5 border border-gray-800 text-white font-medium text-sm rounded hover:bg-gray-900 transition-colors">
                Lihat Katalog
              </button>
            </div>
          </div>

          <!-- Right Content - Code Block -->
          <div>
            <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 overflow-hidden">
              <!-- Copy Button -->
              <button class="absolute top-4 right-4 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded transition-colors">
                Salin
              </button>

              <!-- Code -->
              <pre class="text-xs leading-relaxed font-mono text-gray-300 overflow-x-auto"><code><span class="text-gray-500">const</span> <span class="text-gray-100">menu</span> <span class="text-gray-500">=</span> {
  <span class="text-gray-500">// Tutorial lengkap</span>
  <span class="text-gray-100">belajar</span><span class="text-gray-500">:</span> <span class="text-green-600">'Tutorial'</span>,

  <span class="text-gray-500">// Jalur pembelajaran</span>
  <span class="text-gray-100">roadmap</span><span class="text-gray-500">:</span> <span class="text-green-600">'Karir Developer'</span>,

  <span class="text-gray-500">// Tools profesional</span>
  <span class="text-gray-100">toolbox</span><span class="text-gray-500">:</span> <span class="text-green-600">'Dev Tools'</span>,

  <span class="text-gray-500">// Komunitas aktif</span>
  <span class="text-gray-100">community</span><span class="text-gray-500">:</span> <span class="text-green-600">'1000+ Members'</span>
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-950 border-b border-gray-900">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">500+</div>
            <p class="text-sm text-gray-500">Tutorial & Artikel</p>
          </div>
          <div class="text-center border-l border-r border-gray-800">
            <div class="text-3xl font-bold text-white mb-1">50+</div>
            <p class="text-sm text-gray-500">Project Nyata</p>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">10K+</div>
            <p class="text-sm text-gray-500">Learner Aktif</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="bg-gray-950 border-b border-gray-900">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-2">Mengapa Memilih WeCode?</h2>
          <p class="text-gray-500 text-sm">Platform pembelajaran coding yang dirancang untuk profesional modern</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <div class="w-10 h-10 bg-gray-800 rounded mb-4 flex items-center justify-center">
              <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM5.757 5.757a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2 text-sm">Learning Path Terstruktur</h3>
            <p class="text-gray-500 text-sm">Ikuti jalur pembelajaran yang dirancang khusus untuk mencapai goal Anda</p>
          </div>

          <!-- Card 2 -->
          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <div class="w-10 h-10 bg-gray-800 rounded mb-4 flex items-center justify-center">
              <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2 text-sm">Komunitas Suportif</h3>
            <p class="text-gray-500 text-sm">Belajar bersama ribuan developer dan dapatkan bantuan kapan saja</p>
          </div>

          <!-- Card 3 -->
          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <div class="w-10 h-10 bg-gray-800 rounded mb-4 flex items-center justify-center">
              <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.697 9.586a1 1 0 00-1.414-1.414L9 10.172 7.854 9.026a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5.586-5.586z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2 text-sm">Sertifikasi Profesional</h3>
            <p class="text-gray-500 text-sm">Dapatkan sertifikat yang diakui industri untuk meningkatkan karir Anda</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="bg-gray-950 border-b border-gray-900">
      <div class="max-w-6xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-white mb-12">Kategori Belajar</h2>

        <div class="grid md:grid-cols-4 gap-4">
          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all cursor-pointer">
            <h3 class="font-semibold text-white mb-1 text-sm">Frontend</h3>
            <p class="text-gray-500 text-xs">HTML, CSS, JavaScript, React, Vue</p>
          </div>

          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all cursor-pointer">
            <h3 class="font-semibold text-white mb-1 text-sm">Backend</h3>
            <p class="text-gray-500 text-xs">Node.js, Python, PHP, Database</p>
          </div>

          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all cursor-pointer">
            <h3 class="font-semibold text-white mb-1 text-sm">Mobile</h3>
            <p class="text-gray-500 text-xs">React Native, Flutter, Swift</p>
          </div>

          <div class="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 hover:bg-gray-800/50 transition-all cursor-pointer">
            <h3 class="font-semibold text-white mb-1 text-sm">DevOps</h3>
            <p class="text-gray-500 text-xs">Docker, Kubernetes, CI/CD</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold text-white mb-3">Siap Untuk Mulai?</h2>
        <p class="text-gray-500 text-sm mb-6 max-w-md mx-auto">Bergabunglah dengan ribuan developer yang sudah meningkatkan skill mereka</p>
        <button class="px-8 py-3 bg-white text-gray-950 font-medium rounded hover:bg-gray-100 transition-colors">
          Buat Akun Gratis
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-950 border-t border-gray-900">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <span class="text-xs font-bold text-white">WS</span>
              </div>
              <span class="font-semibold text-white text-sm">WeCode</span>
            </div>
            <p class="text-gray-500 text-xs">Platform pembelajaran coding terlengkap untuk developer Indonesia</p>
          </div>

          <div>
            <h4 class="text-white font-semibold text-sm mb-3">Kategori</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Frontend</a></li>
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Backend</a></li>
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold text-sm mb-3">Perusahaan</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Tentang</a></li>
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Karir</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold text-sm mb-3">Lainnya</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Kebijakan</a></li>
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Syarat</a></li>
              <li><a href="#" class="text-gray-500 text-xs hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8">
          <p class="text-gray-500 text-xs text-center">© 2024 WeCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Vue 3 Composition API - minimal logic needed
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
}

.app {
  background-color: #030712;
  color: #f8f8f8;
}
</style>