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
      return tasks;
    },
    async insertTask(name, user) {
      console.log(user);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: user.id,
          title: name,
          is_complete: false,
        },
      ]);
      // fetchTasks();
    },
    async updateTask(name, id) {
      const { data, error } = await supabase.from("tasks").update({
        title: name,
      })
      .eq(id, this.id)
    },
    
    async deleteTask(item) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .delete()
          .match({ id: item.id });
        console.log("item deleted");
        if(error) throw error;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
