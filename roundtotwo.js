
//Each number should be formatted that it is rounded to two decimal places. 
//You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

function twoDecimalPlaces(n) {
    
     
     n = Math.round(n * 100) / 100;
     console.log(n);
     
     return n;

}

twoDecimalPlaces();
