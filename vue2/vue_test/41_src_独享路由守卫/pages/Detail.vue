<template>
    <ul>
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
        <li>测试a：{{a}}</li>
        <li>测试b：{{b}}</li>
    </ul>
</template>

<script>
export default {
    name: "Detail",
    props: ["id", "title", 'a', 'b'],
    mounted() {
        console.log(this.$route);
    },
};
</script>

<style></style>
