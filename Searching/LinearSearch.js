//Linear Search

//Given an array of n elements and target element t, find the index of t in the array. Return -1 if the target element is not found.


const arr = [-5,2,10,4,6]




function linearSearch(arr,target){
    for(let i=0; i<arr.length; i++){        // O(n)
        if(arr[i] === target) return i
    }
    return -1
}

console.log(linearSearch(arr,2))
console.log(linearSearch(arr,6))
console.log(linearSearch(arr,3))