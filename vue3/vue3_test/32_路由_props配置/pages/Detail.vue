<template>
    <ul class="news-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script lang="ts" setup name="Detail">
import { toRefs } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["id", "title", "content"]);
console.log(props);
</script>

<style scoped>
.news-list {
    list-style: none;
    padding-left: 20px;
}

.news-list > li {
    line-height: 30px;
}
</style>
