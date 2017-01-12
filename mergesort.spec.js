describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([0, 1, 2, 3, 4, 5, 6])).toEqual([[0, 1, 2], [3, 4, 5, 6]]);
  });

  it('is able to deal with an empty array', function() {
  	expect(split([])).toEqual([]);
  });

  it('is able to deal with an array with only one element', function() {
  	expect(split([0])).toEqual([0]);
  });


});



describe('Merge function', function() {

	it('is able to merge two arrays with one element in each', function() {
		expect(merge([2], [5])).toEqual([2, 5]);
	});

	it('is able to merge two empty arrays', function() {
		expect(merge([], [])).toEqual([]);
	});

	it('is able to merge two arrays where the first array is longer', function(){
		expect(merge([3, 5, 8], [1, 6])).toEqual([1, 3, 5, 6, 8]);
	});

	it('is able to merge two arrays where the second array is longer', function() {
		expect(merge([1, 6], [3, 5, 8])).toEqual([1, 3, 5, 6, 8]);
	});
});





describe('MergeSort', function(){
	it('perform merge sort on empty array', function() {
		expect(mergeSort([])).toEqual([]);
	});

	it('perform merge sort on array length 1', function() {
		expect(mergeSort([1])).toEqual([1]);
	});

	it('mergeSort', function(){
		expect(mergeSort([5, 3, 8, 6, 1])).toEqual([1, 3, 5, 6, 8]);
	});


});