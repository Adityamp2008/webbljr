<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios"

const massage = ref("");

onMounted(async () => {
    try{
        const response = await axios.get("http://localhost:5000/api/cekcon");
        massage.value = response.data.massage;
    } catch (error) {
    console.error(error);
  }
});

</script>
<template>
    <div>
        <h1>{{massage}}</h1>
    </div>
</template>