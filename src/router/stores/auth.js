import {defineStore} from "pinia";
import axiosInstance from "../../../services/axios.js"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        usersState: {},
        user: {},
    }),
    getters: {
        users: (state) => state.usersState,
    },
    actions: {
        getUsers() {
            axiosInstance.get('/users')
                .then((respopnse) => {
                    this.usersState = respopnse.data
                })
        },
        loginUser(data) {
            // axiosInstance.post('/auth/login', {
            //     body: data
            // }).then((respons) => {
            //     console.log(respons);
            // })

            this.user = this.usersState.find(user => user.id === 5);
        },
        logout() {
            this.user = {};
        }
    }
})