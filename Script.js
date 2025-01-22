const CountValue = document.querySelector('#counter');


//  function makin g
 const increment = () => {
    // get the value 
    let value = parseInt(CountValue.innerText);
    // increment the value by 1 
    value = value+1;
     // set the value in  
    CountValue.innerText = value;
 };
  // makeing the decremnett function 
   const decrement = () => {
    let value = parseInt(CountValue.innerText);
     value = value-1;
     CountValue.innerText = value;
   };