<template>
  <div class="app min-h-screen flex flex-col">
    <!-- NAVBAR -->
    <nav class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950 px-8">
      <div class="flex justify-between items-center h-14">
        <!-- LEFT -->
        <div class="flex items-center gap-2">
          <div
            class="w-9 h-9 bg-gray-800 rounded flex items-center justify-center rounded-full"
          >
            <span class="text-sm font-bold text-white">
              <img src="../assets/img/icon.png" alt="" class="rounded-full" />
            </span>
          </div>
          <span class="font-semibold text-white text-sm">ayokngoding</span>

          <div class="hidden md:flex items-center gap-8 ml-5">
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
    <!-- MAIN CONTENT -->
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <Card />
      </div>
    </main>
  </div>
</template>

<script setup>
import Card from "../layouts/card.vue";
const openSearch = () => {
  console.log("Search clicked");
};
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
