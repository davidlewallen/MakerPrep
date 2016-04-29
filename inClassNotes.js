/*
4/19/2016
*/
function each(collection, callback) {
	//iterated over the collection passed in and runs the callback given on each element in that collection
	
	if(collection.length > 0) {
		for(i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for(i in collection) {
			callback(collection[i]);
		}
	}
}

var myArray = [6,7,8,9];

each(myArray, function(element) {
	console.log(element + 4);
})

var myObject = {
	name: "MakerPrep",
	location: "Austin"
};

each(myObject, function(element) {
	console.log(element + " Hi");
});

function map(collection, callback) {
	//Use each to iterate over eeach item and apply the callback passed into map on each item. Then push each item to a new array and return that new array.
	var results = [];
	
	each(collection, function(element) {
		results.push(callback(element));
	});

	return results;
}

map(myObject, function(el) {
	return el + " April";
});

map(myArray, function(el) {
	return el + 7;
});


//Seek help out on StackExchange
// Do LearnRX from Slack 

