// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
// npm install vue-router@4
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
// 引入可能要呈现的组件

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import News from '@/pages/News.vue';
import Detail from '@/pages/Detail.vue';


// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes:[ // 路由规则
    {name:'zhuye', path:'/home', component:Home},
    {name:'guanyu', path:'/about', component:About},
    {name:'xinwen', path:'/news', component:News, children:[{name:'xiang',path:'detail', component:Detail}]}
    ]
})

// 暴露出去router
export default router
