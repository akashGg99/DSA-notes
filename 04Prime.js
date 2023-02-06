//given a natural number n, determine if the number is prime or not.

//A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// isPrime(5) = true  (1*5 or 5*1)
// isPrime(4) = false (2*2 or 1*4 or 4*1)


function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i=2; i<n; i++){        // O(n)
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(0))
console.log(isPrime(4))
console.log(isPrime(5))






function isPrime(n){
    if(n<=1){
        return false
    }
    for(leti=2; i<=Math.sqrt(n); i++){    // O(sqrt(n))
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(0))
console.log(isPrime(4))
console.log(isPrime(5))