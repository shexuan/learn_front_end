// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
// npm install vue-router@4
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";
// 引入可能要呈现的组件

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [
        // 路由规则
        { path: "/", redirect: "/about" },
        { name: "zhuye", path: "/home", component: Home },
        { name: "guanyu", path: "/about", component: About },
        {
            name: "xinwen",
            path: "/news",
            component: News,
            children: [
                {
                    name: "xiang",
                    path: "detail",
                    component: Detail,
                    // 第一种写法：将路由收到的所有params参数作为props传给路由组件
                    // props:true

                    // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    props(route) {
                        return route.query;
                    },

                    // 第三种写法：对象写法，可以自己觉得将什么作为props给路由组件
                    // props: {
                    //     a: 100,
                    //     b: 200,
                    //     c: 300,
                    // },
                },
            ],
        },
    ],
});

// 暴露出去router
export default router;
