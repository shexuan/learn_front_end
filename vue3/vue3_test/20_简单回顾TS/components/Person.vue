<template>
    <div class="person">???</div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { ref } from "vue";
import { type Persons, type PersonInter } from "@/types";

let person: PersonInter = { id: "xxasdf", name: "张三", age: 19 };

let personList: Persons = [
    { id: "asdfa", name: "李四", age: 10 },
    { id: "fasdf", name: "王五", age: 22 },
];
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
