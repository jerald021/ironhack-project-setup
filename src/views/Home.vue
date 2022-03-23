<template>
<div>
    <h1>Welcome! This is the home page</h1>
    <button @click="signOut">Sign Out</button>
</div>
</template>

<script>
import { useUserStore } from '../store/user.js'
import { useRouter } from 'vue-router'

export default {
    setup(){
    const router = useRouter();
    const user = useUserStore();

    const signOut = () => {
        user.signOut();
    }
    return{
        router,
        signOut,
    }
  }

}
</script>

<style>

</style>