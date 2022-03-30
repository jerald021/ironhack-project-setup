<template>
  <div class="grid place-content-center my-5">
    <h2 class="text-4xl my-5 grid place-content-center">Sign In</h2>
    <div class="w-full max-w-xs">
      <form
        @submit.prevent="formSubmit"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="signIn"
            class="bg-stone-900 hover:bg-stone-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline center"
            type="submit"
          >
            Sign In
          </button>
          <button
            @click="router.push('/auth')"
            class="bg-stone-900 hover:bg-stone-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline center"
            type="submit"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { useTaskStore } from "../store/task.js";

import { useRouter } from "vue-router";
import { ref } from "vue";

//VARS 
const router = useRouter();
const user = useUserStore();

const task = useTaskStore();
const printTasks = ref([]);

const email = ref(null);
const password = ref(null);

//METHODS
const doTask = async () => {
  printTasks.value = await task.fetchTasks();
  // console.log(printTasks.value);
};
// FUNCTIONS
const signIn = async () => {
  if (user.signIn(email.value, password.value)) {
    router.push({
      path: "/",
    });
    await doTask();
  }
};
</script>