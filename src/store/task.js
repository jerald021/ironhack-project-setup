import { defineStore } from "pinia";
import { supabase } from "../supabase";

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
      return this.tasks = tasks;
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
    },
    async updateTask(name, index) {
      // console.log(name);
      //  console.log(index);
      const { error } = await supabase.from("tasks").update({
        title: name,
      })
      .match({id: index})
    },
    
    async deleteTask(item) {
      try {
        const { error } = await supabase
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
