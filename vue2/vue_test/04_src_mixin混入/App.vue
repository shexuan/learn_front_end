<template>
    <div>
        <School />
        <hr />
        <Student />
        <hr>
        <h2>我来自mixin</h2>
        x: {{x}} <br><br>
        y: {{y}} <br><br>
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: "App",
    components: { School, Student },
};
</script>

<style></style>
