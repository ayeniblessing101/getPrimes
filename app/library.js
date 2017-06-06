'use strict';
module.exports = {

    getPrimes: (n) => {

        if(isNaN(n))
        {
            return "invalid argument";
        }
        else if(n < 2)
        {
            return [];
        }
        else 
        {
            var primeNumbers = [];

            for(var i = 2; i < n; i++)
            {
               if(n % i === 0)
               {

               } 
            }
            return primeNumbers.push(i);
        }
    }

}