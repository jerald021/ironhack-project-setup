<template>
  <div>
      <h2>Sign In</h2>

    <form @submit.prevent="formSubmit">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" v-model="email" />
        <br>
        <label for="password">Enter your password:</label>
        <input type="password" id="password" v-model="password" />
        <br>
        <button type="submit" @click="signIn">Sign In</button>
        <button @click="router.push('/auth')">Back</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../store/user.js'
import { useRouter } from 'vue-router'

export default {
  setup(){
      const router = useRouter();
      const user = useUserStore();

      const signIn =  () => {
          user.signIn(email.value, password.value);
      }
      return{
          router,
          signIn,
      }
  }
}
</script>