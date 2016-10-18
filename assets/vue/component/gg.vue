

<template>
<div>
<h1>{{title}}</h1>
  <li v-for="item in todohuken">
    {{ item.name }}
  </li>
  <input type="text" v-model="foo" number>
  <p v-text="tex"></p>
  <p @click='increment($event,9)' class="inc">{{count}}</p>

  <comp-a></comp-a>

</div>
</template>

<script>
import {incrementCounter} from '../vuex/actions/action';
import pat from './parts.vue';
export default {
  data() {
    return {
      todohuken: [
      { name: 'Tokyo' },
      { name: 'Osaka' },
      { name: 'Osaka' }
      ],
      foo: 0
    }
  },
  ready: function(){



  },
  components: {
    'comp-a': pat
  },
  computed: {

    tex: function(){

      return this.foo * 9;
    }
    
  },

   vuex: {
     getters: {


       count: function (state) {

         return state.mod1.count
       },
       title: function (state) {
         return state.mod1.test
       }       
     },
      actions: {
        increment: incrementCounter
      }

   }  
}
</script>
