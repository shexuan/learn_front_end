<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    ref,
} from "vue";

let sum = ref(0);
function add() {
    sum.value += 1;
}

console.log("Person创建");

onBeforeMount(() => {
    console.log("Person挂载前");
});

onMounted(() => {
    console.log("Person挂载完毕");
});

onBeforeUpdate(() => {
    console.log("Person更新前");
});

onUpdated(() => {
    console.log("Person更新完毕");
});

onBeforeUnmount(() => {
    console.log("Person卸载前");
});

onUnmounted(() => {
    console.log("Person卸载完毕");
});
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
