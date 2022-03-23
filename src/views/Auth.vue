<template>
  <div>
    <h2>This is Auth</h2>
    <button @click="router.push('/sign-up')">Sign Up</button>
    <button @click="router.push('/sign-in')">Sign In</button>
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