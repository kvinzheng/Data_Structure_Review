function binarySearch(array, value, min = 0, max = array.length) {
  if (min > max) return -1;

  let midIndex = Math.floor( (min + max)/2 );

  if( array[midIndex] === value) {
    return midIndex;
  }

  if( value > array[midIndex]){
    return binarySearch(array, value, min = midIndex + 1 , max )
  } else if ( value < array[midIndex]){
    return binarySearch(array, value, min, max = midIndex -1 )
  }

};

console.log(binarySearch([1,2,3,4,5,6,7,8], 2));
