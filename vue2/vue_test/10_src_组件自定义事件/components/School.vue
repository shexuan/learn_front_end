<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">
            【子传父数据-props函数实现】点我把学校名字发送给App
        </button>
    </div>
</template>

<script>
export default {
    name: "School",
    props: ["getSchoolName"],
    data() {
        return {
            name: "霍格沃茨",
            address: "伦敦",
        };
    },
    methods: {
        sendSchoolName() {
            console.log("props 函数实现子传父数据");
            this.getSchoolName(this.name);
        },
    },
};
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
