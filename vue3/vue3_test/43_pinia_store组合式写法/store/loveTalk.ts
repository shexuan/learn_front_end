import axios from "axios";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

// export const useTalkStore = defineStore("talk", {
//     actions: {
//         async getATalk() {
//             let response = await axios.get("/api/SweetNothings");
//             let obj = { id: nanoid(), title: response.data };
//             this.talkList.unshift(obj);
//         },
//     },
//     // 真正存储数据的地方
//     state() {
//         return {
//             talkList:
//                 JSON.parse(localStorage.getItem("talkList") as string) || [],
//         };
//     },
// });

import { reactive } from "vue";

export const useTalkStore = defineStore("talk", () => {
    // talkList就是state
    const talkList = reactive(
        JSON.parse(localStorage.getItem("talkList") as string) || [],
    );

    // getATalk函数相当于action
    async function getATalk() {
        let response = await axios.get("/api/SweetNothings");
        let obj = { id: nanoid(), title: response.data };
        talkList.unshift(obj);
    }

    return { talkList, getATalk };
});
