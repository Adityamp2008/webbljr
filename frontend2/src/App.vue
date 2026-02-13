<template>
  <div>
    <!-- Layout tetap -->
    <header class="bg-slate-800 text-white p-4">
      <h1>My App</h1>
    </header>

    <!-- TEMPAT VIEW MASUK -->
    <main class="p-4">
      <router-view />
    </main>

    <footer class="bg-slate-900 text-white p-4">
      Footer
    </footer>
  </div>
</template>
