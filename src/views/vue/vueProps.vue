<template>
  <div>
    <article>
      <h2>Prop 的大小写 (camelCase vs kebab-case)</h2>
      <p>
        HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case
        (短横线分隔命名)。
      </p>
      <br>
      <h2>单向数据流</h2>
      <p>
        所有的 prop 都使得其父子 prop 之间形成了一个 <strong>单向下行绑定</strong>：父级 prop
        的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解
      </p>
      <p>这里有两种常见的试图改变一个 prop 的情形:</p>
      <ol>
        <li>
          这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：
          <pre>
            props: ['initialCounter'],
            data: function () {
              return {
                counter: this.initialCounter
              }
            }
          </pre>
        </li>
        <li>
          这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：
          <pre>
            props: ['size'],
            computed: {
              normalizedSize: function () {
                return this.size.trim().toLowerCase()
              }
            }
          </pre>
        </li>
      </ol>
    
    </article>
  </div>
</template>

<script>
  export default {
    name: "vueProps"
  }
</script>

<style scoped>

</style>
