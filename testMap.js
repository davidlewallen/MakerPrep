function each(collection, callback) {
	//iterated over the collection passed in and runs the callback given on each element in that collection
	if(Array.isArray(collection)) {
		for(var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for(var key in collection) {
			callback(collection[key]);
		}
	}
}

function map(collection, callback) {
	var results = [];

	each(collection, function(element) {
		results.push(callback(element))
	});

	return results;
}

function filter(collection, callback) {
	var results = [];
	each(collection, function(element) {
		if(callback(element))
			results.push(element)
	})

	return results;
}

var temp = [1,2,3,4]

console.log(filter(temp, function(x) {
	return x > 2;
}))

function reduce(collection, callback) {
	
}