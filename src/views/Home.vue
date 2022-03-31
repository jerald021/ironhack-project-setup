<template>
  <div class=" grid place-content-center my-5">
    <h1 class="text-3xl">Welcome {{ user.user.email }}!</h1>

    <TaskItem />

    <button
      @click="signOut"
      class="bg-stone-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { useRouter } from "vue-router";

import AppHeader from "../components/AppHeader.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";

//SYSTEM
const router = useRouter();
const user = useUserStore();

const signOut = () => {
  if (user.signOut()) {
    router.push({
      path: "/auth",
    });
  }
};
</script>
<style>

</style>