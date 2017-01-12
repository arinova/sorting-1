describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of length 1', function() {
  	expect(bubbleSort([2])).toEqual([2]);
  });

  it('handles an array of length 2', function() {
  	expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });
  it('handles an array of many elements', function() {
  	expect(bubbleSort([5, 9, 3, 6, 2, 1])).toEqual([1, 2, 3, 5, 6, 9]);
  });

  







});