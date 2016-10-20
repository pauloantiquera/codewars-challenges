'use strict'

function stringToArray(stringToSplit) {
    
    if (stringToSplit) {
        return stringToSplit.split(' ');
    }
    
    return [];
}

module.exports = stringToArray;