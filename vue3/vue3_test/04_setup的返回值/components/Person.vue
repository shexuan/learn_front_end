<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Person",
    beforeCreate() {
        console.log("beforeCreate");
    },
    setup() {
        console.log(this); // setup中的this是undefined，vue3在弱化this
        // 数据，原来写在data中的，此时name，age，tel都不是响应数据
        let name = "张三";
        let age = 18;
        let tel = "138888888";

        // 方法
        function changeName() {
            name = "zhang-san"; // 注意：这样修改name，页面是没有变化的，因为是非响应式
            console.log(name); // 名字确实改了
        }
        function changeAge() {
            age += 1;
            console.log(age);
        }
        function showTel() {
            alert(tel);
        }

        // 将数据、方法交出去，模板中才可以使用
        // return { name, age, tel, changeName, changeAge, showTel };

        // setup的返回值也可以是一个渲染函数
        return () => "哈哈";
    },
};
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 5px;
}
</style>
