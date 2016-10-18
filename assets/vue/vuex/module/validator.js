
const state = {
	title: "ログイン",
	type: "password",
	flag: {
		mail: false,
		pass: false
	}
}

const mutations = {

	
  SHOWPASS (state, mutations) {
    state.type = state.type === "password"?"text":"password";
  },


  MAIL (state, mutations) {
	if(!mutations.value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) || !mutations.value) {
		state.flag.mail = true;
		return false;
	}
		state.flag.mail = false;
  },


  PASS (state, mutations) {
	if(!mutations.value.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i) || !mutations.value) {
		state.flag.pass = true;
		return false;
	}
	state.flag.pass = false;
  },


  SEND (state, mutations) {

  	let input = document.getElementsByTagName("input");
  	let flag = false;
  	
  	Array.prototype.forEach.call(input,function(i,o){
		if(!i.value) flag = true;	
  	});

	if(state.flag.mail || state.flag.pass || flag) {
		alert("alert");
		return false;
	}
	mutations.send.submit();
  }
}

export default {
  state,
  mutations
}


