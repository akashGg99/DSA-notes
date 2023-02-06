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



