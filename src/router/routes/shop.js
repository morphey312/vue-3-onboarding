export default [
    {
        path: '/products',
        name: 'products',
        component: () => import('@/components/Products/Products.vue')
    },
    {
        path: '/products/:id',
        name: 'single-products',
        component: () => import('@/components/Products/SingleProduct.vue'),
        props: true
    },
]