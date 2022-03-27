<template>
  <div class="grid place-content-center my-5">
    <h1 class="text-3xl">Welcome {{currentUser.email}}!</h1>
    <br />

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

    <div class="flex items-center justify-between">
      <button
        @click="newTask"
        class="bg-stone-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-80"
        type="button"
      >
        New Task
      </button>
    </div>

    <table class="table-auto my-12">
      <thead>
        <tr>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2 ">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="printTask in printTasks" :key="printTask.id">
          <td class="border px-4 py-2 font-semibold">{{ printTask.title }}</td>
          <td class="border px-4 py-2 grid place-content-center">
            <div>
              <img
                @click="edit"
                class="w-8"
                src="../assets/edit-interface-sign.png"
                alt=""
              />

              <br />
              <img
                @click="complete"
                class="w-8"
                src="../assets/checked-symbol.png"
                alt=""
              />

              <br />
              <img
                @click="deleteItem"
                class="w-8"
                src="../assets/cross-mark-on-a-black-circle-background.png"
                alt=""
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br />

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
import { useTaskStore } from "../store/task.js";
import { useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";

const router = useRouter();
const user = useUserStore();
const task = useTaskStore();
const newItem = ref("");
const newTitle = ref("");
const currentUser = ref([]);

const printTasks = ref([]);

const doTask = async () => {
  printTasks.value = await task.fetchTasks();
  return printTasks;
  console.log(printTasks.value);
};

const getUser = async () => {
  currentUser.value = await user.fetchUser();
  // console.log(currentUser.value);
  // return printTasks;
};
//CALLS
doTask();
getUser();

// FUNCTIONS
const signOut = () => {
  user.signOut();
  router.push({
    path: "/auth",
  });
};
const newTask = () => {
  // console.log(user.fetchUser());
  task.insertTask(newItem.value, currentUser.value);
  newItem.value = "";
  doTask();
};
const edit = () => {
  task.updateTask(newTitle.value);
};
const complete = () => {
  console.log("this is complete");
};
const deleteItem = () => {
  task.deleteTask(printTasks.value);
  doTask();
};
</script>
