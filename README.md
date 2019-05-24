## vue-cli3
1. Compiles and hot-reloads for development
```
npm run serve
npm run serve:test 启动可以将baseURL设置成测试环境的地址
npm run serve:prod 启动可以将baseURL设置成生产环境的地址
```

2. Compiles and minifies for production
```
npm run build
npm run build:dev 可以将打包的baseURL设置成开发环境的地址
npm run build:test 可以将打包的baseURL设置成测试环境的地址
```

## vue

1. directive

2.

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
   有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。

```
<router-link to="/foo" tag="li">foo</router-link>
<!-- 渲染结果 -->
<li>foo</li>
```

## vuex
[![vuex](/public/img/vuex.png "vuex")](/vuex)
1. state
   - 在Vue组件中获取state: 在计算 **计算属性** 中返回。
      - 简单写法：
      ```
      computed: {
        count(){
          return this.$store.state.count;
        }
      }
      ```
      - mapState 辅助函数
      ```
      import {mapState} from 'vuex';
      // ...
      computed(){
        ...mapState({
          count: state => state.count,
          count1: 'count1',
        })
        // 或者
        // ...mapState([
        //  'count', 'count1'
        // ])
      }
      ```
2. getters
   - getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了变化才会被重新计算。
   
   ```
   import { mapGetters } from 'vuex'
    export default {
    // ...
      computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
          'doneTodosCount',
          'anotherGetter',
          // ...
        ])
      }
    }
   ```

3. mutation
   - 更改vuex的store中的状态的唯一方法是提交 mutation。
   不能直接调用mutation，需要commit，如`this.$store.commit('INCREMENT')`
   - 推荐使用常量替代mutation的事件类型。
   - mutation必须是同步函数。
   - 可使用mapMutations

   ```
    methods: {
      ...mapMutations([
        // 将 this.increment() 映射为 this.$store.commit('increment')
        'increment', 
        // 将 this.incrementBy(amount) 映射为 this.$store.commit('incrementBy', amount)
        'incrementBy',
      ])
    }
   ```

4. action
   - action 提交的是 mutation，而不是直接修改状态；
   - action 可以包含任意异步操作。
   简单的action:
   ```
    actions: {
      // 接受一个与store实例具有相同方法和属性的context对象
      increment (context) {
        context.commit('increment')
      }
    }
   ```

   - 分发 action：
   ` this.$store.dispatch('increment') `
   或者使用 mapActions 辅助函数：
   ```
    import {mapActions} from 'vuex';
    // ....
    methods: {
      ...mapActions([
        'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        'incrementBy', // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      ])
    }

   ```
   处理异步：
   ```
    actions: {
      actionA ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('someMutation')
            resolve()
          }, 1000)
        })
      }
    }
   ```
5. Module
```
  const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
  }

  const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
  }

  const store = new Vuex.Store({
    modules: {
      moduleA,
      moduleB,
    }
  })

  store.state.moduleA // -> moduleA 的状态
  store.state.moduleA // -> moduleB 的状态
```