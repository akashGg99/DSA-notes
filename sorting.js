// ===bubble sort====

// let arr = [4,2,1,9,5,7,3];

// function bubbleSort(arr){
//     let n = arr.length;
//     for(let i = 0; i<n; i++){
//         for(let j = 0; j<n-i; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     } 
//     return arr;
// }


// const result = bubbleSort(arr);
// console.log(result);


// ==================selection sort==============


// let arr = [4,2,1,9,5,7,3,4,5,7,8,9,6,4,3,2,2,3,4,5];

// function selectionSort(arr){
//     let n = arr.length;
//     let min;
//     for(let i = 0; i < n-1; i++){
//         min = i;
//         for(let j = i+1; j<n;j++){
//             if(arr[j]< arr[min]){
//                 min = j;
//             }
//         }
//         if(i != min){
//             [arr[i],arr[min]] = [arr[min],arr[i]]
//         }
//     }
//     return arr;
// }

// const result = selectionSort(arr);
// console.log(result);


// ============merge sort===============



function conquer(a1,a2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < a1.length && j < a2.length ){
        if(a1[i] < a2[j]){
            result.push(a1[i]);
            i++;
        }else{
            result.push(a2[j]);
            j++;
        }
    }
    while(i < a1.length){
        result.push(a1[i]);
        i++;
    }
    while(j < a2.length){
        result.push(a2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return conquer(left,right);
}

let arr = [4,2,1,9,5,7,3];

console.log(mergeSort(arr));
