<template>
  <div class="my-6">
    <div class="mb-4">
      <label class="hidden text-gray-700 text-2xl font-bold mb-2" for="task">
        Add new task
      </label>
      <input
        v-model="newItem"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task"
        type="text"
        placeholder="Task name..."
      />
    </div>

    <div class="flex items-center justify-between">
      <button
        @click="newTask"
        class="bg-stone-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        New Task
      </button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { useTaskStore } from "../store/task.js";
import { ref } from "vue";

const task = useTaskStore();
const user = useUserStore();
const newItem = ref("");

const newTask = async () => {
  task.insertTask(newItem.value, user.user);
  newItem.value = "";
  // await doTask();
};
</script>