<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
// 数据
let name = "张三";
let age = 18;
let tel = "1388888888";
let address = "霍格沃茨·格兰芬多学院";

// 方法
function changeName() {
    name = "zhang-san"; // 非响应式修改
    console.log(name);
}

function changeAge() {
    age += 1; // 非响应式修改
    console.log(age);
}

function showTel() {
    alert(tel);
}
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
