import Vue from "vue";
import App from "./App.vue";
import { hunhe, hunhe2 } from "./mixin";

Vue.config.productionTip = false;

// 全局配置，子vue component都可以用
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
