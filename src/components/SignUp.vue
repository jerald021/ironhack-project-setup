<template>
<div>
    <h2>Register new user</h2>

    <form @submit.prevent="formSubmit">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" v-model="email" />
        <br>
        <label for="password">Enter your password:</label>
        <input type="password" id="password" v-model="password" />
        <br>
        <button type="submit" @click="signUp">Sign Up</button>
        <button @click="router.push('/auth')">Back</button>
    </form>
</div>
</template>

<script>
import { ref } from 'vue-demi'
import { useUserStore } from '../store/user.js'
import { useRouter } from 'vue-router'

export default {
    //INIT
  setup(){
    const router = useRouter();
    const user = useUserStore();

    const signUp = () => {
        user.signUp(email.value, password.value);
    }
    return{
        router,
        signUp,
    }
  }

}
</script>