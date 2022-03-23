<template>
  <div>
    <h2 class="text-2xl text-blue-800">This is Auth</h2>
    <br>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="router.push('/sign-up')">Sign Up</button>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="router.push('/sign-in')">Sign In</button>
  </div>
</template>

<script>
import { ref } from 'vue-demi'
import { useRouter } from 'vue-router'

export default {
  //INIT
  setup(){
      const router = useRouter();      

    return{
      router,
    }
  }
}
</script>