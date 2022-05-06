import Vue from 'vue'
import vuescroll from 'vuescroll';

Vue.use(vuescroll, {
  ops: {
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#c1c1c1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: false,
      size: '6px',
      disable: false,
    }
  }, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});

