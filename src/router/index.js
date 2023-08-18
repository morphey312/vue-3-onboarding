import {createRouter, createWebHistory} from "vue-router";
import Products from "../components/Products.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    {
        path: '/',
        component: Products
    },
    {
        path: '/hello-world/:id',
        name: 'hello',
        component: HelloWorld
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router