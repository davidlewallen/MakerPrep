/*     4/20/2016 */

function each(list, func) {
	if(Array.isArray(list)) {
		for(var check = 0; check < list.length; check++) {
			func(list[check]);
		};
	} else {
		for(var i in list) {
			func(list[i]);
		}
	}
}

function map(stuff, callback) {
	var newArray = [];

	//each(stuff,function(x) {
	//	newArray.push(callback(x));
	//});
	var pusher = function(val){
		newArray.push(callback(val));
	}

	each(stuff, pusher);
	return newArray;
}

map([1,2,3,4,5], function(val) {return val*3});

function filter(collection, test) {
	//Iterate over the collection, push all items that pass our callback test to a new array and return that new array

	var newArray = [];

	each(collection,function(x) {
		if(test(x)) {
			newArray.push(x);
		}
	});
}

[1,2,3,4,5].filter(function(val){return val > 2});


function reduce(collection, accumulator, startVal) {
	var index;
	var final;
	if(startVal) {
		index = 0;
		final = startVal;
	} else {
		final = collection[0];
		index = 1
	}
	while(index < collection.length) {
		final = accumulator(final, collection[index]);
		index++;
	}
	return final;
}

function reduceV2(collection, accumulator, startVal) {
	each(collection, function(val) {
		if(startVal === undefined) {
			startVal = val;
		} else {
		startVal = accumulator(startVal, val);
		}
	});
	return startVal;
};

reduceV2([1,2,3,4], function(x, y) {return x+y})







var filterArray = [1,2,3,4,5].filter(function(el) { return el > 3})
console.log(filterArray)





var temp = [1,2,3,4,5]

function filterv2(){
	for(i = 0; i< temp.length; i++) {
		var tempArray = [];
		if(temp[i] > 3) {
			tempArray.push(temp[i]);
		}
	}
	return tempArray;
}

console.log(filterv2);