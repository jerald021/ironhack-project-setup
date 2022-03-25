import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../supabase";

//  const allTodos = [];

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {  
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      // this.tasks = tasks;
      //  allTodos.value = tasks;
      //  console.log(allTodos.value);
      //  return allTodos;
       return tasks;
    },
    async insertTask(item) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: "7d7c45f3-5fbc-4a7c-ba46-0318e95ba668",
          title: item,
          is_complete: false,
        },
      ]);
      // fetchTasks();
    },
    async updateTask(title) {
      const { data, error } = await supabase.from("tasks").update({
        user_id: "7d7c45f3-5fbc-4a7c-ba46-0318e95ba668",
        title: title,
      });
    },
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: 46 });
        console.log(
          'item deleted'
        );
    },
  },
});
