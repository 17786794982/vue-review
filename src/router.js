import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/register.vue')
    },
    {
      path: '/vue',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "vue" */ './views/vue/vue.vue'),
      children: [
        {
          path: '',
          name: 'directive',
          component: () =>
            import(/* webpackChunkName: 'vue' */ './views/vue/directive.vue')
        },
        {
          path: 'componentModel',
          name: 'componentModel',
          component: () =>
            import(
              /* webpackChunkName: 'vue' */ './views/vue/componentModel.vue'
            )
        },
        {
          path: 'vue-slot',
          name: 'vueSlot',
          component: () =>
            import(
              /* webpackChunkName: 'vue' */ './views/vue/vueSlot/vueSlot.vue'
            )
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: () =>
            import(
              /* webpackChunkName: 'vue' */ './views/vue/dynamic/dynamic.vue'
            )
        },
        {
          path: 'vueProps',
          name: 'vueProps',
          component: () =>
            import(/* webpackChunkName: 'vue' */ './views/vue/vueProps.vue')
        },
        {
          path: 'sync',
          name: 'sync',
          component: () =>
            import(/* webpackChunkName: 'vue' */ './views/vue/sync/index.vue')
        }
      ]
    },
    {
      path: '/vue-router',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "vueRouter" */ './views/vueRouter/vueRouter.vue'
        ),
      children: [
        {
          path: '',
          name: 'homeRouter',
          component: () =>
            import(
              /* webpackChunkName: 'vueRouter' */ './views/vueRouter/homeRouter.vue'
            )
        },
        {
          path: 'homeRouter2',
          name: 'homeRouter2',
          component: () =>
            import(
              /* webpackChunkName: 'vueRouter' */ './views/vueRouter/homeRouter2.vue'
            ),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/vuex',
      component: () => import(/* webpackChunkName: 'vuex' */ './views/vuex')
    }
  ],
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
// 路由导航
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth) {
    next({
      name: 'login'
    });
  } else {
    next();
  }
});
export default router;
