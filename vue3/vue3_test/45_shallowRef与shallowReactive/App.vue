<template>
    <div class="app">
        <h2>求和为：{{ sum }}</h2>
        <h2>名字为：{{ person.name }}</h2>
        <h2>年龄为：{{ person.age }}</h2>
        <h2>汽车为：{{ car }}</h2>
        <button @click="changeSum">sum+1</button>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <span>|</span>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeColor">修改颜色</button>
        <button @click="changeEngine">修改发动机</button>
    </div>
</template>

<script lang="ts" setup name="App">
import { ref, reactive, shallowRef, shallowReactive } from "vue";

let sum = shallowRef(0);
let person = shallowRef({ name: "张三", age: 18 });
let car = shallowReactive({
    brand: "奔驰",
    options: {
        color: "红色",
        engine: "V8",
    },
});

function changeSum() {
    sum.value += 1;
}
function changeName() {
    person.value.name = "李四";
}
function changeAge() {
    person.value.age += 1;
}
function changePerson() {
    person.value = { name: "tony", age: 100 };
}
/* ****************** */
function changeBrand() {
    car.brand = "宝马";
}
function changeColor() {
    car.options.color = "紫色";
}
function changeEngine() {
    car.options.engine = "V12";
}

// 先调用 changeColor() 和 changeEngine()
// → 修改了 car.options 的值，但Vue 不知道（无响应式）
// 再调用 changeBrand()
// → 修改了 car.barnd（第一层属性）→ 触发整个 car 对象的重新渲染
// 模板重新读取 car.options.color 和 car.options.engine
// → 此时它们已是新值 → 看起来“一起生效”了
// 💡 本质：changeBrand() 强制刷新了整个组件，暴露了之前已修改但未响应的值
</script>

<style scoped>
.app {
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}
button {
    margin: 0 5px;
}
</style>
