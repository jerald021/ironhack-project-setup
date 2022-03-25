<template>
  <div>
    <h1>Welcome! This is the home page</h1>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Add new task
      </label>
      <input
        v-model="newItem"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task"
        type="text"
        placeholder="input"
      />
    </div>

    <div class="flex items-center justify-between">
      <button
        @click="newTask"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        New Task
      </button>
    </div>

    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="printTask in printTasks" :key="printTask.id">
          <td>{{ printTask.title }}</td>
          <td class="border px-4 py-2">
            <div>
              <button
                @click="edit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Edit
              </button>
              <br />
              <button
                @click="complete"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Complete
              </button>
              <br />
              <button
                @click="deleteItem"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 mx-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br />

    <button
      @click="signOut"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/user.js";
import { useTaskStore } from "../store/task.js";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";

const router = useRouter();
const user = useUserStore();
const task = useTaskStore();
const newItem = ref("");

const printTasks = ref([]);

const doTask = async () => {
  printTasks.value = await task.fetchTasks();
  return printTasks;
};
doTask();

// FUNCTIONS
const signOut = () => {
  user.signOut();
  router.push({
    path: "/auth",
  });
};
const newTask = () => {
  task.insertTask(newItem.value);
  doTask();
  newItem.value = "";
};
const edit = () => {
  task.updateTask(newTitle.value);
};
const complete = () => {
  console.log("this is complete");
};
const deleteItem = () => {
  task.deleteTask();
    doTask();
};

</script>