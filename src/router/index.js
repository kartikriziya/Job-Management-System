import { createRouter, createWebHistory } from "vue-router";


import Home from '../pages/Home.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'
import Jobs from '../pages/Jobs.vue'
import Salaries from '../pages/Salaries.vue'
import Setting from '../pages/Setting.vue'

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
    {path: '/contact', name: 'contact', component: Contact},
    {path: '/jobs', name: 'jobs', component: Jobs},
    {path: '/salaries', name: 'salaries', component: Salaries},
    {path: '/setting', name: 'setting', component: Setting}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;