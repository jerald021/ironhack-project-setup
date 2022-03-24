<template>
  <div>
    <h1>Welcome! This is the home page</h1>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Add new task
      </label>
      <input
        v-model="task"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="task"
        type="text"
        placeholder="task ..."
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
        <tr>
          <td><p>fake text</p></td>
           <td v-for="printTask in printTasks" :key="printTask.id">
            {{ printTask.title}}
          </td>
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

<script>
import { useUserStore } from "../store/user.js";
import { useTaskStore } from "../store/task.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const user = useUserStore();

        //VARS TASKS 
    const task = useTaskStore();
    const printTasks = ref([]);

    // FUNCTIONS
    const doTask = async () => {
      printTasks.value =  await task.fetchTasks();
          // console.log(printTasks);
      //  return printTasks;
    };
    doTask();


    const signOut = () => {
      user.signOut();
      router.push({
        path: "/auth",
      });
    };
    const newTask = () => {
      taskFuntion.insertTask(task.value);
    };
    const edit = () => {
      console.log("this is edit");
    };
    const complete = () => {
      console.log("this is complete");
    };
    const deleteItem = () => {
      console.log("this is deleteItem");
    };

    return {
      // doTask,
      router,
      signOut,
      newTask,
      edit,
      complete,
      deleteItem,
    };
  },
  mounted() {
 
    
  },
};
</script>
