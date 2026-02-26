<template>
  <div class="app">
    <!-- Background Layer -->
    <div class="bg-wrapper">
      <div class="blob-blue"></div>
      <div class="blob-white"></div>
    </div>

    <!-- Content -->
    <div class="content">
      <h1>Vue Modern Background</h1>
      <p>Clean & Professional</p>
    </div>
  </div> 
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: #0F172A; /* Base Dark */
  position: relative;
  overflow: hidden;
  color: #F8FAFC;
}

/* Background Wrapper */
.bg-wrapper {
  position: fixed;
  inset: 0;
  z-index: 0;
}

/* Blue Blob */
.blob-blue {
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #1E3A8A, transparent 70%);
  filter: blur(140px);
  top: 10%;
  left: 15%;
  opacity: 0.8;
}

/* White Soft Glow */
.blob-white {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%);
  filter: blur(120px);
  bottom: 10%;
  right: 20%;
}

/* Content */
.content {
  position: relative;
  z-index: 10;
  padding: 4rem;
}
</style>