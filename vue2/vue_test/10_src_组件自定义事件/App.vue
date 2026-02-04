<template>
    <div class="app">
        <h1>{{ msg }}，学生姓名是：{{ StudentName }}</h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <Student @atguigu="getStudentName" @demo="m1" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <Student ref="student" @click.native="show" />
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: "App",
    components: { School, Student },
    data() {
        return {
            msg: "你好啊",
            StudentName: "",
            SchoolName: "",
        };
    },
    methods: {
        getSchoolName(name, params) {
            this.SchoolName = name;
            console.log("收到学校名称：", name);
        },
        getStudentName(name, params) {
            this.StudentName = name;
            console.log("收到学生名称：", name);
        },
        m1() {
            console.log("demo事件被触发了！");
        },
        show() {
            alert('老铁666！');
        },
    },
    mounted() {
        // 绑定自定义事件
        this.$refs.student.$on("atguigu", this.getStudentName);
        // 绑定自定义事件（一次性）
        // this.$refs.student.$once('atguigu', this.getStudentName)
    },
};
</script>

<style>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
