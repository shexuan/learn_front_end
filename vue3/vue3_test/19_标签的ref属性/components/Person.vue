<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出h2这个元素</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { ref } from "vue";
//创建一个 title2，用于储存ref标记的内容
let title2 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
    console.log(title2.value); // 输出DOM节点，<h2 ref="title2">北京</h2>
}

defineExpose({ a, b, c });
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
