<template>
  <h1 class="text-3xl">Welcome {{ user.user.email }}!</h1>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
const user = useUserStore();

const getUser = async () => {
  await user;
};
</script>