<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车的价格</button>
        <button @click="changeBrand">修改汽车的品牌</button>
        <button @click="changeCar">修改汽车</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";

let car = reactive({ brand: "奔驰", price: 100 });
let sum = ref(0);

function changeBrand() {
    car.brand = "宝马";
}

function changePrice() {
    car.price += 10;
}

function changeCar() {
    // car = {brand:'奥拓', price:1}  // 这种写法页面不更新
    // car = reactive({brand:'奥拓', price:1})  // 这种写法页面也不更新

    // 这种写法可以更新
    Object.assign(car, { brand: "奥拓", price: 1 });
}

function changeSum() {
    // sum = ref(9)  // 这么写页面不更新
    sum.value += 1;
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
