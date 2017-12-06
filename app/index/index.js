import Vue from 'vue'
import Favlist from './components/Favlist.vue'

Vue.config.debug = true;
window.onload = function(){
    new Vue({
        el: '#app',
        components: { Favlist }
    });
}