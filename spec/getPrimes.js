const myApp = require('../app/library.js');

beforeEach(function() {
        ;
    });

describe('Generate Prime numbers for an Integer:', function(){

    describe('Check for Invalid argument', function(){

        it('should return `invalid argument` for `b`', function(){
            expect(myApp.getPrimes('b')).toEqual('invalid argument');
        });
        it('should return [] for -1', function () {
            expect(myApp.getPrimes(-1)).toEqual([]);
        });
        it('should return [] for number less than 2', function () {
            expect(myApp.getPrimes(1)).toEqual([]);
        });

    });

    describe('Return the generated prime numbers in a list', function () {
        it('should return [] for 0', function () {
      expect(myApp.getPrimes(0)).toEqual([]);
        });

        it('should return [2, 3, 5, 7] for 10', function () {
          expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
        });

        it('should return [2, 3, 5, 7, 11, 13, 17, 19] for 20', function () {
          expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
        });
    });

});