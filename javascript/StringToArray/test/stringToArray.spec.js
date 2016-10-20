'use strict'

describe('String To Array Solution', function() {
    const stringToArray = require('../stringToArray');

    it('Module should expose a function', function() {
        expect(stringToArray).toEqual(jasmine.any(Function));
    });

    describe('stringToArray(stringToSplit)', function() {
        it('should return an array', function() {
            let arrayOfStrings = stringToArray();

            expect(arrayOfStrings).toEqual(jasmine.any(Array));
        });

        it('should return an empty array if no string is provided', function() {
            let arrayOfStrings = stringToArray();

            expect(arrayOfStrings.length).toBe(0);
        });

        it('should return an empty array if an empty string is provided', function() {
            let arrayOfStrings = stringToArray('');

            expect(arrayOfStrings.length).toBe(0);
        });

        it('should return an array with two positions for a two word string', function() {
            let twoWordString = 'Robin Singh';            
            let arrayOfStrings = stringToArray(twoWordString);

            expect(arrayOfStrings.length).toBe(2);
        });

        it('should return an array with `Robin` and `Singh` as first and second array positions values', function() {
            let name = 'Robin Singh';
            let arrayOfStrings = stringToArray(name);

            expect(arrayOfStrings[0]).toBe('Robin');
            expect(arrayOfStrings[1]).toBe('Singh');

        });
    });
});