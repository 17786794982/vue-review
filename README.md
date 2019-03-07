## vue

#### 1. directive

#### 2.

## vue-router

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

   > - 导航被触发。
   > - 在失活的组件里调用离开守卫。
   > - 调用全局的 beforeEach 守卫。
   > - 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
   > - 在路由配置里调用 beforeEnter。
   > - 解析异步路由组件。
   > - 在被激活的组件里调用 beforeRouteEnter。
   > - 调用全局的 beforeResolve 守卫 (2.5+)。
   > - 导航被确认。
   > - 调用全局的 afterEach 钩子。
   > - 触发 DOM 更新。
   > - 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

3. 路由懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。把某个路由下的所有组件都打包在同个异步块 (chunk) 中。

```
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

4. tag
   有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。

```
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>
```
