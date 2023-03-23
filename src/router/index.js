import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

const routes = [
    {
        path: '/', name: 'home', component: Home,
        children:[
            {
                path: 'login',
                name: 'login',
                component: Login
            },
            {
                path: 'signup',
                name: 'signup',
                component: SignUp
            }
        ]

    },
    {path: '/about', name: 'about', component: AboutUs},
    {path: '/contact', name: 'contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;