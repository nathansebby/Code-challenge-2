function array = [1,2,3,4,5,6,7,8,9,10];
 function filterPrimes(array){
  function isPrime(num){
    if (num<2){
      return false;
    
    }
    for (let i =2;i * i <= num; i++){
      if (num % i===0){
        return false;
      }
    }
    return true;
  }
  return array.Primes;
 }
 primes = filterPrimes(array)
 console.log(primes);