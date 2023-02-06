//Given an interger n, find the factorial of that integer.


function factorial(n){
    let result =1
    for(let i=1; i<=n; i++){      // O(n)
        result = result * i
    }
    return result
}


console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))





//recursive solution -  Big-O = O(n) 

function recursivefact(n){
    if(n===0) return 1          //base case, 0! = 1

    let factorial = n * recursivefact(n-1)
    return factorial
}

console.log(recursivefact(0))
console.log(recursivefact(1))
console.log(recursivefact(5))