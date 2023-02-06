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