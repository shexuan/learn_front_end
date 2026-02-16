<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>父给的车：{{ car }}</h4>
        <button @click="sendToy(toy)">把玩具交给父亲</button>
    </div>
</template>

<script lang="ts" setup name="Child">
import { ref } from "vue";
let toy = ref("奥特曼");
defineProps(["car", "sendToy"]);
</script>

<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>
