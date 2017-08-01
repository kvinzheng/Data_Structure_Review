function merge(arr1, arr2){
  let result = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] < arr2[0]){
      result.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else if (arr2[0] < arr1[0]){
      result.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }
  return result.concat(arr1).concat(arr2)
}

// console.log(merge([1,3,5,7],[2,4,6,8]));

function mergeSort(arr){
  let middle = Math.floor(arr.length/2);
  if(arr.length === 1){
    return arr;
  }

  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right))
}
console.log(mergeSort([3.1,4.5,1,2,5]));

module.exports = { merge, mergeSort }
