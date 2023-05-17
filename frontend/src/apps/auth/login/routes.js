export const login = [
  {
    path: 'login',
    name: 'Login',
    component: () => import('./views/LoginView.vue'),
    props: true,
    meta: {
      authRequired: false,
    },
  },
];
