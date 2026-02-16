import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
    // actions存放方法
    actions: {
        increment(value: number) {
            console.log("increment被调用了", value);
            if (this.sum < 10) {
                // 修改数据（this是当前的store）
                this.sum += value;
            }
        },
    },
    // 真正储存数据的地方
    state() {
        return { sum: 6, school: "atguigu", address: "霍格沃茨" };
    },
    getters: {
        bigSum: (state) => state.sum * 10,
        upperSchool(): string {
            return this.school.toUpperCase();
        },
    },
});
