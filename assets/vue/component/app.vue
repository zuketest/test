
<style>

#footer {
	margin-top: 60px;
	border-top: solid 1px #ccc;

}
</style>

<template>

<div id="wrapper">
<header>
<h1 class="red">{{title}}</h1>
</header>
<nav>
<ul>
	<li><a v-link="{ path: '/' }">Home</a></li>
	<li><a v-link="{ path: '/about' }">about</a></li>
	<li><a v-link="">works</a></li>
</ul>
</nav>
<div id="container">
<router-view></router-view>
</div>
<!-- /#container -->

<footer id="footer">
	<div class="footerInner">
		

	</div>
	<!-- /.footerInner -->
	<p class="copy">copyright</p>
	<!-- /.copy -->
</footer>
</div>
</template>

<script>
	

import store from '../vuex/store';

 module.exports = {
	data() {
		return {
			message: "home!",
			checkedNames: [],
			ob:[]
		}
	},
	store,
	ready: function(){

    this.$http({url: 'http://localhost/gdir/test.json'}).then(function (response) {
  
   	this.$set('ob',response.json().item);
    }, function (response) {




    });

	},


   vuex: {
     getters: {
       title: function (state) {
         return state.mod1.test
       }
     }

   } 
}



</script>
