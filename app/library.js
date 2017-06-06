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
            let primeNumbers = [];

            for(let i = 3; i < n; i++)
            {
                notPrime = primeNumbers.some(checkDivisibleNumber);
                if(!notPrime)
                {
                    primeNumbers.push(i);
                }
            }

        }

        function checkDivisibleNumber(j)
        {
            if i % j === 0
            {
                return primeNumbers;
            }
        }


    }

}