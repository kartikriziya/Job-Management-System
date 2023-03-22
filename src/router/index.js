import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue"
import AboutUs from "../pages/AboutUs.vue"
import Contact from "../pages/Contact.vue"

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'AboutUs', component: AboutUs},
    {path: '/contact', name: 'Contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;