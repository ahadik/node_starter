var exports = module.exports = {};

exports.hello = function(){
	return "Hello World";
}

exports.es6 = function(){
	var [a,b] = [1,2];
	[a,b] = [b,a];
}