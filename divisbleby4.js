//Create a function that returns True if a given number is divisible by 4, otherwise it should return False.


function divisibleByFour (num) {
if ( num%4 ===0){
  return true;
}

else{

return false;
}

}


//better answer 

function divisibleByFour(num){ return !(num % 4); }
