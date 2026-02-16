<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { ref, watch } from "vue";

let sum = ref(0);

function changeSum() {
    sum.value += 1;
}

// 监视，情况一：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log("sum变化了", newValue, oldValue);
    if (newValue >= 10) {
        stopWatch();
    }
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
