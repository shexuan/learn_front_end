<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>当前求和为：{{ number }}</h2>
        <button @click="add">点我number++</button><br />
        <button @click="sendStudentName">
            【子传父数据-emit实现】发送学生名字给App</button
        ><br />
        <button @click="unbind">解绑atguigu事件</button><br />
        <button @click="death">销毁当前Student组件的实例（vc）</button><br />
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: "男",
            number: 0,
        };
    },
    methods: {
        add() {
            console.log("add回调被调用了");
            this.number++;
        },
        sendStudentName() {
            // 触发Student组件实例身上的atguigu事件
            console.log("emit实现子传父数据！");
            this.$emit("atguigu", this.name, 6, 7, 8);
            // this.$emit('demo')
            // this.$emit('click')
        },
        unbind() {
            // 解绑一个自定义事件
            this.$off("atguigu");
            // 解绑多个自定义事件
            // this.$off(['atguigu', 'demo'])
            // this.$off()  // 解绑所有自定义事件
        },
        death() {
            // 销毁当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
            this.$destroy();
        },
    },
};
</script>

<style></style>
