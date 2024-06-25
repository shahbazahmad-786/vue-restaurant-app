import { createWebHistory, createRouter } from "vue-router";
import Index from './components/index.vue';
import SignUP from './components/auth/SignUP.vue'
import Login from './components/auth/Login.vue'
import Add from './components/pages/Add.vue'
import Edit from './components/pages/Edit.vue'

const routes =
    [
        {
            name: 'Index',
            path: '/',
            component: Index
        },
        {
            name: 'SignUP',
            path: '/sign-up',
            component: SignUP
        },
        {
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Add',
            path: '/add',
            component: Add
        },
        {
            name: 'Edit',
            path: '/edit/:id',
            component: Edit
        }
    ];

const router = createRouter
    (
        {
            history: createWebHistory(),
            routes
        }
    );
export default router;