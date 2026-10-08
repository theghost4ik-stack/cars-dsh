import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'main' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'main' }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main-page/MainPage.vue')
  },
  {
    path: '/cars/:bodyType/:brand?',
    name: 'catalog',
    component: () => import('@/views/catalog-page/CatalogPage.vue')
  },
  {
    path: '/cars/:bodyType/:brand/:model',
    name: 'car',
    component: () => import('@/views/car-page/CarPage.vue')
  },
  {
    path: '/comparison',
    name: 'comparison',
    component: () => import('@/views/comparison-page/ComparisonPage.vue')
  },
];

export default createRouter({
  history: createWebHistory(),
  routes
});