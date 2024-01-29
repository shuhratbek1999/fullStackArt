import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import ProjectAdd from './pages/ProjectAdmin/projectsAdd.vue'
import ProjectAll from './pages/ProjectAdmin/projectAll.vue'
import ProjectUpdate from './pages/ProjectAdmin/projectUpdate.vue'


import CategoryAdd from './pages/Category/categoryAdd.vue'
import CategoryUpdate from './pages/Category/updateCategory.vue'
import CategoryAll from './pages/Category/categoryAll.vue'

import UserAll from './pages/user/userAll.vue'
import UserUpdate from './pages/user/userUpdate.vue'

import Login from "./pages/Login/login.vue";
import Projects from "./pages/projects/project.vue";  
import About from "./pages/about/about.vue";  
import Education from "./pages/education/education.vue";  
import LiveArts from "./pages/liveArts/liveArts.vue";  
import Media from "./pages/media/media.vue";  
import News from "./pages/news/news.vue";  
import Publication from "./pages/publication/publication.vue";  
import Screengs from "./pages/screengs/screengs.vue";  
import Visual from "./pages/visual/visual.vue";  
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/about",
      name: "About us",
      component: About,
    },
    {
      path: "/education",
      name: "Education",
      component: Education,
    },
    {
      path: "/livearts",
      name: "Live Arts",
      component: LiveArts,
    },
    {
      path: "/media",
      name: "Media",
      component: Media,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/publication",
      name: "Publications",
      component: Publication,
    },
    {
      path: "/screenings",
      name: "Screenings",
      component: Screengs,
    },
    {
      path: "/visual",
      name: "Visual Arts",
      component: Visual,
    },
    {
      path: "/admin",
      name: "DashboardAdmin",
      component: Dashboard,
    },
    {
      path: "/project_all",
      name: "ProjectAll",
      component: ProjectAll,
    },
    {
      path: "/project_add",
      name: "ProjectAdd",
      component: ProjectAdd,
    },
    {
      path: "/project_update/:id",
      name: "ProjectUpdate",
      component: ProjectUpdate
    },
    {
      path: "/category_add",
      name: "CategoryAdd",
      component: CategoryAdd,
    },
    {
      path: "/category_update/:id",
      name: "CategoryUpdate",
      component: CategoryUpdate
    },
    {
      path: "/category_all",
      name: "CategoryAll",
      component: CategoryAll,
    },
    {
      path: "/user_all",
      name: "UserAll",
      component: UserAll
    },
    {
      path: "/user_update/:id",
      name: "UserUpdate",
      component: UserUpdate
    },
  ]
})

export default router
