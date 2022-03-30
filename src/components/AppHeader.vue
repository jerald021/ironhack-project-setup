<template>
  <h1 class="text-3xl">Welcome {{ currentUser }}!</h1>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
const user = useUserStore();
const currentUser = user.user.email;

console.log(currentUser);
// const getUser = async () => {
//   await user;
//   currentUser = user.user.email;
// };
// getUser();
</script>