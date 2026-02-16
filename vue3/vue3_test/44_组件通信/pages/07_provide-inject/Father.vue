<template>
    <div class="father"></div>
    <h3>父组件</h3>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{ car.brand }}，价值{{ car.price }}万元</h4>
    <Child></Child>
</template>

<script lang="ts" setup name="Father">
import Child from "./Child.vue";
import { ref, reactive, provide } from "vue";

let money = ref(100);
let car = reactive({ brand: "奔驰", price: 100 });

function updateMoney(value: number) {
    money.value -= value;
}

// 向后代提供数据
provide("moneyContext", { money, updateMoney });
provide("car", car);
</script>
