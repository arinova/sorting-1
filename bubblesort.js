// takes unsorted array of length n
// loop and compare arr[i] and arr[i +1]
// if !sorted...sort
// arr[i++]
// compare new arr[i]
// etc

function bubbleSort(arr) {
	var temp;
	var length = arr.length;

	while (length) {
		for (var i = 0, j = i +1; i < length - 1; i++, j++) {
			if (arr[i] > arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		length--;
	}
	return arr;
}