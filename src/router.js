import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Login from "./pages/Login/login.vue";
import Register from "./pages/register/Register.vue";
import Projects from "./pages/projects/project.vue";  
import About from "./pages/about/about.vue";  
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/project",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/about",
      name: "About us",
      component: About,
    },
    {
      path: "/register",
      name: "Registratsiya",
      component: Register,
    },
    {
      path: "/admin",
      name: "DashboardAdmin",
      component: Dashboard,
    },
  ]
})

export default router
