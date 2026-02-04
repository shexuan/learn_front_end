<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link
                        replace
                        class="list-group-item"
                        active-class="active"
                        to="/home/news"
                        >News</router-link
                    >
                    <router-link
                        replace
                        class="list-group-item"
                        active-class="activate"
                        to="/home/message"
                        >Message</router-link
                    >
                </li>
            </ul>
            <!-- 缓存多个路由组件 -->
            <!-- <keep-alive :include="['News', 'Message']"> -->

            <!-- 缓存一个路由组件 -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    beforeDestroy() {
        console.log("Home组件即将被销毁了");
    },
    mounted() {
        console.log("Home组件挂载完毕了", this);
        window.homeRoute = this.$route;
        window.homeRouter = this.$router;
    },
};
</script>
