import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import actions from './action'
import mutations from './mutations'
Vue.use(Vuex);

const state = {
    id: 9928,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})