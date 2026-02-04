<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <h2>我来自mixin</h2>
        x: {{ x }} <br /><br />
        y: {{ y }} <br /><br />
    </div>
</template>

<script>
//引入一个hunhe，可以在局部引入，也可以在main.js中进行全局引入
import { hunhe, hunhe2 } from "../mixin";
export default {
    name: "School",
    data() {
        return { name: "霍格沃茨", address: "伦敦", x: 666 };
    },
    mixins: [hunhe, hunhe2],
};
</script>

<style></style>
