//Bubble sort has a case performance of O(n^2);
function bubbleSort(arr){
  let done = false;
  while(!done){
      done = true;
    for(let i = 0; i < arr.length; i++){
      let current = arr[i];
      let next = arr[i+1];
      if(current > next){
        done = false;
        [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([3.1, 0, 10, 4.5,1,2,5]));

//Selection sort has a case performance of O(n^2)
function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let currentMin = arr[i];
    let currentMinIndex = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < currentMin){
        currentMin = arr[j];
        currentMinIndex = j;
      }
    }
    if(i !== currentMinIndex){
      [ arr[i], arr[currentMinIndex]] = [arr[currentMinIndex], arr[i]];
    }
  }
  return arr;
}

// console.log(selectionSort([3.1, 0, 10, 4.5,1,2,5]));


//Insertion Sort has a case performance of O(n^2)
function insertionSort(arr) {

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let j ;
    for(j = i - 1; j >= 0 && arr[j] > current ; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  return arr;
}

console.log(insertionSort([3.1, 0, 10, 4.5,1,2,5]));
