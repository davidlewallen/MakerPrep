function reduce(collection, accumulator, startVal){
	//Take each element of the array and apply a callback function to it and whatever startVal you had, either user defined or the first element value

	each(collection, function(element) {
		if(startVal === undefined) {
			startVal = element;
		} else {
			startVal = accumulator(startVal, element);
		}
	});
	return startVal;
}

//Recursion
function countToThree(startVal) {
	if(startVal <= 3) {
		return;
	}

	countToThree(startVal + 1);
	console.log(startVal)
}
/*
	If we use the startVal of 0 we will get the following:
	2
	1
	0

	We start with 0 and see if it is equal to the base case (Not)
	We then call countToThree with the value of 0 (0+1)
	We then check to see if 1 is equal to the base case(Not)
	We then call countToThree with the value of 1 (1+1) 
	we then check to see if 2 is equal to the base case(Not)
	we then call countToThree with the value of 2 (2+1) 
	We then check to see if 3 is equal to the base case (Yes) and exit before calling anything.
	We then output from the bottom up (E.G. Last function call to the first)
	Output will be 2 \n 1 \n 0