<template>
    <div class="app">
        <h1>你好啊！</h1>
        <h2 ref="title2">你好</h2>
        <button @click="showLog">测试</button>
        <Person ref="ren"></Person>
    </div>
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref } from "vue";

let title2 = ref();
let ren = ref();
function showLog() {
    console.log(title2.value);  // 输出DOM节点，<h2 ref="title2">你好</h2>
    console.log(ren.value);  // 输出组件实例对象，即Person组件defineExpose的数据，Proxy(Object) {a: RefImpl, b: RefImpl, c: RefImpl, __v_skip: true}
}
</script>

<style>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
