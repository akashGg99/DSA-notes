//Binary search (Dictionary like search)


// CONDITION-
// 1. Binary works only works for sorted arrays. Array must be SORTED for this algorithm.
// 2. Don't confuse binary search with bubble sort.Binary is like searching a Dictionary.



//PROBLEM- Given a sorted array of n elements and a target element t, find the index of t in the array.Return -1 if the target element is not found.


//Pseudocode binary search - (works only for sorted array)
/*
-If the array is empty, return -1 as the element cannot be found.
-If the array has elements, find the middle element in the array.If target is equal to the middle element, return the middle element index.
-If target is less than the middle element, binary search left half of the array.
-If the target is greater than the middle elemnet, binary search right half of the array.
*/


// BigO = O(logn) , beacuse inside loop our array is reduced to half size, thus not linear O(n) but logrithmic

function binarySearch(arr,target){
    let leftIndex=0;                    //first index
    let rightIndex = arr.length-1       //last index

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) /2)

        //checking if target is in middle..
        if(target === arr[middleIndex]){
            return middleIndex
        }
        //should go left or right...
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            if(target > arr[middleIndex]){
                leftIndex = middleIndex + 1
            }
        }
    }
    return -1
}

console.log(binarySearch([-5,2,4,6,10],10))  //4
console.log(binarySearch([-5,2,4,6,10],6))   //3
console.log(binarySearch([-5,2,4,6,10],20))  //-1









//Recurive solution
function recursiveBinary(arr,target){
    if(target === arr[middleIndex])
    recursiveBinary(arr/2,target)
}





