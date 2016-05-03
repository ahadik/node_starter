require('babel-core/register');
var exports = module.exports = {};

exports.hello = function(){
	return "Hello World";
}

exports.es6 = function(){
	var a,b;
	[a,b] = [1,2];
	[a,b] = [b,a]; //take a look at the es5 this transpiles to in /modules/final
}