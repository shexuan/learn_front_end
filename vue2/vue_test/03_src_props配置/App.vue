<template>
    <div>
        <Student name="李四" sex="女" :age="age" />
    </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
    name: "App",
    components: { Student },
    data() {
        return { age: 666 };
    },
};
</script>

<style></style>
