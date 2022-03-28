<template>
  <div class="grid place-content-center my-5">
    <AppHeader />
    <NewTask />

    <table v-if="user.user" class="table-auto my-12">
      <thead>
        <tr>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="printTask in printTasks" :key="printTask.id">
          <td class="border px-4 py-2 font-semibold text-1xl">
            <input
              v-if="editMode"
              v-model="printTask.title"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="editTitle"
              type="text"
              placeholder="Task..."
            />
            <h2 class="flex flex-col items-center" v-else>
              {{ printTask.title }}
            </h2>
          </td>

          <!-- ACTION BUTTONS  -->
          <td class="border px-4 py-1 grid place-content-center">
            <div>
              <img
                @click="edit(printTask)"
                class="w-7 hover:cursor-pointer py-1"
                src="../assets/edit-interface-sign.png"
                alt=""
              />
              <!-- COMPLETED BOOLEAN -->
              <img
                v-if="printTask.is_complete"
                @click="complete(printTask)"
                class="w-7 hover:cursor-pointer py-1"
                src="../assets/checked-symbol.png"
                alt=""
              />
              <img
                v-else
                @click="complete(printTask)"
                class="w-7 hover:cursor-pointer py-1"
                src="../assets/cross-mark-on-a-black-circle-background.png"
                alt=""
              />
              <!-- CLOSE COMPLETED BOOLEAN -->
              <img
                @click="deleteItem(printTask)"
                class="w-7 hover:cursor-pointer py-1"
                src="../assets/garbage.png"
                alt=""
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

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
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import NewTask from "../components/NewTask.vue";

//SYSTEM
const router = useRouter();
const user = useUserStore();
const task = useTaskStore();

//CUSTOM
const printTasks = ref([]);
const editMode = ref(null);

const doTask = async () => {
  printTasks.value = await task.fetchTasks();
  // console.log(printTasks.value);
};
//CALLS
doTask();

// FUNCTIONS
const signOut = () => {
  if (user.signOut()) {
    router.push({
      path: "/auth",
    });
  }
};
const edit = async (item) => {
  editMode.value = !editMode.value;
  task.updateTask(item.title, item.id);
  await doTask();
};
const complete = async (item) => {
  item.is_complete = !item.is_complete;
  console.log(item.is_complete);
  task.isCompleted(item.is_complete, item.id);
  await doTask();
};
const deleteItem = async (item) => {
  task.deleteTask(item.id);
  await doTask();
};
</script>