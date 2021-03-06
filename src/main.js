import Vue from 'vue'
import VueRouter from 'vue-router'


var App = Vue.extend({});
Vue.use(VueRouter);

var router = new VueRouter( );

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/index': {
    component: function (resolve) {
      require(['./components/World.vue'], resolve)
    }
  },
  '/hello': {
    component: function (resolve) {
      require(['./components/Hello.vue'], resolve)
    }
  }
});

router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
  '*':"/index"//重定向任意未匹配路径到/index
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, 'body');
