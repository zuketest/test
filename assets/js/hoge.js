
export const Parse = function (json) {
	return JSON.parse(json);
}

export const requestAnimationFrame = function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
}


