'use strict';
module.exports = {
    
    function getPrimes(n){
      var primeNumbers = [];
      if(isNaN(n))
      {
        return "invalid argument";
      }
      else if(n < 2)
     {
       return [];
     }
     for (var counter = 0; counter <= n; counter++){
        for (var i = 2; i <= counter; i++){
          if(counter === i){
            primeNumbers.push(i);
          }
          if(counter % i === 0){
            break;
          }
        }
      }
      return primeNumbers;
    }

}

