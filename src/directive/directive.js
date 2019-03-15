import Vue from 'vue';
import './noData.less';

// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// });

// 在 bind 和 update 时触发相同行为
// v-nodata
// v-nodata='true'
Vue.directive('nodata', (el, binding) => {
  let value = binding.value;
  if (value) {
    el.dataset.emptyText = el.dataset.emptyText || '暂无数据';
    // (!el.dataset.emptyText) && (el.dataset.emptyText = '暂无数据');
    el.classList.add('no-data');
  } else {
    el.classList.remove('no-data');
  }
});
