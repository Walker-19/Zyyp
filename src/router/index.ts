import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Drive from '../components/Drive.vue';
import About from '@/components/About.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import App_Admin from '../components/views/App_Admin.vue';
import Help from '@/components/Help.vue';
import TarifPage from '@/components/TarifPage.vue';
import RideHistory from '@/components/views/RideHistory.vue';
import UserDashboard from '@/components/views/UserDashboard.vue';
import Rechageur from '@/components/views/Rechageur.vue';
import Trot from '@/components/views/Trot.vue';
import Settings from '@/components/views/Settings.vue';
import Mk_rechargeur from '@/components/Mk_rechargeur.vue';

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
        path: '/rechargeur',
        name: 'rechargeurPage',
        component: Mk_rechargeur
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
        path: '/tarif',
        name: 'tarif',
        component: TarifPage
    },

    // Dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        component: App_Admin
    },
    {
        path: '/user_dashboard/history',
        name: 'historiques',
        component: RideHistory
    },

    {
        path: '/user_dashboard',
        name: 'userDashboard',
        component: UserDashboard
    },
    {
        path: '/dashboard/rechargeur',
        name: 'rechargeur',
        component: Rechageur
    },
    {
        path: '/dashboard/trottinette',
        name: 'trottinettes',
        component: Trot

    },
    {
        path: '/dashboard/settings',
        name: 'parametres',
        component: Settings

    }


]



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router;