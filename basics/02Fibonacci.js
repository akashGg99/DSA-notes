//given a number n, find the first n elements od the fibonaci sequence.

// fib(2) = [0,1]
// fib(7) = [0,1,1,2,3,5,8]



function fibonacci(n){
    let fib=[0,1]
    if(n<=2) return arr

    for(let i=2; i<n; i++){             // O(n) 
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(7))





//given n find the fibonacci of the nth element. Recursive solution
 
function recursiveFib(n){
    if(n<2) return n              //base case
    return recursiveFib(n-1) + recursiveFib(n-2)
}

console.log(recursiveFib(7))



// O(2^n)     -- as the  function is called twice everytime.

// O(2^n) is worst TC than the iterative solution with O(n) TC. thus recursion for fib is not useful.