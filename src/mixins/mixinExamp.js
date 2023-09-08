export const myMixin = {
    created() {
        this.helloMixin();
    },
    methods: {
        helloMixin() {
            console.log('Привіт від mixin!');
        }
    }
}