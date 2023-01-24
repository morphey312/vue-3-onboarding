// создаем роутер, и добавляем отслеживание истории переходов
import { createRouter, createWebHistory } from 'vue-router'
// импортрируем маршруты для сущности books
import ShopRoutes from "@/router/routes/shop.js"
// регистрируем стартовую страницу
import HelloWorld from "@/components/HelloWorld.vue"
import Counter from "@/components/Counter.vue"
import Cards from "@/components/Cards.vue"
import PageNotFound from "@/PageNotFound.vue"
import Auth from "@/components/Auth/Auth.vue"
import {useAuthStore} from "@/router/stores/auth";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld,
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => Auth,
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter,
        // подключение пропсов необходимо в том случае если планируется передача каких-либо данных через роут
        props:true,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/cards',
        name: 'cards',
        component: Cards,
        // подключение пропсов необходимо в том случае если планируется передача каких-либо данных через роут
        props:true,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/404',
        name: '404',
        // регистрируем необходимые страницы
        component: PageNotFound
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

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const store = useAuthStore();
    console.log(store.user)
    if (requiresAuth && !store.user.id) {
        next('/auth');
    } else {
        next();
    }
})

export default router
