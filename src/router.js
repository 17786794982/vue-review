import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ './components/login.vue'),
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue'),
      children: [{
          path: '',
          name: 'homeRouter1',
          component: () =>
            import( /* webpackChunkName: "about" */ './views/homeComponents/homeRouter1.vue')
        },
        {
          path: 'homeRouter2',
          name: 'homeRouter2',
          component: () => import( /* webpackChunkName: "about" */ './views/homeComponents/homeRouter2.vue'),
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth) {
    next({
      name: 'login'
    });
  } else {
    next();
  }
})
export default router;