<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生姓名发送给School组件</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "Harry",
            sex: "male",
        };
    },
    mounted() {
        // console.log("Student", this.x);
    },
    methods: {
        sendStudentName() {
            console.log("我是学生，发送我的名字：", this.name);
            this.$bus.$emit("hello", this.name);
        },
    },
};
</script>

<style lang="less" scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>
