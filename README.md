### vue-router

1. meta 路由元信息

```
{
  path: 'homeRouter2',
  name: 'homeRouter2',
  component: () => import( /* webpackChunkName:"about" */ './views/homeComponents/homeRouter2.vue'),
  meta: {
    requiresAuth: true // 路由元信息，判断当前路由是否需要登录
  }
}
```
2. 路由导航
>导航被触发。
在失活的组件里调用离开守卫。
>调用全局的 beforeEach 守卫。

在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
