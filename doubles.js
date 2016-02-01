Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

//Examples of a double number include:

//44
//77
//3333/
//8787
//100100
//In the example 8787, the number 87 is doubled (appears twice).


function trickyDoubles(n){
var doubles = (/([a-zA-Z]).*?\1/).test(n); 

if(doubles == true){
  return n;
}
else{
return n*2;
}

}

//my solution was incorrect it was way more indepth than I first supposed.
// Here is solution from boards

function trickyDoubles(n){
  var nStr = n.toString();
  if ((nStr.length % 2 == 1) || (nStr.slice(0, nStr.length / 2) != nStr.slice(nStr.length / 2,))) {
    return n * 2;
  } else {
    return n;
  }
}
