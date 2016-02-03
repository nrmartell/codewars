//Make a program that takes input and returns "Fizz" if it is a multiple of 7, "Fang" if it is a mulitple of 49 AND 3, "Foo" if it is a multiple of 15, and "Far" if it is not divisible by any of those.

function multiples(x){

if( x % 147 === 0){
  return "Fang";
  }
if (x % 7 === 0){
  return "Fizz";
}

if(x % 15 === 0){
 return "Foo";
}

else{
return "Far";
}

}
