import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";

const routes = [
  { path: "/auth", component: Auth },
  { path: "/", component: Home },
  { path: "/sign-up", component: SignUp },
  { path: "/sign-in", component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
