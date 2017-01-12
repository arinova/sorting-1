
function split(wholeArray) {

	if (wholeArray.length <= 1) {
  		return wholeArray;
 	 }

	var middle = Math.floor(wholeArray.length / 2);
	var firstHalf = wholeArray.slice(0, middle);
	var secondHalf = wholeArray.slice(middle);



	return [firstHalf, secondHalf];
}



function merge(left, right) {
	var merged = [];
	var leftPointer = 0, rightPointer = 0;

	while (leftPointer < left.length && rightPointer < right.length) {
		if (left[leftPointer] <= right[rightPointer]) {
			merged.push(left[leftPointer]);
			leftPointer++;
		} else {
			merged.push(right[rightPointer]);
			rightPointer++;
		}

	}
	if (left.length > right.length) {
		merged = merged.concat(left.slice(leftPointer));
	} else {
		merged = merged.concat(right.slice(rightPointer));
	}

	return merged;
}




function mergeSort(array) {

	var isSorted = false;
	var sorted = [];
	
	
	if (array.length <= 1) {
		isSorted = true;
	}


	while (!isSorted) {
		var left = split(array)[0];
		var right = split(array)[1];
		left = mergeSort(left);
		right = mergeSort(right);
		sorted = merge(left, right);
		isSorted = true;
	}
	
	return sorted;
  
}