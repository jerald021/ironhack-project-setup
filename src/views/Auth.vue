<template>
  <div class="grid place-content-center my-5">
    <h2 class="text-2xl text-blue-800">This is Auth</h2>
    <br>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="router.push('/sign-up')">Sign Up</button>
    <br>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="router.push('/sign-in')">Sign In</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

  //INIT
  const router = useRouter();
</script>