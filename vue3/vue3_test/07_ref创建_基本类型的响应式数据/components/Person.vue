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
import { ref } from "vue";
// ref可用于基本类型和对象
// 数据
let name = ref("张三");
let age = ref(18);
let tel = ref("1388888888");
let address = ref("霍格沃茨·格兰芬多学院");

// 方法
function changeName() {
    // 使用ref创建的基础类型响应式变量在JS中使用时需要加上.value (在模版中不需要)
    name.value = "zhang-san"; // 响应式修改
    console.log(name);
}

function changeAge() {
    age.value += 1; // 响应式修改
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
