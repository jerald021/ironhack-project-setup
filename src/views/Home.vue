<template>
  <div class="grid place-content-center my-5">
    <h1 class="text-3xl">Welcome {{ user.user.email }}!</h1>
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
        class="bg-stone-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        New Task
      </button>
    </div>

    <table v-if="user.user" class="table-auto my-12">
      <thead>
        <tr>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(printTask, index) in printTasks" :key="printTask.id">
          <td class="border px-4 py-2 font-semibold text-1xl">
            <input
              v-if="editMode"
              v-model="printTask.title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="editTitle"
              type="text"
              placeholder="Task..."
            />
            <h2 class="flex flex-col items-center" v-else>{{ printTask.title }}</h2>            
          </td>

          <!-- ACTION BUTTONS  -->
          <td class="border px-4 py-2 grid place-content-center">
            <div>
              <img
                @click="edit(printTask)"
                class="w-8 hover:cursor-pointer shadow-md"
                src="../assets/edit-interface-sign.png"
                alt=""
              />

              <br />
              <img
                @click="complete(printTask)"
                class="w-8 hover:cursor-pointer"
                src="../assets/checked-symbol.png"
                alt=""
              />

              <br />
              <img
                @click="deleteItem(printTask)"
                class="w-8 hover:cursor-pointer"
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

//SYSTEM
const router = useRouter();
const user = useUserStore();
const task = useTaskStore();

//CUSTOM
const printTasks = ref([]);
const newItem = ref("");
const editMode = ref(null);
const tasksCompleted = ref(null);

const doTask = async () => {
  printTasks.value = await task.fetchTasks();
  // return printTasks;
  //console.log(printTasks.value);
};
//CALLS
doTask();
// console.log(user.user);
// console.log(printTasks.value);
// console.log(task.tasks[0]);

// FUNCTIONS
const signOut = () => {
  if (user.signOut()) {
    router.push({
      path: "/auth",
    });
  }
};
const newTask = async () => {
  task.insertTask(newItem.value, user.user);
  newItem.value = "";
  doTask();
};
const edit = async (item) => {
  // console.log(item);
  // console.log(index);
  //  console.log(newitem.value);
  editMode.value = !editMode.value;
  // console.log(editMode.value);
  task.updateTask(item.title, item.id);
  await doTask();
};
const complete = async (item) => {
    // console.log(item.is_complete);
  item.is_complete = !item.is_complete;
  // console.log(item.is_complete, item.id);
   task.isCompleted(item.is_complete, item.id);
  await doTask();
};
const deleteItem = async (item) => {
  task.deleteTask(item.id);
  await doTask();
};
</script>
