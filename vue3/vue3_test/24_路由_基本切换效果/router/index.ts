// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
// npm install vue-router@4
import {createRouter, createWebHistory} from 'vue-router';
// 引入可能要呈现的组件

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import News from '@/components/News.vue';


// 第二步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes:[ // 路由规则
    {path:'/home', component:Home},
    {path:'/about', component:About},
    {path:'/news', component:News}
    ]
})

// 暴露出去router
export default router
