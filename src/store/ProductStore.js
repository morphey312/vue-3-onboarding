import {defineStore} from 'pinia'
import axiosInstance from "../../services/axios.js";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
    }),
    getters: {
        products: (state) => state.productsState,
    },
    actions: {
        getProducts(params = {}) {
            axiosInstance.get('/products', {
                params: {
                    limit: 10,
                    ...params
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.productsState = response.data;
                })
        },
    }
})