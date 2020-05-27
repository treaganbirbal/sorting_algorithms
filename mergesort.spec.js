describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([2, 5, 1, 19, 77, 34])).toEqual([[2, 5, 1], [19, 77, 34]])
    });
  });
  
  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([2],[1])).toEqual([1,2])
    });
  });