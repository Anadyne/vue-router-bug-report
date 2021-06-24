import { RouteName, RoutePath } from 'src/types/routes';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: RoutePath.Home,
        name: RouteName.Home,
        component: () => import('pages/ru/Home.vue'),
      },
      {
        path: RoutePath.Sos,
        name: RouteName.Sos,
        component: () => import('pages/ru/Sos.vue'),
      },

      {
        path: RoutePath.Subscriptions,
        name: RouteName.Subscriptions,
        component: () => import('pages/ru/Subscriptions.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
