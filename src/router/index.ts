import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Drive from '../components/Drive.vue';
import About from '@/components/About.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import App_Admin from '../components/admin/App_Admin.vue';
import Help from '@/components/Help.vue';
import TarifPage from '@/components/TarifPage.vue';

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Home
    },
    {
        path: '/drive',
        name: 'Roulez avec Zyyp',
        component: Drive
    },
    {
        path: '/about',
        name: 'A propos',
        component: About
    },
    {
        path: '/help',
        name: "Besoin d'aide",
       component: Help
     },
    {
        path: "/account",
        name: "Login",
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: App_Admin
    },
    {
        path: '/tarif',
        name: 'tarif',
        component: TarifPage
    }
]



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router;