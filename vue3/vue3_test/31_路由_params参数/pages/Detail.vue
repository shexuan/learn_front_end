<template>
    <ul class="news-list">
        <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li>
    </ul>
</template>

<script lang="ts" setup name="Detail">
import { toRefs } from "vue";
import { useRoute } from "vue-router";

let route = useRoute();
console.log("detail route", route);
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
