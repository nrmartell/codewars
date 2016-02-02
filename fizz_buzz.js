function fizzbuzz() {
  for( i = 0; i<=100; i++){
   if(i % 15 === 0)
   console.log( "fizz buzz"); 

   else if ( i % 3 === 0)
   console.log ("fizz");  
  
   else if (i % 5 === 0) 
    console.log ("buzz"); 
 
   else
  console.log (i); 
 
}


    
}

 fizzbuzz();
 
 
 // couple of solutions I thought were neat
 
 function fizzbuzz(num) {
  return num % 3 == 0 && num % 5 == 0 ? 'fizz buzz' :
         num % 3 == 0 ? 'fizz':
         num % 5 == 0 ? 'buzz':
         num;
}


function fizzbuzz(n){return !(n%15)?'fizz buzz':!(n%5)?'buzz':!(n%3)?'fizz':n}
