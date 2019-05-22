<template>
  <div>
    <h2>slot 插槽</h2>
    <jumingchacao>
      <template v-slot:title>1、编译作用域</template>
      <bianyizuoyongyu></bianyizuoyongyu>
    </jumingchacao>
    <jumingchacao>
      <template v-slot:title>2、后背内容</template>
      <houbeineirong></houbeineirong>
    </jumingchacao>
    <jumingchacao>
      <template v-slot:title>3、具名插槽</template>
      <p>注意 v-slot 只能添加在一个 &lt;template&gt; 上 (只有一种例外情况)</p>
    </jumingchacao>
  </div>
</template>

<script>
  import jumingchacao from './jumingchacao'
  import bianyizuoyongyu from './bianyizuoyongyu'
  import houbeineirong from './houbeineirong'
  
  export default {
    name: "vueSlot",
    data(){
      return {
      }
    },
    components: {
      jumingchacao,
      bianyizuoyongyu,
      houbeineirong,
    }
  }
</script>

<style scoped>

</style>
