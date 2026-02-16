<template>
    <div class="app">
        <h1>你好啊！</h1>
        <Person :a="x" :list="personList"></Person>
    </div>
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { type Persons } from "./types";
import { reactive, ref } from "vue";

let x = 9;
let personList = reactive<Persons>([
    { id: "asdfasd", name: "张三", age: 20 },
    { id: "qewr", name: "李四", age: 30 },
]);
</script>

<style>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
