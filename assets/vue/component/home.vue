<style>
.login-app {
	background: red;
}

</style>

<template>
<div class="login-app">
	<h2>{{title}}</h2>
	<form id="form01" v-el:form action="http://localhost/gdir/">
		<table>
			<tr>
				<th>メールアドレス</th>
				<td>
					<p><input @keyup="variMail" type="text" name="" value=""></p>
					<p v-show="mailError">ちゃんと入力してね！</p>
				</td>
			</tr>
			<tr>
				<th>パスワード</th>
				<td>
					<p><input v-el:pass @keyup="variPass" type="{{typeInput}}" name="" value=""></p>
					<p v-show="passError">ちゃんと入力してね！</p>
					<p @click="showPass(element.passInput)">表示</p>

				</td>
			</tr>		
		</table>
		<button @click="sendAction($event,element.form)" type="submit">送信</button>
	</form>
</div>
<!-- /.inner -->
</template>


<script>
	

import {invariedPassShow,invariedPass,invariedMail,submitSend} from '../vuex/actions/action';
 module.exports  = {
	data() {
		return {
			title: "ログイン!",
			element: {}
		}
	},
	ready(){
		this.$set("element.form",this.$els.form);
		this.$set("element.passInput",this.$els.pass);
	},
   vuex: {
     getters: {
       count: function (state) {
         return state.mod1.count;
       },
       typeInput: function (state) {
         return state.validator.type
       },
       mailError: function (state) {
         return state.validator.flag.mail;
       },
       passError: function (state) {
         return state.validator.flag.pass;
       },      
     },
	  actions: {
	    showPass: invariedPassShow ,
	    variMail: invariedMail,
	    variPass: invariedPass,
	    sendAction: submitSend
	  }
   } 
}



</script>
