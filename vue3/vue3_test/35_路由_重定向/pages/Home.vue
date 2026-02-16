<template>
    <div class="home">
        <img src="../../images/image-20231018144351536.png" alt="" />
    </div>
</template>

<script setup lang="ts" name="Home"></script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.home img {
    max-width: 100%; /* 图片宽度最大为父容器宽度，超过则自动缩小 */
    height: 100%; /* 高度按原始比例自动计算 */
}
</style>
