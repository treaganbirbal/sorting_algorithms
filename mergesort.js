//split an array into 2 arrays with both halves
function split(array) {
  let midPoint = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, midPoint);
  let secondHalf = array.slice(midPoint);
  return [firstHalf, secondHalf];
}

//using split & merge
function mergeSort(array) {
  if(array.length < 2){
      return array
  } else {
     let splittedArray = split(array)
    return merge(mergeSort(splittedArray[0]), mergeSort(splittedArray[1]))
  }
}

//takes 2 sorted arrays and merge into 1 array

function merge(arr1, arr2) {
    let outputArr = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        outputArr.push(arr1.shift());
      } else {
        outputArr.push(arr2.shift());
      }
    }
    if (arr1.length) {
      outputArr.push(arr1.shift());
    }
    if (arr2.length) {
      outputArr.push(arr2.shift());
    }
    return outputArr;
}

console.log(mergeSort([1, 22, 15, 6, 57, 32, 9]));
