<template>
  <div class="grid place-content-center my-5">
    <h2 class="text-4xl">Authentication</h2>
    <br>
    <button class="bg-stone-900 hover:bg-stone-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline center " @click="router.push('/sign-up')">Sign Up</button>
    <br>
    <button class="bg-stone-900 hover:bg-stone-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline center " @click="router.push('/sign-in')">Sign In</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

  //INIT
  const router = useRouter();
</script>