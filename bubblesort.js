var arr = [2, 5, 8, 1, 4, 10, 2, 14, 4, 7, 6, -1, 2000, -2000]

function bubbleSort(array){
    for(let i = 0 ; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
                swap(i, j, array)
            }
        }
    }
    return array
}

console.log(bubbleSort([2, 5, 1, 77, 34]))

function swap(i, j, array){
    let holder;
    holder = array[i]
    array[i] = array[j]
    array[j] = holder
}