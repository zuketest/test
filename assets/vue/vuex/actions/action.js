export const incrementCounter = function ({ dispatch, state },event,m) {
	dispatch({type:'INCREMENT',a:event,f:m});
}
export const invariedMail = function ({ dispatch, state },event) {

	dispatch({type:'MAIL',value:event.target.value});
}
export const invariedPass = function ({ dispatch, state },event) {

	dispatch({type:'PASS',value:event.target.value});
}
export const invariedPassShow = function ({ dispatch, state }) {
	
	dispatch({type:'SHOWPASS'});
}

export const submitSend = function ({ dispatch, state },event,form) {
	event.preventDefault();
	dispatch({type:'SEND',ev: event,send: form});
}


