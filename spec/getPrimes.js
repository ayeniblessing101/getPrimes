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

});