import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from '../views/Main';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main,
    },
    {
        path: '/catalogos/ropa',
        name: 'Ropa',
        component: () => import(/* webpackChunkName: "RopaView" */ '../views/Ropa.vue'),
    },
    {
        path: '/catalogos/productos-coreanos',
        name: 'ProductosCoreanos',
        component: () => import(/* webpackChunkName: "ProductosView" */ '../views/Productos.vue'),
    },
    {
        path: '/catalogos/bolsas',
        name: 'Bolsas',
        component: () => import(/* webpackChunkName: "BolsasView" */ '../views/Bolsas.vue'),
    },
];

export default new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'open active',
    routes,
});
