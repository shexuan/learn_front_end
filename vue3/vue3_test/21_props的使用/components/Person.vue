<template>
    <div class="person">
        <h2>测试 a: {{ a }}</h2>
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }}--{{ p.age }}</li>
        </ul>
    </div>
</template>

<!-- setup写在这里，被标签包含的就都是setup内容了，且不需要显式写export，name表示组件名称 -->
<script lang="ts" setup name="Person">
import { type Persons, type PersonInter } from "@/types";

// 只接收list
// const props = defineProps(["a"]);

// 接收list + 限制类型
// const props = defineProps<{ list: Persons }>();

// 接收list + 限制类型 + 限制必要性 + 指定默认值
const props = withDefaults(defineProps<{ list?: Persons; a: number }>(), {
    list: () => [{ id: "fadsf12", name: "邓布利多", age: 200 }],
    a: 666,
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
