var ddArray = [[1,2,3,4,5],[6,7,8,9,10]];
var newArray = [];

var test = ddArray.forEach(function(el) {
	newArray.push(el + 1)
});

console.log(test);

var 
console.log(ddArray.map(function(el) {
	return el + 1;
}))