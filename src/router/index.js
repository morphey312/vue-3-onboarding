// создаем роутер, и добавляем отслеживание истории переходов
import { createRouter, createWebHistory } from 'vue-router'
// импортрируем маршруты для сущности books
import ShopRoutes from "@/router/routes/shop.js"
// регистрируем стартовую страницу
import HelloWorld from "@/components/HelloWorld.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld,
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import('@/components/Counter.vue'),
        // подключение пропсов необходимо в том случае если планируется передача каких-либо данных через роут
        props:true,
    },
    {
        path: '/cards',
        name: 'cards',
        component: () => import('@/components/Cards.vue'),
        // подключение пропсов необходимо в том случае если планируется передача каких-либо данных через роут
        props:true,
    },
    {
        path: '/404',
        name: '404',
        // регистрируем необходимые страницы
        component: () => import('@/PageNotFound.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    // добавляем маршруты в роутер
    ...ShopRoutes,
]

const router = createRouter({
    // добавление классов к используемым <router-link>
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    // подключаем истории переходов
    history: createWebHistory(),
    // подключаем роуты
    routes
})

export default router
