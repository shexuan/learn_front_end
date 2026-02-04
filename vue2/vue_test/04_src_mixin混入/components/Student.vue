<template>
    <div>
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>我来自mixin</h2>
        x: {{ x }} <br /><br />
        y: {{ y }} <br /><br />
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: "男",
            y: 666,
        };
    },
};
</script>

<style></style>
