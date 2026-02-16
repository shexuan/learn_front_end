<template>
    <div class="app">
        <h1>你好啊！</h1>
        <button @click="changeStatus">点我隐藏/展示子组件</button>
        <br><br>
        <Person v-if="isShow"></Person>
    </div>
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { onMounted, ref } from "vue";

let isShow = ref(true);

function changeStatus() {
    isShow.value = !isShow.value;
}
// 挂载完毕
onMounted(() => {
    console.log("APP挂载完毕");
});
</script>

<style>
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
