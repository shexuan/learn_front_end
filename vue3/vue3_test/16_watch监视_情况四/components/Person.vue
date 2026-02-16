<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改C1</button>
        <button @click="changeC2">修改C2</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { reactive, ref, watch } from "vue";

let person = reactive({
    name: "张三",
    age: 18,
    car: { c1: "奔驰", c2: "宝马" },
});

function changeName() {
    person.name += "~";
}

function changeAge() {
    person.age += 1;
}

function changeC1() {
    person.car.c1 = "奥迪";
}

function changeC2() {
    person.car.c2 = "大众";
}

function changeCar() {
    person.car = { c1: "雅迪", c2: "爱玛" };
}

/* 
    监视，情况四：监视响应式对象中的某个属性，且该属性是【基本类型的】，要写成函数式
    watch(()=>person.name, (newValue, oldValue) => {xxx})
    watch 的第一个参数：被监视的数据；
    watch 的第二个参数：监视的回调；
    watch 的第三个参数：配置对象（deep，imediate等等...）
*/

// 监视，情况四：监视响应式对象中的某个属性，且该属性是【对象类型】的，可以直接写，也能写函数，更推荐写函数
watch(
    () => person.car,
    (newValue, oldValue) => {
        console.log("person.car变化了", newValue, oldValue);
    },
    { deep: true },
);

watch(
    person,
    (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
    },
    { deep: true },
);
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
