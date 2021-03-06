import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import StockList from '../views/StockList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: StockList,
  },
  {
    path: '/charlie',
    name: 'Charlie',
    component: () => import(/* webpackChunkName: "charlie" */ '../views/charlie/Index.vue'),
  },
  {
    path: '/charlie/reading',
    name: 'ReadingList',
    component: () => import('../views/charlie/ReadingList.vue'),
  },
  {
    path: '/word/list',
    name: 'WordList',
    component: () => import('../views/word/list.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
