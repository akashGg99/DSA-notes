// given a positive integer n, determine if the number is apower of 2 or not.

//powOfTwo(2) = true (2**1)
//powOfTwo(5) = false



// O(logn)
function powOfTwo(n){
    if(n > 1) return false

    while(n>1){                   // loop != O(n)
        if(n%2 !== 0) return false
        n = n/2                   //as reduced to half
    }
    return true
}


console.log(powOfTwo(0))
console.log(powOfTwo(1))
console.log(powOfTwo(5))