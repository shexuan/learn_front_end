<template>
    <section class="jumbotron">
        <h3 class="jumbbotron-heading">Search Github Users</h3>
        <div>
            <input
                type="text"
                placeholder="enter the name you search"
                v-model="keyWord"
            />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
// npm install axios
import axios from "axios";
export default {
    name: "Search",
    data() {
        return { keyWord: "" };
    },
    methods: {
        searchUsers() {
            // 请求前更新List的数据
            this.$bus.$emit("updateListData", {
                isLoading: true,
                errMsg: "",
                users: [],
                isFirst: false,
            });
            this.$http(
                `https://api.github.com/search/users?q=${this.keyWord}`
            ).then(
                (response) => {
                    console.log("请求成功了");
                    // 请求成功后更新List的数据
                    this.$bus.$emit("updateListData", {
                        isLoading: false,
                        errMsg: "",
                        // this.$http 的 response.data.items 接口以改变，这里未调通
                        users: response.body.items,
                    });
                },
                (error) => {
                    // 请求后更新List数据
                    this.$bus.$emit("updateListData", {
                        isLoading: false,
                        errMsg: error.message,
                        users: [],
                    });
                }
            );
        },
    },
};
</script>
