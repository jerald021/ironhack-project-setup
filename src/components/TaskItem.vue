<template>
  <table class="table-auto my-12">
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
            class="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="editTitle"
            type="text"
            placeholder="Task..."
          />
          <h2 v-else class="flex flex-col items-center">
            {{ printTask.title }}
          </h2>
        </td>

        <!-- ACTION BUTTONS  -->
        <td class="border px-4 py-1 grid place-content-center">
          <div class="flex flex-row">
            <img
              @click="edit(printTask)"
              class="w-7 hover:cursor-pointer py-1 mx-1"
              src="../assets/edit-interface-sign.png"
              alt=""
            />
            <!-- COMPLETED BOOLEAN -->
            <img
              v-if="printTask.is_complete"
              @click="complete(printTask)"
              class="w-7 hover:cursor-pointer py-1 mx-1"
              src="../assets/checked-symbol.png"
              alt=""
            />
            <img
              v-else
              @click="complete(printTask)"
              class="w-7 hover:cursor-pointer py-1 mx-1"
              src="../assets/cross-mark-on-a-black-circle-background.png"
              alt=""
            />
            <!-- CLOSE COMPLETED BOOLEAN -->
            <img
              @click="deleteItem(printTask)"
              class="w-7 hover:cursor-pointer py-1 mx-1"
              src="../assets/garbage.png"
              alt=""
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useTaskStore } from "../store/task.js";
import { ref } from "vue";

const task = useTaskStore();
const printTasks = ref([]);
const editMode = ref(null);

const doTask = async () => {
  printTasks.value = await task.fetchTasks();
  // console.log(printTasks.value);
  return printTasks.value;
};
// FUNCTIONS
doTask();

const edit = async (item) => {
  // console.log(item.id);
  editMode.value = !editMode.value;
  task.updateTask(item.title, item.id);
  doTask();
};
const complete = async (item) => {
  item.is_complete = !item.is_complete;
  console.log(item.is_complete);
  task.isCompleted(item.is_complete, item.id);
  doTask();
};
const deleteItem = async (item) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#000",
    iconColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await task.deleteTask(item.id);
      Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        iconColor: "#3085d6",
        icon: "success",
        confirmButtonColor: "#000",
        confirmButtonText: "OK",
        width: 600,
      });

      await doTask();
    }
  });
};
</script>
