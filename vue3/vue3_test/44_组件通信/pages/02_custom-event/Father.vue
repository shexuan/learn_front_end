<template>
    <div class="father">
        <h3>父组件</h3>
        <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
        <button v-show="toy" @click="removeToy">点我丢掉儿子的玩具</button>
        <Child @send-toy="saveToy"></Child>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from "../01_props/Child.vue";
import { ref } from "vue";

let toy = ref("");

function saveToy(value: string) {
    console.log("saveToy", value);
    toy.value;
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
