import Vue from "vue";
import App from "./App.vue";

// 完整引入
// 安装  npm install element-ui --save
// 引入ElementUI组件库
import ElementUI from "element-ui";
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
// import { Button, Row, DatePicker } from "element-ui";

Vue.config.productionTip = false;

// 应用ElementUI
Vue.use(ElementUI);

// 相当于给导入的样式组件一个名字，使用的时候就用这个名字
// Vue.component("atguigu-button", Button);
// Vue.component("atguigu-row", Row);
// Vue.component("atguigu-date-picker", DatePicker);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
