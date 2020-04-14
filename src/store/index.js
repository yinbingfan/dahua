import Vue from 'vue'
import Vuex from 'vuex'
import productList from './modules/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    productList
  }
})
export default store
