import { createRouter, createWebHistory } from "vue-router"

// Pages
import Home from "../pages/Home.vue"
import AboutUs from "../pages/AboutUs.vue"
import Contact from "../pages/Contact.vue"
import Jobs from "../pages/Jobs.vue"
import Salaries from "../pages/Salaries.vue"
import Setting from "../pages/Setting.vue"

// Components
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"
import Personal from "../components/Personal.vue"
import Introduction from "../components/Introduction.vue"
import Security from "../components/Security.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "signup",
        name: "signup",
        component: SignUp,
      },
    ],
  },
  { path: "/about", name: "about", component: AboutUs },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/jobs", name: "jobs", component: Jobs },
  { path: "/salaries", name: "salaries", component: Salaries },
  {
    path: "/setting",
    name: "setting",
    component: Setting,
    children: [
      {
        path: "personal",
        name: "personal",
        component: Personal,
      },
      {
        path: "introduction",
        name: "introduction",
        component: Introduction,
      },
      {
        path: "security",
        name: "security",
        component: Security,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
