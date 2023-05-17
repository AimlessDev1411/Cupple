import HandleAuth from 'src/helpers/HandleAuth';
import { login } from 'src/apps/auth/login/routes'

const handleAuth = new HandleAuth();

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('layouts/MainLayout.vue'),
    redirect: handleAuth.redirectAuthentication(),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../apps/auth/login/views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    redirect: { name: 'Login' },
    children: [...login],
  },
  {
    path: '/app',
    name: 'App',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'HomePage' },
    children: [
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
