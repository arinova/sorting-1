
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
	if (leftPointer < left.length) {
		merged = merged.concat(left.slice(leftPointer));
	}
  if (rightPointer < right.length){
		merged = merged.concat(right.slice(rightPointer));
	}

	return merged;
}




function mergeSort(array) {

  console.log("array", array);
	var isSorted = false;
	var sorted = [];


	if (array.length <= 1) {
    sorted=array;
		isSorted = true;
	}

  debugger;
	while (!isSorted) {
		var left = split(array)[0];
		var right = split(array)[1];
  //  console.log("left", left);
  //  console.log("right", right);
		left = mergeSort(left);
		right = mergeSort(right);
    //console.log("merging: " + left + "  and " + right);
  //  console.log("merged", merge(left, right));
		sorted= merge(left, right);
		isSorted = true;
	}

//  console.log("sorted", sorted);
	return sorted;

}
