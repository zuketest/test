
import {Parse,requestAnimationFrame} from './hoge';

import {EventEmitter} from 'events';
import boot from './lib/bootstrap.min.js';

requestAnimationFrame();

(function(){

//const parseStr;

var Z = function(el){

	return new Z.fn.init(el);
}

Z.XMLHttp = function(method,url,send,callback){

	var request = new XMLHttpRequest();

	var requestSend = send || null;

	request.open(method, url, true);

	request.onload = function (event) {
	  if (request.readyState === 4) {
	    if (request.status === 200) {
	
	      	callback(request.statusText);
	    } else {
	      console.log(request.statusText); 
	    }
	  }
	};

	request.onerror = function (event) {
	  console.log(event.type); // => "error"
	};

	request.send(requestSend);
}

Z.fn = Z.prototype = {};

Z.fn.copyObj = function(el) {

	this[0] = el;

	return Object.assign({},this,Z.fn);
}

Z.load = function(callback){

	document.addEventListener( 'DOMContentLoaded', function() {

		callback();

	}, false );

}

Z.parseNum = function(val){

	if(typeof val !==  "object") {
		
		return parseFloat(val);
	}
	
	return this;
}

Z.fn.init = function(el){

	if(typeof el === "function") {

		Z.load(function(){

			el();

		});

		return false;
	}

	var element = el === document ? el : document.getElementById(el);

	if(el.match(/\./)){

		element = document.querySelectorAll(el)[0];

	} else {

		element = el === document ? el : document.getElementById(el);
	}

	this[0] = element;

	return this;
}

Z.fn.init.prototype = Z.fn;

Z.fn.find = function(selector){

	var findNodeObj = Z.fn.copyObj(this[0]);

	findNodeObj[0] = this[0].querySelectorAll(selector)[0];

	return findNodeObj;
}

Z.fn.debug = function(){

	return this;
}


Z.fn.siblings = function(){
	
	var findNodeObj = Z.fn.copyObj(this[0]),
		_this = findNodeObj[0];

	siblings =  Array.prototype.filter.call(_this.parentNode.children, function(child) {

	  return child !== _this;

	});

	findNodeObj[0] = siblings;

	return findNodeObj;
}

Z.fn.prev = function(){

	var findNodeObj = Z.fn.copyObj(this[0]);

	findNodeObj[0] = this[0].previousElementSibling;

	return findNodeObj;
}

Z.fn.next = function(){

	var findNodeObj = Z.fn.copyObj(this[0]);

	findNodeObj[0] = this[0].nextElementSibling;

	return findNodeObj;
}

Z.fn.addClass = function(className){

	this[0].classList.add(className);

	return this;
}

Z.fn.removeClass = function(className){

	this[0].classList.remove(className);

	return this;
}

Z.fn.toggle = function(className){

	this[0].classList.toggle(className);

	return this;
}

Z.fn.hasClass = function(className){

	return this[0].classList.contains(className);
}

Z.fn.css = function(){

	if(typeof arguments[0] === "object") {

		for (var key in arguments[0]) {

			this[0].style[key] = arguments[0][key];
		}

		return this;
	
	}

	if (arguments.length > 1) {

		this[0].style[arguments[0]] = arguments[1];

		return this;
	}

	return this[0].style[arguments[0]];
}


Z.fn.width = function(val){
	this[0].style.width = val + "px";
	return this;
}

Z.fn.height = function(val){
	this[0].style.height = val + "px";
	return this;
}


Z.checkFlag = function(arr,conditions){
	return g = arr.some(function(i,o,u){
		return (i >= conditions);
	});
}

Z.fn.appenf = function(){}
Z.fn.appenf = function(){}
Z.fn.appenf = function(){}
Z.fn.appenf = function(){}

Z.fn.attr = function(attr,setattr){

	var setattr = arguments[1];

	if(setattr === undefined) {

		return this[0].getAttribute(attr);
	}
	
	this[0].setAttribute(attr,setattr);

	return this;
}

Z.fn.bindEvent = function(type,callback){

	var cv = callback.bind(this);

	this[0].addEventListener(type,cv);

	return this;
}

Z.fn.onBindEvent = function(type,target,callback){

	this[0].addEventListener(type,function(e){
console.log(e.target.id);
		  if (e.target.id === target) {

		  		callback.call(e.target,e);
		  } 		
	});

	return this;
}

Z.fn.slide = function(val){
	function slideDown(elem) {
		elem.style.maxHeight = '1000px';
		elem.style.opacity   = '1';
	}

	function slideUp(elem) {
		elem.style.maxHeight = '0';
		once( 1, function () {
			elem.style.opacity = '0';
		});
	}

	function once (seconds, callback) {
		var counter = 0;
		var time = window.setInterval( function () {
			counter++;
			if ( counter >= seconds ) {
				callback();
				window.clearInterval( time );
			}
		}, 400 );
	}
	return this;
}



window.Z = Z;
})();







var g = [5,8,7,5].some(function(i,o,u){

return (i >= 10);

});

var mn = {"nb":88};


/*

Z.load(function(e){

alert();

var mml = Z(".vb");

mml.css("width","900").height("2000").css("background","red");
mml.bindEvent("click",function(){
	
	this.css({"background": "blue"});

})




//var nn = po.find(".nn");

//nn.width("900");


//var elements = document.getElementsByTagName("input")[0].getAttribute("checked");



var elements = document.querySelectorAll(".vv");


console.log(Object.keys(elements));


var arr = [];

for(var i = 0; i < elements.length; i++) {
	arr.push(elements[i].getAttribute("checked"));
}


var g = arr.some(function(i,o,u){

return (i === "checked");

});
console.log(g);
})
*/




