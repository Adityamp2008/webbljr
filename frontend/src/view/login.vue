<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMsg = ref("");

const router = useRouter();

async function login() {
  try {
    loading.value = true;
    errorMsg.value = "";

    const res = await api.post("/auth/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", res.data.token);
    router.push("/dashboard");

  } catch (err) {
    errorMsg.value = "Email atau password salah";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h1>Admin Login</h1>

      <div v-if="errorMsg" class="error">
        {{ errorMsg }}
      </div>

      <div class="form-group">
        <label>Email</label>
        <input 
          v-model="email" 
          type="email" 
          placeholder="Masukkan email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input 
          v-model="password" 
          type="password" 
          placeholder="Masukkan password"
        />
      </div>

      <button @click="login" :disabled="loading">
        {{ loading ? "Loading..." : "Login" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 350px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  text-align: center;
}

.login-card h1 {
  margin-bottom: 25px;
}

.form-group {
  text-align: left;
  margin-bottom: 15px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s;
}

.form-group input:focus {
  border-color: #4f46e5;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #4f46e5;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #4338ca;
}

button:disabled {
  background: gray;
  cursor: not-allowed;
}

.error {
  background: #fee2e2;
  color: #b91c1c;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 14px;
}
</style>