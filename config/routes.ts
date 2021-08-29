export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: 'user', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: 'welcome', icon: 'smile', component: './Welcome' },
  { path: '/crud', name: 'CRUD', icon: 'smile', component: './crud' },

  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
