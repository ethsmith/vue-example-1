import Vue from 'vue';
import App from './App';

new Vue({
    // can also chain .$mount('#app')
    //el: '#app',
    // same as
    // function (h) {
    //     return h(App);
    // }
    render: h => h(App)
}).$mount('#app');