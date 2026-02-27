<template>
  <div class="app">
    <!-- NAVBAR -->
    <nav class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950 px-8">
      <div class="flex justify-between items-center h-14">
        <!-- LEFT -->
        <div class="flex items-center gap-2">
          <div
            class="w-9 h-9 bg-gray-800 rounded flex items-center justify-center rounded-full"
          >
            <span class="text-sm font-bold text-white">
              <img src="../../public/assets/img/icon.png" alt="" class="rounded-full" />
            </span>
          </div>
          <span class="font-semibold text-white text-sm">ayokngoding</span>

          <div class="hidden md:flex items-center gap-8 ml-5">
            <router-link
              to="/"
              class="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Home
            </router-link>
            <router-link
              to="/belajar"
              class="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Tutorial
            </router-link>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Roadmap
            </a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Kontak
            </a>
          </div>
        </div>

        <!-- CENTER SEARCH -->
        <div class="hidden md:flex">
          <button
            @click="openSearch"
            class="px-8 py-2 bg-gray-900 border border-gray-800 rounded text-gray-400 text-sm hover:text-white hover:border-gray-700 transition-all"
          >
            🔍 Search...
          </button>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="min-h-screen flex items-center bg-gray-950 border-b border-gray-900">
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- LEFT -->
          <div class="space-y-6" data-aos="fade-up">
            <div>
              <p class="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">
                Platform Pembelajaran
              </p>

              <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
                Belajar Coding Jadi Mudah
              </h1>

              <p class="text-base text-gray-400 leading-relaxed mt-4 max-w-lg">
                Dapatkan akses ke ribuan tutorial, project nyata, dan roadmap lengkap
                untuk menjadi developer profesional.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                class="px-6 py-2.5 bg-white text-gray-950 font-medium text-sm rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Mulai Gratis
              </button>

              <button
                class="px-6 py-2.5 border border-gray-800 text-white font-medium text-sm rounded hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              >
                Lihat Katalog
              </button>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="relative" data-aos="fade-left">
            <div
              class="bg-gray-900 rounded-xl border border-gray-800 p-6 shadow-xl relative"
            >
              <pre
                class="text-xs leading-relaxed font-mono text-gray-300 overflow-x-auto"
              ><code>
<span class="text-gray-500">const</span> <span class="text-white">menu</span> <span class="text-gray-500">=</span> {
  <span class="text-gray-500">// Tutorial lengkap</span>
  <span class="text-white">belajar</span>: <span class="text-green-500">'Tutorial'</span>,

  <span class="text-gray-500">// Jalur pembelajaran</span>
  <span class="text-white">roadmap</span>: <span class="text-green-500">'Karir Developer'</span>,

  <span class="text-gray-500">// Tools profesional</span>
  <span class="text-white">toolbox</span>: <span class="text-green-500">'Dev Tools'</span>,

  <span class="text-gray-500">// Komunitas aktif</span>
  <span class="text-white">community</span>: <span class="text-green-500">'1000+ Members'</span>
}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEARCH MODAL -->
    <div
      v-if="showSearch"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-40 z-50"
      @keydown.esc="closeSearch"
      tabindex="0"
    >
      <div
        class="bg-gray-900 w-full max-w-xl rounded-xl p-6 border border-gray-800 shadow-2xl"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-white font-semibold">Cari Tutorial</h2>
          <button @click="closeSearch" class="text-gray-400 hover:text-white">✕</button>
        </div>

        <input
          type="text"
          placeholder="Ketik sesuatu..."
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white outline-none focus:border-white"
          autofocus
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import AOS from "aos";
import api from "@/api";
import "aos/dist/aos.css";

const showSearch = ref(false);

const openSearch = () => {
  showSearch.value = true;
};

const closeSearch = () => {
  showSearch.value = false;
};

// Disable scroll when modal active
watch(showSearch, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
});

//pengaturan api

const categories = ref([]);

onMounted(async () => {
  try {
    const { data } = await api.get("/api/categories");
    categories.value = data;
  } catch (err) {
    console.error("gagal mendapatkan data".err);
  }
});
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
}

.app {
  background-color: #030712;
  color: #f8f8f8;
}
</style>
