<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <hr />
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="test">测试修改obj.a.b.c</button>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { reactive, ref, watch } from "vue";

let person = reactive({
    name: "张三",
    age: 18,
});
let obj = reactive({ a: { b: { c: 666 } } });

function changeName() {
    person.name += "~";
}

function changeAge() {
    person.age += 1;
}

function changePerson() {
    Object.assign(person, { name: "李四", age: 90 });
}

function test() {
    obj.a.b.c += 888;
}

/* 
    监视，情况三：监视【reactive】定义的【对象类型】数据，默认开启深度监视
    watch 的第一个参数：被监视的数据；
    watch 的第二个参数：监视的回调；
    watch 的第三个参数：配置对象（deep，imediate等等...）
*/
watch(
    person,
    (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
    },
    { deep: false },
);

watch(
    obj,
    (newValue, oldValue) => {
        console.log("obj变化了", newValue, oldValue);
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
