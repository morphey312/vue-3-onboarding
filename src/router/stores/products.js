import { defineStore } from 'pinia'
import axiosInstance from '../../../services/axios.js'

export const useProductsStore = defineStore('products', {
    state: () => ({
        productsState: {},
        productState: {},
    }),
    getters: {
        products: (state) => state.productsState,
        product: (state) => state.productState,
    },
    actions: {
        getProducts(params = {}) {
            axiosInstance.get('/products', {
                params: {
                    limit: 4,
                    ...params
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.productsState = response.data;
                })
        },

        getProduct(id, params = {}) {
            axiosInstance.get(`/products/${id}`, {
                params: {
                    ...params
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.productState = response.data;
                })
        },

    },
})