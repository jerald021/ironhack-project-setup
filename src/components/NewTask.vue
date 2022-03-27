<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-2xl font-bold mb-2" for="username">
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
</template>

<script setup></script>
