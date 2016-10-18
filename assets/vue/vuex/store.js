import Vue from 'vue';
import Vuex from 'vuex';
import mod1 from './module/moudule_1';
import validator from './module/validator';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    mod1,
    validator
  }
})


