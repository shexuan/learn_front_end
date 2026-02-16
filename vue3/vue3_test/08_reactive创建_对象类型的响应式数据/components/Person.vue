<template>
    <div class="person"></div>
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br />
    <h2>游戏列表：</h2>
    <ul>
        <li v-for="g in games" :key="g.id">
            {{ g.name }}
        </li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { reactive } from "vue";
// reactive 仅能创建对象的响应式数据
let car = reactive({ brand: "奔驰", price: 100 });
let games = reactive([
    { id: "adfadsf01", name: "王者荣耀" },
    { id: "sfafasdf02", name: "原神" },
    { id: "asdfaf03", name: "三国志" },
]);
let obj = reactive({
    a: { b: { c: 666 } },
});

console.log(car);
console.log(games);

function changePrice() {
    car.price += 10;
    console.log(car.price);
}

function changeFirstGame() {
    games[0].name = "流星蝴蝶剑";
}

function changeObj() {
    obj.a.b.c = 999;
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
