<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>汽车：{{ car }}</h4>
        <button v-show="toy" @click="removeToy">点我丢掉儿子的玩具</button>
        <h4 v-show="toy">子给的工具：{{ toy }}</h4>
        <Child :car="car" :sendToy="getToy"></Child>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from "./Child.vue";
import { ref } from "vue";
let car = ref("奔驰");
let toy = ref("");

function getToy(value: string) {
    toy.value = value;
}

function removeToy() {
    toy.value = "";
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
.father button {
    margin-right: 5px;
}
</style>
